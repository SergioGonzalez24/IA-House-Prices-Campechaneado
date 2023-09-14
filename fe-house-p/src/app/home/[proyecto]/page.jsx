"use client"
import { useEffect, useState } from "react";
import proyectos from "@/assets/data/proyectos";
import { PageContainer } from "@/components/AppComponents";
import { ProgressBar } from "@/components/ProgressBar";
import {BiHappyAlt, BiSad} from "react-icons/bi"
import {BiHappyHeartEyes} from "react-icons/bi"
import { GraphTime } from "@/components/Graph";



export default function Proyecto({params}) {
  const [proyecto_id, setProyecto_id] = useState(0);
  const [proyecto_data, setProyecto_data] = useState({});
  const [graph_data, setGraph_data] = useState({});
  const [style_bar, setStyle_bar] = useState("");

  // Cargar datos del proyecto
  useEffect(() => {
    const {proyecto} = params;
    setProyecto_id(parseInt(proyecto));
    setProyecto_data(proyectos[parseInt(proyecto)]);
    const data = proyectos[parseInt(proyecto)].linea_tiempo;

    const graph_d = [];

    for (let i=0; i < data.x.length; i++) {
      graph_d.push({
        name: data.y[i],
        precio: data.x[i]
        })
    }

    setGraph_data(graph_d);

    setStyle_bar(`s`)

  }, []);
    
  return (
    <PageContainer>
      <div className="grid grid-cols-2 gap-10">
        <div className="bg-white flex flex-col py-5 px-[50px] rounded-[10px] gap-5">

          <h1 className="font-semibold text-[2rem] mb-3">{proyecto_data.titulo}</h1>
          <img className="w-[80%] self-center rounded-[10px]" src={proyecto_data.imagen} alt="" />


          <div>
            <span className="mb-1">Retorno</span>
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-center">
                <BiSad size={20} color="#AA0F0F"></BiSad>
                <span>{proyecto_data.rendimiento_pesimista}%</span>
                <span>Pesimista</span>
              </div>
              <div className="flex flex-col items-center">
                <BiHappyAlt size={20}></BiHappyAlt>
                <span>{proyecto_data.rendimiento_esperado}%</span>
                <span>Esperado</span>
              </div>
              <div className="flex flex-col items-center">
                <BiHappyHeartEyes size={20}></BiHappyHeartEyes>
                <span>{proyecto_data.rendimiento_optimista}%</span>
                <span>Optimista</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col py-5 px-[50px] rounded-[10px] gap-5">
          <GraphTime data={graph_data}></GraphTime>

          <div>
            <span>Meta de recaudación</span>
            <div>
            {Math.round(proyecto_data.fondos_recaudados * 100 / proyecto_data.meta_recaudacion)}
              { Object.keys(proyecto_data).length !== 0 &&
                <ProgressBar max={proyecto_data.meta_recaudacion.toLocaleString("en-US")} pc={Math.round(proyecto_data.fondos_recaudados * 100 / proyecto_data.meta_recaudacion)}></ProgressBar>
              }
            </div>
          </div>

          <div>
            <span className="mb-1">Retorno</span>
            <div className="grid grid-cols-3">
              <div className="flex flex-col items-center">
                <BiSad size={20} color="#AA0F0F"></BiSad>
                <span>{proyecto_data.rendimiento_pesimista}%</span>
                <span>Pesimista</span>
              </div>
              <div className="flex flex-col items-center">
                <BiHappyAlt size={20}></BiHappyAlt>
                <span>{proyecto_data.rendimiento_esperado}%</span>
                <span>Esperado</span>
              </div>
              <div className="flex flex-col items-center">
                <BiHappyHeartEyes size={20}></BiHappyHeartEyes>
                <span>{proyecto_data.rendimiento_optimista}%</span>
                <span>Optimista</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageContainer>
    );
}