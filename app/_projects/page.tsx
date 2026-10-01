// import ProjectCard from "@/components/cards/project-card";
// import { createClient } from "@/lib/supabase/client";

// export default async function Projects() {

//   const supabase = createClient();

//   const { data: projects } = await supabase
//     .from('projects')
//     .select('*');

//   if (!projects) return;

//   return (
//     <main className="min-h-screen flex-1 pt-8 scroll-mt-24">
//       <div className="mx-auto w-6xl">
//         <div className="grid grid-rows-3 divide-y divide-foreground/50 gap-12">
//           { projects.map((project, idx) => (
//             <ProjectCard
//               key={ idx }
//               title={ project.title }
//               subtitle={ project.subtitle }
//               year={ project.year }
//               description={ project.description }
//               image={ project.img_src }
//               tech_stack={ project.tech_stack }
//               url={ project.url }>
//             </ProjectCard>
//           )) }
//         </div>
//       </div>
//     </main>
//   )
// }