from flask import Flask, render_template,jsonify,request
import numpy as np
from joblib import load
import os

#Cargar el modelo
# dt=load('dt1.joblib')

#Servidor (backend)
servidorWeb = Flask(__name__)

#Envio de datos a través de JSON
@servidorWeb.route('/modelo',methods=['POST'])
def modeloPrediccion():
    entrada = request.json


    datos = {
        "id": 600,
        "titulo": entrada.titulo,
        "address": {
            "street": entrada.calle,
            "city": "Denver",
            "zipcode": "80014"
        },
        "fecha_cierre": {
            "día": 12,
            "mes": 10,
            "año": 2024
        },
        "fondos_recaudados": 250000,
        "meta_recaudacion": 1000000,
        "rendimiento_esperado": 20,
        "rendimiento_optimista": 25,
        "rendimiento_pesimista": 15,
        "descripcion": "Una casa moderna situada en la montaña, con vistas espectaculares y todas las comodidades modernas.",
        "imagen": "https://www.construyehogar.com/wp-content/uploads/2014/04/Dise%C3%B1o-de-casa-moderna.jpg",
        "linea_tiempo": {
            "x": [10,15,13,16,20],
            "y": [2025,2026,2027,2028,2029]
        }
    }

    # print(contenido)
    # datosEntrada = np.array([ 
    #     0.88,	0,	2.6,	0.098,	25,	67,	0.9968, 1, 0.4,
    #     contenido['pH'],
    #     contenido['sulphates'],
    #     contenido['alcohol']
    # ])
    #Utilizar el modelo
    # resultado=dt.predict(datosEntrada.reshape(1,-1))
    # return jsonify({'resultado':str(resultado[0])})
    return jsonify(entrada)

@servidorWeb.route('/modeloForm',methods=['POST'])
def modeloForm():
    #Procesar los datos de entrada
    # contenido = request.form
    # print(contenido)
    # datosEntrada = np.array([ 
    #     0.88,	0,	2.6,	0.098,	25,	67,	0.9968, 1, 0.4,
    #     contenido['pH'],
    #     contenido['sulphates'],
    #     contenido['alcohol']
    # ])
    #Utilizar el modelo
    # resultado=dt.predict(datosEntrada.reshape(1,-1))
    # return jsonify({'resultado':str(resultado[0])})
    return jsonify({"resultado": "hola"})


if __name__ == '__main__':
    servidorWeb.run(debug=False,host='0.0.0.0',port='8080')