"use client"
import { useEffect, useRef, useState } from "react";
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

  const inv_ref = useRef(null);
  const out_ref = useRef(null);

  const mensaje_ref = useRef(null);
  const trans_ref = useRef(null);

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


  const handleCalc = () => {
    if (inv_ref.current.value) {
      out_ref.current.innerText = "¡Invirtiendo hoy tu retorno esperado es de $" + (proyecto_data.rendimiento_esperado / 100 * inv_ref.current.value).toLocaleString("en-US") + " MXN!"
    }
  }

  const handleInv = () => {
    if (trans_ref.current.value) {
      mensaje_ref.current.innerText = "Transacción exitosa. (" + trans_ref.current.value + " MXN). Gracias por confiar en Housea."
    }
  }
    
  return (
    <PageContainer>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 text-[1rem] xs:text-[1.1rem]">

        <div className="flex flex-col gap-10">
          <div className="h-fit bg-white flex flex-col py-[20px] px-[20px] md:py-[30px] md:px-[40px] rounded-[10px] gap-6 shadow-lg">

            <h1 className="font-semibold text-[2rem] text-[#1A7000]">{proyecto_data.titulo}</h1>
            <img className="w-[80%] self-center rounded-[10px]" src={proyecto_data.imagen} alt="" />

            {Object.keys(proyecto_data).length !== 0 &&
              <div className="flex flex-col gap-2 bg-gray-100 p-5 rounded-[10px]">
                <div>
                  <span className="font-semibold">Dirección:</span>
                  <p>{proyecto_data.address.street}, {proyecto_data.address.city}, {proyecto_data.address.zipcode}</p>
                </div>

                <div>
                  <span className="font-semibold">Descripción:</span>
                  <p>{proyecto_data.descripcion}</p>
                </div>

              </div>
            }
          </div>

          <div className="h-fit bg-white flex flex-col py-[20px] px-[20px] md:py-[30px] md:px-[40px] rounded-[10px] gap-6 shadow-lg">
            <p className="font-semibold text-center text-[1.2rem]">¡No dejes que tu dinero duerma en el banco! Invierte con nosotros y hazlo crecer como nunca antes.</p>
            <div className="flex flex-col">
              <span className="mr-2">Monto de inversion: </span>
              <div className="flex items-center">
                <input type="number" className="p-1 w-[80%] mr-1  border-2 border-gray-200 rounded-[10px]" ref={trans_ref}></input>
                <span>MXN</span>
              </div>
            </div>
            <button type="button" className="self-center bg-[#28ac01] hover:bg-[#208C00]  font-semibold text-white py-2 px-4 border rounded-[20px] cursor-pointer  w-[50%] sm:w-[30%]"
              onClick={handleInv}>¡INVIERTE YA!</button>
            <span ref={mensaje_ref} className="text-center font-semibold"></span>
          </div>
        </div>

        <div className="bg-white mb-[50px] md:mb-[0px] flex flex-col py-[20px] px-[20px] md:py-[30px] md:px-[40px] rounded-[10px] gap-6 shadow-lg">

          <div className="w-[100%] h-[335px] flex flex-col gap-3 bg-gray-100 p-5 rounded-[10px]">
            <span className="">Predicción del valor del proyecto</span>
            <GraphTime data={graph_data}></GraphTime>
          </div>

          <div className="flex flex-col gap-3 bg-gray-100 p-5 rounded-[10px]">
            <span className="">Meta de recaudación</span>
            <div>
              { Object.keys(proyecto_data).length !== 0 &&
                <ProgressBar max={proyecto_data.meta_recaudacion.toLocaleString("en-US")} pc={Math.round(proyecto_data.fondos_recaudados * 100 / proyecto_data.meta_recaudacion)}></ProgressBar>
              }
            </div>
          </div>

          <div className="flex flex-col gap-3  bg-gray-100 p-5 rounded-[10px]">
            <span className="">Retorno</span>
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-3">
              <div className="flex flex-col items-center">
                <BiSad size={20} color="#AA0F0F"></BiSad>
                <span className="font-semibold ">{proyecto_data.rendimiento_pesimista}%</span>
                <span>Pesimista</span>
              </div>
              <div className="flex flex-col items-center">
                <BiHappyAlt size={20} color="#2F84D9"></BiHappyAlt>
                <span className="font-semibold ">{proyecto_data.rendimiento_esperado}%</span>
                <span>Esperado</span>
              </div>
              <div className="flex flex-col items-center">
                <BiHappyHeartEyes size={20} color={"#14B030"}></BiHappyHeartEyes>
                <span className="font-semibold text-[1.2rem]">{proyecto_data.rendimiento_optimista}%</span>
                <span>Optimista</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3  bg-gray-100 p-5 rounded-[10px]">
            <span className="">Calcula tu inversión</span>

            <div className="flex flex-col">
              <span className="mr-2">Monto deseado de inversion: </span>
              <div className="flex items-center">
                <input type="number" className="p-1 w-[80%] mr-1  border-2 border-gray-200 rounded-[10px]" ref={inv_ref}></input>
                <span>MXN</span>
              </div>
            </div>
            <button type="button" className="self-center bg-[#28ac01] hover:bg-[#208C00]  font-semibold text-white py-2 px-4 border rounded-[20px] cursor-pointer  w-[50%] sm:w-[30%]"
              onClick={handleCalc}>Calcular</button>
            <span ref={out_ref} className="text-center font-semibold"></span>

          </div>

        </div>
      </div>
    </PageContainer>
    );
}