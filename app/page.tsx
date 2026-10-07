import Link from "next/link";
import ToolCard from "@/components/cards/tool-card";
import FeaturedProjects from "./_components/featured-projects";
import ProjectCardSkeleton from "@/components/cards/project-card-skeleton";

import { Suspense } from "react";

import { FaJava } from "react-icons/fa6"

import { 
  SiAlpinedotjs, SiCss, SiDocker, SiFastapi, SiFedora, SiGit, SiGithub, SiHtml5, SiHtmx, SiJavascript, 
  SiLangchain, SiLanggraph, SiLinux, SiNextdotjs, SiNodedotjs, SiOllama, SiPostgresql,  SiPython, SiQdrant, 
  SiRasa, SiReact, SiSpring, SiSpringboot, SiSpringsecurity, SiSupabase, SiTailwindcss, SiThymeleaf, SiTypescript 
} from "react-icons/si";

import ScrollToButton from "./_components/scroll-to-button";
import LineSeparator from "@/components/utils/line-separator";

export default function Home() {

  return (
    <main className="w-full flex flex-col flex-1 lg:gap-24 md:gap-20 sm:gap-16 gap-12 scroll-mt-24">

      <section className="xl:h-[70vh] lg:h-[65vh] md:h-[60vh] sm:h-[55vh] h-[50vh] flex flex-col items-center justify-center">
        <div className="mx-auto space-y-10">
          <div className="px-4 lg:w-4xl md:w-2xl sm:w-lg w-sm lg:space-y-6 md:space-y-5 sm:space-y-4 space-y-3">
            <h1 className="lg:text-8xl md:text-7xl sm:text-6xl text-4xl bg-linear-120 from-foreground from-20% via-yellow-500 to-primary to-80% bg-clip-text text-transparent">
              AI Engineer &
              Full Stack Developer
            </h1>
            <p className="lg:w-lg md:w-md sm:w-sm w-xs lg:text-xl md:text-lg sm:text-base text-xs lg:leading-8 md:leading-5 sm:leading-6">
              Building RAG architectures on one side, 
              Full-Stack Development on the other.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 px-4">
            {/* <Link 
              href={"/projects"}
              onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth"})}
              className="rounded-md pl-6 pr-5 py-3 bg-foreground text-background tracking-[4px] hover:bg-primary transition-colors ease-in-out duration-300">
              View My Projects
            </Link> */}
            <ScrollToButton id={"content"} className={"rounded-md md:pl-6 md:pr-5 md:py-3 pl-4 pr-3 py-2 lg:text-lg md:text-base text-sm md:tracking-[4px] tracking-[3px] bg-foreground text-background hover:bg-primary hover:cursor-pointer transition-colors ease-in-out duration-300"}>
              View My Projects
            </ScrollToButton>
            <Link
              href={"/about"} 
              className="rounded-md md:pl-6 md:pr-5 md:py-3 pl-4 pr-3 py-2 lg:text-lg md:text-base text-sm md:tracking-[4px] tracking-[3px] border hover:border-primary hover:text-primary transition-colors ease-in-out duration-300">
                About Me
            </Link>
          </div>  
        </div>
      </section>

      <LineSeparator />

      <section id="content" className="md:scroll-mt-48 sm:scroll-mt-36 scroll-mt-32">
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-lg w-sm md:space-y-24 sm:space-y-20 space-y-16 px-4">
          <div className="space-y-4 text-center">
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              Featured Projects
            </h2>
            <p className="lg:text-lg text-sm text-foreground/75">
              A selection of projects that showcase my approach to
              design, development, and problem solving.
            </p>
          </div>
          <div className={`grid grid-flow-row auto-rows-fr divide-y divide-foreground/50 md:gap-y-12 sm:gap-y-10 gap-y-8`}>
            <Suspense fallback={ <ProjectCardSkeleton/> }>
              <FeaturedProjects />
            </Suspense>
          </div>
        </div>
      </section>
      
      <LineSeparator />

      <section className="">
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm space-y-12 px-4">
          <div className="md:space-y-4 space-y-2 text-center">
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              What I work with
            </h2>
            <p className="md:text-lg sm:text-base text-sm text-foreground/75">Technologies I use to build full-stack and AI-powered applications</p>
          </div>
          <div className="w-full flex flex-col gap-8 px-4">
            <div>
              <h3 className="w-full md:text-xl sm:text-lg text-base mb-2 pb-2 border-b border-foreground/50">
                Languages
              </h3>
              <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1">
                <ToolCard icon={ FaJava } tool={ "Java" } />
                <ToolCard icon={ SiPython } tool={ "Python" } />
                <ToolCard icon={ SiHtml5 } tool={ "HTML" } />
                <ToolCard icon={ SiCss } tool={ "CSS" } />
                <ToolCard icon={ SiJavascript } tool={ "JavaScript" } />
                <ToolCard icon={ SiTypescript } tool={ "TypeScript" } />
              </div>
            </div>
            <div>
              <h3 className="w-full md:text-xl sm:text-lg text-base mb-2 pb-2 border-b border-foreground/50">
                AI/ML
              </h3>
              <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1">
                <ToolCard icon={ SiOllama } tool={ "Ollama" } />
                <ToolCard icon={ SiLangchain } tool={ "LangChain" } />
                <ToolCard icon={ SiLanggraph } tool={ "LangGraph" } />
                <ToolCard icon={ SiRasa } tool={ "Rasa" } />
              </div>
            </div>
            <div>
              <h3 className="w-full md:text-xl sm:text-lg text-base mb-2 pb-2 border-b border-foreground/50">
                Backend
              </h3>
              <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1">
                <ToolCard icon={ SiSpringboot } tool={ "Spring Boot" } />
                {/* <ToolCard icon={ SiSpringsecurity } tool={ "Spring Security" } />
                <ToolCard icon={ SiSpring } tool={ "Spring Framework" } /> */}
                <ToolCard icon={ SiThymeleaf } tool={ "Thymeleaf" } />
                <ToolCard icon={ SiFastapi } tool={ "FastAPI" } />
                <ToolCard icon={ SiNodedotjs } tool={ "Node.js" } />
              </div>
            </div>
            <div>
              <h3 className="w-full md:text-xl sm:text-lg text-base mb-2 pb-2 border-b border-foreground/50">
                Frontend
              </h3>
              <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1">
                <ToolCard icon={ SiTailwindcss } tool={ "TailwindCSS" } />
                <ToolCard icon={ SiReact } tool={ "React.js" } />
                <ToolCard icon={ SiNextdotjs } tool={ "Next.js" } />
                <ToolCard icon={ SiHtmx } tool={ "HTMX" } />
                <ToolCard icon={ SiAlpinedotjs } tool={ "Alpine.js" } />
              </div>
            </div>
            <div>
              <h3 className="w-full md:text-xl sm:text-lg text-base mb-2 pb-2 border-b border-foreground/50">
                Databases
              </h3>
              <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1">
                <ToolCard icon={ SiSupabase } tool={ "Supabase" } />
                <ToolCard icon={ SiPostgresql } tool={ "PostgreSQL" } />
                <ToolCard icon={ SiQdrant } tool={ "Qdrant" } />
              </div>
            </div>
            <div>
              <h3 className="w-full md:text-xl sm:text-lg text-base mb-2 pb-2 border-b border-foreground/50">
                Infrastructure & Tools
              </h3>
              <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-1">
                <ToolCard icon={ SiLinux } tool={ "Linux" } />
                <ToolCard icon={ SiFedora } tool={ "Fedora" } /> 
                <ToolCard icon={ SiGit } tool={ "Git" } />
                <ToolCard icon={ SiGithub } tool={ "Github" } />
                <ToolCard icon={ SiDocker } tool={ "Docker" } />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LineSeparator />
      
      <section className="">
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm flex flex-col justify-center items-center md:space-y-12 sm:space-y-10 space-y-8 px-4 md:py-16 sm:py-12 py-8">
          <div className="text-center md:space-y-4 space-y-2 overflow-x-hidden">
            <h2 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl select-none">
              Let&apos;s Build <span className="text-foreground hover:text-primary hover:shimmer hover:shimmer-color-white/75 hover:shimmer-spread-200 hover:shimmer-repeat-delay-3000 hover:shimmer-duration-500 transition-colors ease-in-out duration-300">Something</span>
            </h2>
            <p className="lg:text-2xl md:text-xl sm:text-lg text-base text-foreground/75">
              Have a project, opportunity, or idea you&apos;d like to discuss?
            </p>
          </div>

          <Link 
            href={ "/contact" }
            className="rounded-md md:pl-6 md:pr-5 md:py-3 pl-4 pr-3 py-2 lg:text-lg md:text-base text-sm md:tracking-[4px] tracking-[3px] bg-foreground text-background hover:bg-primary hover:cursor-pointer transition-colors ease-in-out duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
      
    </main>
  );
}
