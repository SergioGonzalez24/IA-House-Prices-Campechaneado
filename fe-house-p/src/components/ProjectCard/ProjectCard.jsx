import Link from "next/link";
import { ProgressBar } from "../ProgressBar";
import {BiHappyAlt, BiSad} from "react-icons/bi"
import {BiHappyHeartEyes} from "react-icons/bi"


export default function ProjectCard({id, data}) {
  return(
    <Link href={`/home/${id}`} className="bg-white shadow-lg m-1 hover:m-0 rounded-[10px]">
      <img src={data.imagen} className="h-[250px] w-full object-cover rounded-[10px]"></img>

      <div className="flex  flex-col gap-3 p-5 pt-1">
        <div>
          <h1 className="font-semibold text-[1.2rem]">{data.titulo}</h1>
          <span>{data.address.street}, {data.address.city}, {data.address.zipcode}</span>
        </div>

        <div>
          <span className="font-semibold">Meta de recaucación</span>
          <ProgressBar max={data.meta_recaudacion.toLocaleString("en-US")} pc={Math.round(data.fondos_recaudados * 100 / data.meta_recaudacion)}></ProgressBar>
        </div>

        <div>
          <span className="font-semibold">Retorno</span>
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-3">
            <div className="flex flex-col items-center">
              <BiSad size={20} color="#AA0F0F"></BiSad>
              <span className="font-semibold ">{data.rendimiento_pesimista}%</span>
              <span>Pesimista</span>
            </div>
            <div className="flex flex-col items-center">
              <BiHappyAlt size={20} color="#2F84D9"></BiHappyAlt>
              <span className="font-semibold ">{data.rendimiento_esperado}%</span>
              <span>Esperado</span>
            </div>
            <div className="flex flex-col items-center">
              <BiHappyHeartEyes size={20} color={"#14B030"}></BiHappyHeartEyes>
              <span className="font-semibold">{data.rendimiento_optimista}%</span>
              <span>Optimista</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}