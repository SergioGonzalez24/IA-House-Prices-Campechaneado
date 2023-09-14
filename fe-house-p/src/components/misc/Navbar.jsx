"use client"
import Image from "next/image";
import { logo_housea } from "@/assets/images";
import {GoHome} from "react-icons/go";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import isMobile from "is-mobile";
import { useRouter } from 'next/navigation'
import {BiBriefcaseAlt} from "react-icons/bi"


export default function Navbar() {
  const pathname = usePathname()

  return (
    pathname == "/Login" || pathname == "/SignUp" ? 
    <></>
    :
    <>
    {
      pathname == "/" ?
        <nav className="bg-white sticky top-0 w-full z-20 border-b border-gray-200 hidden md:block" style={{position:"fixed",zIndex:1}}>
          <div className=" flex flex-wrap items-center justify-between p-4 mx-[20px] lg:mx-[100px] ">
            <a href="https://flowbite.com/" className="flex items-center">
                <Image src={logo_housea} className="w-[50px]" alt="Housea logo"></Image>
                <span className="self-center text-[1.3rem] whitespace-nowrap lg:text-[1.3rem]">HOUSEA</span>
            </a>
            <div className="flex md:order-2">
              <div className="flex gap-[10px]">
                <Link className="bg-white hover:bg-[#E9E9E9] text-[.8rem] text-black py-2 px-4 border border-gray-300 rounded-[20px] cursor-pointer lg:text-[0.9rem]"
                  href="/Login">
                  INICIAR SESIÓN
                </Link>
                <Link className="bg-[#28ac01] hover:bg-[#208C00] text-[.8rem] font-semibold text-white py-2 px-4 border rounded-[20px] cursor-pointer lg:text-[0.9rem]"
                  href="/SignUp">
                  REGÍSTRATE
                </Link>
              </div>
            </div>
            <div className="items-center justify-between" id="navbar-sticky">
              <ul className="flex p-4 md:p-0 gap-[30px] content-center text-[0.8rem] lg:text-[1rem]">
                <li>
                  <a href="#inicio">INICIO</a>
                </li>
                <li>
                  <a href="#tecnologia">TECNOLOGÍAS</a>
                </li>
                <li>
                  <a>USUARIOS</a>
                </li>
                <li>
                  <a>CONTACTO</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      :
        <nav className="bg-white sticky top-0 w-full z-20 border-b border-gray-200 hidden md:block" tyle={{position:"fixed",zIndex:"1"}}>
          <div className=" flex items-center justify-between p-4 mx-[50px] lg:mx-[100px] ">
            <a href="https://flowbite.com/" className="flex items-center">
                <Image src={logo_housea} className="w-[50px]" alt="Housea logo"></Image>
                <span className="self-center text-[1.3rem] whitespace-nowrap ">HOUSEA</span>
            </a>
            <div className="items-center justify-between">
              <ul className="flex p-4 gap-[40px] content-center text-[1rem]">
                <li>
                  <Link href="/home" className={"hover:text-[#208C00] hover:border-b-2 hover:border-[#208C00] " + (pathname == "/home" ? " text-[#208C00] font-semibold border-b-2 border-[#208C00]" : " text-black")}>INICIO</Link>
                </li>
                <li>
                  <Link href="/search" className={"hover:text-[#208C00] hover:border-b-2 hover:border-[#208C00] " + (pathname == "/search" ? " text-[#208C00] font-semibold border-b-2 border-[#208C00]" : " text-black")}>BUSCAR</Link>
                </li>
                <li>
                  <Link href="/misproyectos" className={"hover:text-[#208C00] hover:border-b-2 hover:border-[#208C00] " + (pathname == "/misproyectos" ? " text-[#208C00] font-semibold border-b-2 border-[#208C00]" : " text-black")}>MIS PROYECTOS</Link>
                </li>
                <li>
                  <Link href="/profile" className={"hover:text-[#208C00] hover:border-b-2 hover:border-[#208C00] " + (pathname == "/profile" ? " text-[#208C00] font-semibold border-b-2 border-[#208C00]" : " text-black")}>PERFIL</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      }


      <nav className="block md:hidden z-[9999]"p>
        <div className="fixed w-full h-[60px] -translate-x-1/2 bg-white border border-gray-200 bottom-0 left-1/2">
          <div className="grid h-full grid-cols-4 mx-auto">
            <Link className="inline-flex flex-col items-center justify-center group text-[1.5rem]"
               href="/home">
              <GoHome color={pathname == "/home" ? "#208C00" : "black"}></GoHome>
            </Link>
            <Link className="inline-flex flex-col items-center justify-center group text-[1.5rem]"
               href="/search">
              <AiOutlineSearch color={pathname == "/search" ? "#208C00" : "black"}></AiOutlineSearch>
            </Link>
            <Link className="inline-flex flex-col items-center justify-center group text-[1.5rem]"
               href="/misproyectos">
              <BiBriefcaseAlt color={pathname == "/misproyectos" ? "#208C00" : "black"}></BiBriefcaseAlt>
            </Link>
            <Link className="inline-flex flex-col items-center justify-center group text-[1.5rem]"
               href="/profile">
              <AiOutlineUser color={pathname == "/profile" ? "#208C00" : "black"}></AiOutlineUser>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}