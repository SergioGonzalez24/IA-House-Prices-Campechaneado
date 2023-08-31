// Ejemplo de como hacer las paginas

import { ExampleComponent } from "@/components/ExampleComponent";
import { ExampleMuiUi } from "@/components/ExampleMuiUi";

export default function ExamplePage() {
  return (
    <>
      <div>
        <h1>Ejemplo JOI UI</h1>
        <ExampleComponent />
      </div>

      <br />
      <br />

      <div>
        <h1>Ejemplo MUI UI</h1>
        <ExampleMuiUi />
      </div>
      
    </>
  );
} 