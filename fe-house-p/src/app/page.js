'use client';
import { FirstSection, SecondSection, ThirdSection, FourthSection } from "@/components/LandingComponents";

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
