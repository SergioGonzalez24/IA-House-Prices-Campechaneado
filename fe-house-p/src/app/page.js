'use client';
import { FirstSection, SecondSection, ThirdSection } from "@/components/LandingComponents";

export default function Home() {
  return (
    <div style={{ zIndex: -1 }}>
      <section sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}>
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

      <style jsx>{`
        @media screen and (min-width: 900px) {
          section {
            padding-top: 100px; /* Ajusta el espaciado aquí según tus necesidades */
            padding-bottom: 150px; /* Ajusta el espaciado aquí según tus necesidades */
          }
        }
      `}</style>
    </div>
  );
}
