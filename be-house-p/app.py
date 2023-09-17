from flask import Flask, render_template,jsonify,request
import numpy as np
from joblib import load
import os
from flask_cors import CORS, cross_origin
#Cargar el modelo
dt=load('arbol.joblib')

#Servidor (backend)
servidorWeb = Flask(__name__)
cors = CORS(servidorWeb)
servidorWeb.config['CORS_HEADERS'] = 'Content-Type'

#Envio de datos a través de JSON
@servidorWeb.route('/modelo',methods=['POST'])
def modeloPrediccion():
    entrada = request.json

    cols = [
    "lotfrontage", "lotarea", "overallqual", "overallcond", "yearbuilt", "yearremodadd", "masvnrarea",
    "bsmtfinsf1", "bsmtfinsf2", "bsmtunfsf", "totalbsmtsf", "_1stflrsf", "_2ndflrsf", "lowqualfinsf", "grlivarea",
    "bsmtfullbath", "bsmthalfbath", "fullbath", "halfbath", "bedroomabvgr", "kitchenabvgr", "totrmsabvgrd",
    "fireplaces", "garageyrblt", "garagecars", "garagearea", "wooddecksf", "openporchsf", "enclosedporch",
    "_3ssnporch", "screenporch", "poolarea", "miscval", "mosold", "yrsold", "is_zone_lres", "is_zone_mres",
    "is_zone_com", "is_zone_float", "is_zone_hres", "is_land_lvl", "is_land_bk", "is_land_low", "is__land_hi",
    "is_lot_in", "is_lot_fr2", "is_lot_cor", "is_lot_culdsac", "is_fr3", "is_bldg_singlef", "is_bldg_twof",
    "is_bldg_du", "is_bldg_townend", "is_bldg_townins", "is_house_2story", "is_house_1story", "is_house_15fstory",
    "is_house_15ustory", "is_house_splitfr", "is_house_splitlvl", "is_house_25ustory", "is_roof_gable",
    "is_roof_hip", "is_roof_gambrel", "is_roof_mansard", "is_roof_flat", "is_roof_shed", "is_masn_brkface",
    "is_masn_none", "is_masn_stone", "is_masn_brk", "is_masn_na", "is_foun_pconc", "is_foun_cblock",
    "is_foun_brktil", "is_foun_wood", "is_foun_slab", "is_foun_stone", "is_garage_attchd", "is_garage_detchd",
    "is_garage_builtin", "is_garage_carport", "is_garage_none", "is_garage_basement", "is_garage_2t", "is_sale_wd",
    "is_sale_new", "is_sale_cod", "is_sale_conld", "is_sale_conli", "is_sale_cwd", "is_sale_conlw", "is_sale_con",
    "is_sale_oth", "is_salec_nom", "is_salec_anom", "is_salec_p", "is_salec_adland", "is_salec_alloca",
    "is_salec_f", "mssubclass", "street", "lotshape", "utilities", "landslope", "exterqual", "extercond", "bsmtqual",
    "bsmtcond", "bsmtexposure", "bsmtfintype1", "bsmtfintype2", "heatingqc", "centralair", "electrical", "kitchenqual",
    "functional", "fireplacequ", "garagefinish", "garagequal", "garagecond", "paveddrive", "fence", "ext_id_2",
    "cond_id_2", "neigh_id", "cond_id_1", "ext_id_1"
    ]

    fecha = entrada["fechaLimite"].split("/")

    datosEntrada = np.array([float(entrada[key]) for key in cols])
    datosEntrada[4] = float(fecha[2])
    pred=dt.predict(datosEntrada.reshape(1,-1))[0] * 20


    retorno_e =( (pred - float(entrada["precioEstimado"])) * 100 / float(entrada["precioEstimado"]) - 100 ) / 3
    datos = {}
    x = []
    y = []
    if retorno_e > 4:
        for i, year in enumerate(range(2020, 2028)):
            x.append(pred + (pred * i * 0.048))
            y.append(year)

        datos = {
            "id": 600,
            "titulo": entrada["titulo"],
            "address": {
                "street": entrada["calle"],
                "city": entrada["ciudad"],
                "zipcode": entrada["codigoPostal"]
            },
            "fecha_cierre": {
                "dia": fecha[0],
                "mes": fecha[1],
                "año": fecha[2]
            },
            "fondos_recaudados": 0,
            "meta_recaudacion": entrada["meta"],
            "rendimiento_esperado": round(retorno_e),
            "rendimiento_optimista": round(retorno_e + 3),
            "rendimiento_pesimista": round(retorno_e - 3),
            "descripcion": entrada["descripcion"],
            "imagen": "https://www.construyehogar.com/wp-content/uploads/2014/04/Dise%C3%B1o-de-casa-moderna.jpg",
            "linea_tiempo": {
                "x": x,
                "y": y
            }
        }

    return jsonify(datos)

if __name__ == '__main__':
    servidorWeb.run(debug=False,host='0.0.0.0',port='8080')