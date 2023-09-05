// Ejemplo de como hacer las paginas

import { ExampleComponent } from "@/components/ExampleComponent";
import { ExampleMuiUi } from "@/components/ExampleMuiUi";

export default function ExamplePage() {
  return (
    <>
      <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-2xl mb-4">Ejemplo JOI UI</h1>
        <ExampleComponent />
      </div>
      
      <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-2xl mb-4">Ejemplo MUI UI</h1>
        <ExampleMuiUi />
      </div>
    </>
  );
}
