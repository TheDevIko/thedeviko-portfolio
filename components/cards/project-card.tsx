// "use client"

import Link from "next/link"

import { ArrowRightIcon } from "@heroicons/react/24/outline"
import ProjectImage from "../utils/project-image"
import Marquee from "react-fast-marquee"
import { techStackIconMap } from "@/components/icons/tech-stack-icons"

type ProjectCardProps = {
  title: string,
  subtitle?: string | null,
  year: number | null,
  description: string | null,
  image: string | null,
  tech_stack: string[] | null,
  url: string
}

export default async function ProjectCard({
  title,
  subtitle,
  year,
  description,
  image,
  tech_stack,
  url
}: ProjectCardProps) {
  
  return (
    <div className="w-full h-full grid md:grid-cols-3 md:grid-rows-1 sm:grid-rows-2 grid-rows-5 justify-between md:pb-12 sm:pb-10 pb-8 sm:gap-y-8 gap-y-4 gap-x-8">
      <div className="h-full p-4 flex flex-col min-w-0 flex-1 sm:row-span-1 row-span-3 md:col-span-1 order-2 md:order-1 gap-8">

        <div className="">
          <h2 className="lg:text-4xl text-2xl">
            { title }
          </h2>
          <p className="lg:text-base text-sm italic text-foreground/75">{ subtitle }</p>
          <p className="text-xs text-foreground/50">{ year }</p>
        </div>

        <p className="lg:text-base text-sm">{ description }</p>

        <div className="space-y-1">
          <p className="lg:text-base text-sm">Made with:</p>
          <div className="lg:w-3/4 md:w-full sm:w-2/4 w-3/4">
            {
              tech_stack && tech_stack.length > 0
              ? <Marquee autoFill pauseOnHover speed={10} >
                { tech_stack.map((tech, idx) => {
                  const Icon = techStackIconMap[tech.toLowerCase()]?.icon;
                  
                  if (!Icon) return null;
                  
                  return <Icon key={idx} className="size-8 mx-2 shrink-0 text-foreground hover:text-primary transition-colors ease-in-out duration-300" title={techStackIconMap[tech].name} />
                }) }
              </Marquee>
              : "Not Available"
            }
          </div>
        </div>

        <Link
          href={ url }
          className="relative group w-fit flex flex-wrap gap-1 items-center text-foreground/50 md:text-sm text-xs hover:text-primary transition-colors ease-in-out duration-300">
          
          More Details
          
          <ArrowRightIcon className="size-4" />
          <span className="absolute top-full left-0 w-full -bottom-0.5 bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300 will-change-transform"></span>
          
        </Link>
      </div>

      <div className="relative flex items-center justify-center md:col-span-2 md:row-span-1 sm:row-span-1 row-span-2 md:order-2 order-1">
        <ProjectImage
          src={ image }
          alt={ title }

          className="object-contain">
        </ProjectImage>
      </div>
    </div>
  )
}