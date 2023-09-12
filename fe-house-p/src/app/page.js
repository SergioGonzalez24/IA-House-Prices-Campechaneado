import { FirstSection, SecondSection } from '@/components/LandingComponents';

export default function Home() {
  return (
    <div style={{ height: '150vh', overflow: 'hidden' }}>
      <section>
        {/*Portada de la página*/}
        <FirstSection />
      </section>
      <section>
        {/*Contenido de la página*/}
        <SecondSection />
      </section>
    </div>
  );
}
