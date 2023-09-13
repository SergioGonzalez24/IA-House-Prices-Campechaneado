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
import { useEffect } from "react";


export default function Navbar() {
  const pathname = usePathname()

  return (
    // <nav>
    //   <div>
    //     <Image src={logo_housea} className="w-[50px]" alt="Housea logo"></Image>
    //   </div>

    //   <div>

    //   </div>
    // </nav>
    
    <div className={pathname == "/Login" || pathname == "/SignUp" ? "hidden": ""}>
      {
        pathname == "/" ?
        <nav className="bg-white sticky top-0 w-full z-20 border-b border-gray-200 hidden md:block" style={{ zIndex: 1, position: "fixed"}}>
          <div className=" flex flex-wrap items-center justify-between p-4 mx-[20px] lg:mx-[100px] ">
            <a href="https://flowbite.com/" className="flex items-center">
                <Image src={logo_housea} className="w-[50px]" alt="Housea logo"></Image>
                <span className="self-center text-[1.3rem] whitespace-nowrap text-[1rem] lg:text-[1.3rem]">HOUSEA</span>
            </a>
            <div className="flex md:order-2">
              <div className="flex gap-[10px]">
                <a className="bg-white hover:bg-[#E9E9E9] text-[.8rem] text-black py-2 px-4 border border-gray-300 rounded-[20px] cursor-pointer lg:text-[0.9rem]"
                  href="http://localhost:3000/Login">
                  INICIAR SESIÓN
                </a>
                <a className="bg-[#28ac01] hover:bg-[#208C00] text-[.8rem] font-semibold text-white py-2 px-4 border rounded-[20px] cursor-pointer lg:text-[0.9rem]"
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
              <ul className="flex p-4 md:p-0 gap-[30px] content-center text-[0.8rem] lg:text-[1rem]">
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
        :
        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
              {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo"> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className="flex md:order-2">
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
              <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
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