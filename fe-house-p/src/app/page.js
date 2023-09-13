'use client';
import { FirstSection, SecondSection, ThirdSection } from "@/components/LandingComponents";

export default function Home() {
  return (
    <div>
      <section>
        {/* Portada de la página */}
        <FirstSection />
      </section>

      <section>
        {/* Contenido de la página */}
        <SecondSection />
      </section>

      <section>
        {/* Contenido de la página */}
        <ThirdSection />
      </section>

      
    </div>
  );
}




/* 
<style jsx>{`
        @media screen and (min-width: 900px) {
          section {
            padding-top: 100px; /* Ajusta el espaciado aquí según tus necesidades 
            padding-bottom: 190px; /* Ajusta el espaciado aquí según tus necesidades 
          }
        }
      `}
      </style> */