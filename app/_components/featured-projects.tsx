import ProjectCard from "@/components/cards/project-card";
import ProjectCardSkeleton from "@/components/cards/project-card-skeleton";
import { Suspense } from "react";
import FetchFeaturedProjects from "../api/fetch-featured-projects";
import { TiWarning } from "react-icons/ti";

export default async function FeaturedProjects() {
  
  const featured = await FetchFeaturedProjects();

  if (featured.length === 0) {

    return (
      <>
        <div className="py-16 flex flex-row space-x-2 justify-center items-center text-xl text-nowrap">
          <TiWarning className="text-yellow-400" />
          <p>Unable to fetch projects</p>
          <button></button>
        </div>
      </>
    )
  }

  return (
    <>
      { featured.map((item, idx) => (
        <Suspense key={ idx } fallback={ <ProjectCardSkeleton/> }>
          <ProjectCard 
            title={ item.projects.title } 
            subtitle={ item.projects.subtitle } 
            year={ item.projects.year } 
            description={ item.projects.description } 
            image={ item.projects.img_src }
            tech_stack={ item.projects.tech_stack }
            url={ item.projects.url }>
          </ProjectCard>
        </Suspense>
        ))
      }
    </>
  )
}