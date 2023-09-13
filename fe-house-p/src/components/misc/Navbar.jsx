"use client"
import Image from "next/image";
import { logo_housea } from "@/assets/images";
import {GoHome} from "react-icons/go";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import isMobile from "is-mobile";
import { useRouter } from 'next/navigation'


export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  
  if (isMobile()) {
    router.push('/Login')
  }

  return (
    <div className={pathname == "/Login" || pathname == "/SignUp" ? "hidden": ""}>
      <nav className="bg-white sticky top-0 w-full z-20 border-b border-gray-200 hidden md:block">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-[100px] p-4">
          <a href="https://flowbite.com/" className="flex items-center">
              <Image src={logo_housea} className="w-[50px]" alt="Housea logo"></Image>
              <span className="self-center text-[1.3rem] whitespace-nowrap ">HOUSEA</span>
          </a>
          <div className="flex md:order-2">
            <div className="flex gap-[10px]">
              <a className="bg-white hover:bg-[#E9E9E9] text-[.9rem] text-black py-2 px-4 border border-gray-300 rounded-[20px] cursor-pointer"
                href="http://localhost:3000/Login">
                INICIAR SESIÓN
              </a>
              <a className="bg-[#28ac01] hover:bg-[#208C00] text-[.9rem] font-semibold text-white py-2 px-4 border rounded-[20px] cursor-pointer"
                href="http://localhost:3000/SignUp">
                REGÍSTRATE
              </a>
            </div>

              
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div className="items-center justify-between" id="navbar-sticky">
            <ul className="flex p-4 md:p-0 gap-[30px] content-center">
              <li>
                <a href="">INICIO</a>
              </li>
              <li>
                <a>TECNOLOGÍAS</a>
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

      <nav className="block md:hidden z-[9999]">
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
               href="/favs">
              <AiOutlineHeart color={pathname == "/favs" ? "#208C00" : "black"}></AiOutlineHeart>
            </Link>
            <Link className="inline-flex flex-col items-center justify-center group text-[1.5rem]"
               href="/profile">
              <AiOutlineUser color={pathname == "/profile" ? "#208C00" : "black"}></AiOutlineUser>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}