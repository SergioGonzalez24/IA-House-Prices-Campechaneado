import {BiAtom} from "react-icons/bi"

export default function Navbar() {
  return (
    <>
    <nav className="flex w-[100vw] h-[80px] border-b-2 px-[128px] justify-between">
      <a className="flex text-center">
        <BiAtom></BiAtom>
        <h3>HOUSEA</h3>
      </a>

      <div className="">
        <a>INICIO</a>
        <a>BUSCAR PROYECTOS</a>
        <a>MIS PROYECTOS</a>
        <a>MIS INVERSIONES</a>
      </div>

      <h1 className="">hola</h1>
    </nav>
    </>
  );
}