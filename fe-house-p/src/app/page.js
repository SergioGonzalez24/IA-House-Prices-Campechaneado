'use client';
import { FirstSection, SecondSection, ThirdSection, FourthSection } from "@/components/LandingComponents";

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

      <section>
        {/* Contenido de la página */}
        <FourthSection />
      </section>

      
    </div>
  );
}
