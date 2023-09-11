import { FirstSection, SecondSection } from '@/components/LandingComponents';

export default function Home() {
  return (
    <div style={{ height: '150vh', overflow: 'hidden' }}>
      <section>
        <FirstSection />
      </section>
      <section>
        <SecondSection />
      </section>
    </div>
  );
}
