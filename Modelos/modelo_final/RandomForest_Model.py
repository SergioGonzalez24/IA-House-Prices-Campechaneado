#Libraries
import pypyodbc
import pandas as pd
#Conn and credentials
conn_str = 'Driver={ODBC Driver 18 for SQL Server};Server=tcp:servidortcprueba.database.windows.net,1433;Database=db_campechanos;Uid=adminraul;Pwd=5ccu9$j$XzhNMMF;Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;'
connection = pypyodbc.connect(conn_str)
cursor = connection.cursor()

#Training dataset
query = "SELECT * FROM train"
cursor.execute(query)
rows = cursor.fetchall()
df_train = pd.DataFrame(rows)

columns = [column[0] for column in cursor.description]
df_train.columns = columns

#Test dataset, dont have sales price
query = "SELECT * FROM test"
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
import pandas as pd
import xgboost as xgb
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score
df_test=df_test.drop('na_mszoning',axis=1)
df_test= df_test.drop('na_saletype',axis=1)
columns_in_test = df_test.columns

# Filtra las columnas en df_train que también están en df_test
df_train_filtered = df_train[columns_in_test]
X_train = df_train.drop('saleprice', axis=1)  # Ajusta 'target_column' a tu columna objetivo real
y_train = df_train['saleprice']
X_train = X_train.drop('id',axis=1)

X_train=X_train.drop('is_house_25fstory',axis=1)
columns_in_train = X_train.columns

# Filtra las columnas en df_test que también están en df_train
df_test_filtered = df_test[columns_in_train]
X_test = df_test_filtered
y_test = df_sample['saleprice']
import numpy as np
X_train= X_train.replace(np.nan,0)
X_test= X_test.replace(np.nan,0)
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score

# Crear un modelo de bosque aleatorio
model = RandomForestRegressor(random_state=42)

# Entrenar el modelo
model.fit(X_train, y_train)

# Realizar predicciones en el conjunto de prueba
y_pred = model.predict(X_test)

# Calcular métricas de evaluación
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

# Imprimir las métricas
print(f"Error cuadrático medio (MSE): {mse}")
print(f"Coeficiente de determinación (R^2): {r2}")

''' predictions to csv
predictions_df = pd.DataFrame({'Id': df_sample['id'], 'SalePrice': y_pred})
predictions_df.to_csv('Apredicciones.csv', index=False)

# Imprime las primeras filas del archivo CSV
print(predictions_df.head())
'''
import joblib
joblib.dump(model,'arbol.joblib')

'''
Input predictions:
loaded_model = joblib.load('arbol.joblib')
If its a df:
X_new = X_test.values
predictions = loaded_model.predict(X_new)
print(predictions)
If its a single line:

X_new = df_test.loc[1].values
predictions = loaded_model.predict(X_new.reshape(1, -1))
print(predictions)

'''