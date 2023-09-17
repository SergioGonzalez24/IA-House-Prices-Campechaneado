'use client';
import Link from "next/link";
import { PageContainer } from "@/components/AppComponents";
import { ProjectCard } from "@/components/ProjectCard";
import {AiOutlineSearch} from "react-icons/ai"
import { useContext, useEffect } from "react";
import { lista_proy } from "../page";
import lista_proyectos from "@/assets/data/proyectos";


export default function Home() {

  const proyectos = useContext(lista_proy);
  
  return (
    <lista_proy.Provider value={proyectos}>
      <PageContainer>
        <h1 className="mb-2 text-[1.5rem]">Encuentra el proyecto que mejor se adapte a tus necesidades de inversion</h1>
        <div className="mb-10 rounded-full px-5 py-3 text-[1.3rem] bg-[#5FA34A] text-white font-bold">
          <AiOutlineSearch></AiOutlineSearch>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          { proyectos &&
            Object.keys(proyectos).reverse().map((key) => {
              return <ProjectCard key={key} id={key} data={proyectos[key]}></ProjectCard>
            })
          }
        </div>
      </PageContainer>
    </lista_proy.Provider>
  );
}
