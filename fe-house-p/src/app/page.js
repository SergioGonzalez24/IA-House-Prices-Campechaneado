'use client';
import { FirstSection, SecondSection, ThirdSection, FourthSection } from "@/components/LandingComponents";
import { createContext } from "react";
import lista_proyectos from "@/assets/data/proyectos";

export const lista_proy = createContext(lista_proyectos)

export default function Home() {
  return (
    <div>
      <section id="inicio">
        {/* Portada de la página */}
        <FirstSection />
      </section>

      <section id="tecnologia">
        {/* Contenido de la página */}
        <SecondSection />
      </section>

      <section>
        {/* Contenido de la página */}
        <ThirdSection />
      </section>

      <section>
        {/* Contenido de la página */}
        <FourthSection />
      </section>

      
    </div>
  );
}
