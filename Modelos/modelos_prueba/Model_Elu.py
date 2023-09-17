#Libraries
from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from sklearn.ensemble import IsolationForest
import warnings
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import itertools
from pylab import rcParams
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
import pypyodbc
import tensorflow as tf

#Conn and credentials
conn_str = 'Driver={ODBC Driver 18 for SQL Server};Server=tcp:servidortcprueba.database.windows.net,1433;Database=db_campechanos;Uid=adminraul;Pwd=5ccu9$j$XzhNMMF;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'
connection = pypyodbc.connect(conn_str)
cursor = connection.cursor()

#Training dataset
query = "SELECT * FROM dev_train"
cursor.execute(query)
rows = cursor.fetchall()
df_train = pd.DataFrame(rows)

columns = [column[0] for column in cursor.description]
df_train.columns = columns

#Test dataset, dont have sales price
query = "SELECT * FROM dev_test"
cursor.execute(query)
rows = cursor.fetchall()
df_test = pd.DataFrame(rows)

columns = [column[0] for column in cursor.description]
df_test.columns = columns

#Sample dataset, id and sales price
query = "SELECT * FROM sample"
cursor.execute(query)
rows = cursor.fetchall()
df_sample = pd.DataFrame(rows)

columns = [column[0] for column in cursor.description]
df_sample.columns = columns

train = df_train
print('Shape of the train data with all features:', train.shape)
train = train.select_dtypes(exclude=['object'])
print("")
print('Shape of the train data with numerical features:', train.shape)

train=train.replace('NA',0)

test_list = train.columns.tolist()
test_list.remove('saleprice')
test = df_test[test_list]
ID = df_test.id
test= test.replace('NA',0)


print("")
print("List of features contained in our dataset:", list(train.columns))


clf = IsolationForest(max_samples = 100, random_state = 42)
clf.fit(train)
y_noano = clf.predict(train)
y_noano = pd.DataFrame(y_noano, columns = ['Top'])
y_noano[y_noano['Top'] == 1].index.values

train = train.iloc[y_noano[y_noano['Top'] == 1].index.values]
train.reset_index(drop = True, inplace = True)
print("Number of Outliers:", y_noano[y_noano['Top'] == -1].shape[0])
print("Number of rows without outliers:", train.shape[0])

warnings.filterwarnings('ignore')

col_train = list(train.columns)
col_train_bis = list(train.columns)

col_train_bis.remove('saleprice')

mat_train = np.asarray(train)  # Convert to numpy.array
mat_test = np.asarray(test)  # Convert to numpy.array
mat_new = np.asarray(train.drop('saleprice', axis=1))  # Convert to numpy.array

# Ensure that the number of rows in mat_y matches the number of rows in train
mat_y = np.asarray(train['saleprice']).reshape((-1, 1))  # Convert to numpy.array

prepro_y = MinMaxScaler()
prepro_y.fit(mat_y)

prepro = MinMaxScaler()
prepro.fit(mat_train)

prepro_test = MinMaxScaler()
prepro_test.fit(mat_new)

train = pd.DataFrame(prepro.transform(mat_train), columns=col_train)
test = pd.DataFrame(prepro_test.transform(mat_test), columns=col_train_bis)

# List of features
COLUMNS = col_train
FEATURES = col_train_bis
LABEL = "saleprice"

# Columns for TensorFlow 2.x
feature_cols = [tf.feature_column.numeric_column(k) for k in FEATURES]

# Training set and Prediction set with the features to predict
training_set = train[COLUMNS]
prediction_set = train.saleprice

# Train and Test split
x_train, x_test, y_train, y_test = train_test_split(training_set[FEATURES], prediction_set, test_size=0.33, random_state=42)
y_train = pd.DataFrame(y_train, columns=[LABEL])

# Create DataFrames for training data
training_set = pd.DataFrame(x_train, columns=FEATURES)
training_set[LABEL] = y_train


# Same thing but for the test set
y_test = pd.DataFrame(y_test, columns = [LABEL])
testing_set = pd.DataFrame(x_test, columns = FEATURES).merge(y_test, left_index = True, right_index = True)

#y_predict = regressor.predict(input_fn=lambda: input_fn(test, pred = True))

def to_submit(pred_y,name_out):
    y_predict = list(itertools.islice(pred_y, test.shape[0]))
    y_predict = [item['predictions'][0] for item in y_predict]
    y_predict = pd.DataFrame(prepro_y.inverse_transform(np.array(y_predict).reshape(len(y_predict),1)), columns = ['SalePrice'])
    y_predict = y_predict.join(ID)
    y_predict.to_csv(name_out + '.csv',index=False)

#to_submit(y_predict, "submission_continuous")


def input_fn(data_set, pred = False):

    if pred == False:

        feature_cols = {k: tf.constant(data_set[k].values) for k in FEATURES}
        labels = tf.constant(data_set[LABEL].values)

        return feature_cols, labels

    if pred == True:
        feature_cols = {k: tf.constant(data_set[k].values) for k in FEATURES}

        return feature_cols
    
# Model
regressor = tf.estimator.DNNRegressor(feature_columns=feature_cols,
                                          activation_fn = tf.nn.elu, hidden_units=[300, 150, 75, 35, 12])

# Deep Neural Network Regressor with the training set which contain the data split by train test split
regressor.train(input_fn=lambda: input_fn(training_set), steps=500)

# Evaluation on the test set created by train_test_split
ev = regressor.evaluate(input_fn=lambda: input_fn(testing_set), steps=1)

loss_score3 = ev["loss"]

print("Final Loss on the testing set with Elu: {0:f}".format(loss_score3))

# Predictions
y_predict = regressor.predict(input_fn=lambda: input_fn(test, pred = True))
to_submit(y_predict, "PElu")

# Save the model
serving_input_fn = tf.estimator.export.build_parsing_serving_input_receiver_fn(
  tf.feature_column.make_parse_example_spec(feature_cols))
modelBasePath = "./"

# Guardar el modelo
regressor.export_saved_model(modelBasePath, serving_input_fn)
model_dir ='C:/Users/rauli/OneDrive/Documentos/Python Programs/IA-House-Prices/models/house-prices-advanced-regression-techniques/1694717742'

graph = tf.Graph()
with graph.as_default():
    x = tf.constant(1.0)
    y = tf.constant(2.0)
    # Predict with the loaded model (example)
    loaded_regressor = tf.compat.v2.saved_model.load(model_dir)
    y_predict_loaded = loaded_regressor.predict(input_fn=lambda: input_fn(test, pred=True))
    to_submit(y_predict_loaded, "PElu_loaded")