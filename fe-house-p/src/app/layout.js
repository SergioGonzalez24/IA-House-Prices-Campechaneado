import "../styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/misc/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Housea",
  description:
    "La propuesta de Housea busca revolucionar la forma en que los inversionistas y las constructoras abordan el mercado inmobiliario. Al combinar la predicción de inversiones, la intermediación eficiente, la optimización de proyectos y el acceso a inversiones de créditos, se crea un ecosistema completo que maximiza las oportunidades y minimiza los riesgos para todas las partes involucradas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="esp">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className + " relative h-[100vh]"}>
        <Navbar/>
        {children}</body>
    </html>
  );
}
