import Link from "next/link";
import { PageContainer } from "@/components/AppComponents";
import { ProjectCard } from "@/components/ProjectCard";
import proyectos from "@/assets/data/proyectos";
import {AiOutlineSearch} from "react-icons/ai"



export default function Home() {
  return (
    <PageContainer>
      <h1 className="mb-2 text-[1.5rem]">Encuentra el proyecto que mejor se adapte a tus necesidades de inversion</h1>
      <div className="mb-10 rounded-full px-5 py-3 text-[1.3rem] bg-[#5FA34A] text-white font-bold">
        <AiOutlineSearch></AiOutlineSearch>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {
          Object.keys(proyectos).map((key) => {
            return <ProjectCard key={key} id={key} data={proyectos[key]}></ProjectCard>
          })
        }
      </div>
    </PageContainer>
  );
}
