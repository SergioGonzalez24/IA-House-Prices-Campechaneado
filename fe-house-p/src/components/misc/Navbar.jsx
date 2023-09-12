import Image from "next/image";
import {BiAtom} from "react-icons/bi"
import { logo_housea } from "@/assets/images";

export default function Navbar() {
  return (
    // <>
    // <nav className="flex w-[100vw] h-[80px] border-b-2 px-[128px]">
    //   <a className="flex text-center">
    //     <BiAtom></BiAtom>
    //     <h3>HOUSEA</h3>
    //   </a>

    //   <div className="flex justify-betweem">
    //     <a>INICIO</a>
    //     <a>TECNOLOGÍAS</a>
    //     <a>UWU</a>
    //     <a>CONTACTO</a>
    //   </div>

    //   <div>
    //     <button>Iniciar sesión</button>
    //     <button>Registrate</button>
    //   </div>
    // </nav>
    // </>
    <nav class="bg-white sticky top-0 w-full z-20 border-b border-gray-200">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-[100px] p-4">
        <a href="https://flowbite.com/" class="flex items-center">
            <Image src={logo_housea} className="w-[50px]"></Image>
            <span class="self-center text-[1.3rem] whitespace-nowrap ">HOUSEA</span>
        </a>
        <div class="flex md:order-2">
          <div className="flex gap-[10px]">
            <a class="bg-white hover:bg-[#E9E9E9] text-[.9rem] text-black py-2 px-4 border border-gray-300 rounded-[20px] cursor-pointer"
               href="http://localhost:3000/Login">
              INICIAR SESIÓN
            </a>
            <a class="bg-[#28ac01] hover:bg-[#208C00] text-[.9rem] font-semibold text-white py-2 px-4 border rounded-[20px] cursor-pointer"
               href="http://localhost:3000/SignUp">
              REGÍSTRATE
            </a>
          </div>

            
          <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        <div class="items-center justify-between" id="navbar-sticky">
          <ul class="flex p-4 md:p-0 gap-[30px] content-center">
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
  );
}