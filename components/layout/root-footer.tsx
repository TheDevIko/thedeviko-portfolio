// import { techStackIconMap } from "@/components/icons/tech-stack-icons"
import CommandLineIcon from "@heroicons/react/24/outline/CommandLineIcon";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail, SiProtonmail } from "react-icons/si";
import { techStackIconMap } from "../icons/tech-stack-icons";

export default function RootFooter() {

  const portfolioStack = ['nextdotjs', 'nodedotjs', 'react', 'resend', 'supabase', 'tailwindcss']

  return (
    <footer className="w-full text-footer-foreground bg-footer-background lg:mt-24 md:mt-20 sm:mt-16 mt-12">
      <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm flex flex-col text-sm px-4">
        <div className="md:py-24 sm:py-20 py-16 flex flex-col md:gap-y-12 sm:gap-y-10 gap-y-8">
            
          <div className="space-y-4 ">
            <Link href="/" className="relative group w-fit text-footer-foreground md:text-2xl sm:text-xl text-lg flex flex-row flex-nowrap align-middle items-center gap-0.5 font-bold hover:text-primary transition-colors ease-in-out duration-300">
              <CommandLineIcon className="md:size-10 sm:size-9 size-8" />
              TheDevIko
            </Link>
            <div className="space-y-2">
              <h3 className="md:text-xl sm:text-lg text-base">
                AI Engineer & Full-Stack Developer
              </h3>
              <p className="md:text-base text-xs">
                Building RAG architectures on one side, Full-Stack Development on the other.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-x-4 md:gap-y-2.5 sm:gap-y-2 gap-y-1.5">
              <Link href={"https://www.github.com/TheDevIko"} className="flex flex-row gap-1 items-center hover:text-primary transition-colors ease-in-out duration-300">
                <SiGithub className="shrink-0" />
                GitHub
              </Link>
              <Link href={"https://www.linkedin.com/in/iko-viado"} className="flex flex-row gap-1 items-center hover:text-primary transition-colors ease-in-out duration-300">
                <FaLinkedin className="shrink-0" />
                LinkedIn
              </Link>
              <Link href={"mailto:iko.viado.contact@gmail.com"} className="flex flex-row gap-1 items-center hover:text-primary transition-colors ease-in-out duration-300">
                <SiGmail className="shrink-0" />
                Google Mail
              </Link>
              <Link href={"mailto:thedeviko@proton.me"} className="flex flex-row gap-1 items-center hover:text-primary transition-colors ease-in-out duration-300">
                <SiProtonmail className="shrink-0" />
                Proton Mail
              </Link>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <Link href={"/"} className="hover:text-primary transition-colors ease-in-out duration-300">Home</Link>
            {/* <Link href={"/projects"} className="hover:text-primary transition-colors ease-in-out duration-300">Projects</Link> */}
            <Link href={"/about"} className="hover:text-primary transition-colors ease-in-out duration-300">About</Link>
            <Link href={"/contact"} className="hover:text-primary transition-colors ease-in-out duration-300">Contact</Link>
          </div>

          <div className="space-y-1">
            <p>Made with:</p>
            <div className="flex flex-row gap-2">
              { portfolioStack.map((item, idx) => {
                const Icon = techStackIconMap[item]?.icon;
                
                if (!Icon) return null;

                return <Icon key={idx} className="size-6 shrink-0 text-footer-foreground hover:text-primary transition-colors ease-in-out duration-300" title={techStackIconMap[item].name} />
                
              }) }
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 border-t-foreground-muted p-4 text-xs">
          © 2026 TheDevIko. All rights reserved.
        </div>
      </div>
    </footer>
  )
}