import Image from "next/image";
import ScrollToButton from "../_components/scroll-to-button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import LineSeparator from "@/components/utils/line-separator";

export default async function About() {

  const steps = [
    'Analyze the core business problem',
    'Convert the problem into a stack',
    'Learn the unfamiliar but necessary tools',
    'Visualize the app on the frontend',
    'Build the backend and connect everything to the frontend',
    'Communicate, discuss changes, and iterate',
    'Finalize the core app, document and deploy'
  ]

  const workingStyles = [
    {
      title: "Solo & Focused",
      content: `
        Preferrably, I want solo deep-focus work. 
        When a feature or a project has been given to me, I prefer to do it with creative freedom on the stack.
        This allows me to have a concrete plan with less variables to think of and start working and delivering as soon as possible.
        
        As a Full Stack Developer, I am already equipped with the proper and modern technological stacks to build full stack systems end-to-end. 
      `
    },
    {
      'title': "Disciplined",
      content: `
        Regardless of whether I&apos;m working alone or with a team, 
        I always make sure I write semantically readable code and documenting as necessary for continuity. 
        I structure my projects logically by lumping together closely related files for orderliness, easier navigation and readability.
        I also refactor and polish raw versions of my code blocks when time permits.
        While these are good coding practices, I consider them more as fruits of foresight.
      `
    },
    {
      'title': "Adaptive",
      content: `
        Situationally, I am adaptive. It depends on the team, the stack, 
        and the current existing system that I have to work with.
        When I am on this adaptive state, I am usually a researcher and a consultant; 
        analyzing problems, absorbing new knowledge and providing diagnostic information for the team.
        
        As a Full Stack Developer, I have the full advantage of reassembling myself for a needed dev role, 
        like focusing all on frontend, backend, or the others. I can also adjust roles depending on 
        which part of the project needs more attention.
      `
    },
  ]
  
  return (
    <main className="mx-auto w-full min-h-screen flex flex-col flex-1 pt-8 lg:gap-24 md:gap-20 sm:gap-16 gap-12 scroll-mt-24">
      
      <section id="hero" className="h-[70vh] flex flex-col justify-center scroll-mt-32">
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm px-4">
          <div className="md:grid md:grid-cols-3 flex flex-col gap-4 align-middle items-center">
            <div>
              <Image
                src={ '/img/profile/profile.jpg' }
                alt="profile"
                width={600}
                height={600}
                loading="eager"
                draggable="false"
                className="w-full h-auto col-span-1 rounded-full">
              </Image>
            </div>
            
            <div className="flex flex-col col-span-2 justify-between p-4">
              <div className="flex flex-col md:space-y-4 space-y-3">
                <h1 className="xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl text-4xl">
                  About Me
                </h1>
                <h3 className="lg:text-2xl sm:text-xl text-lg">
                  Hi! I am Iko
                </h3>
                <p className="lg:text-base sm:text-sm text-xs">
                  I&apos;m a developer who enjoys turning ideas into things people can actually use. 
                  I like working across the frontend and backend, learning how different pieces of an application fit together.
                </p>
                <p className="lg:text-base sm:text-sm text-xs">
                  Right now, I&apos;m focused on building projects that challenge me to learn new technologies and improve how I approach software development. I enjoy experimenting, breaking things, figuring out why they broke, and occasionally questioning why I decided to build them in the first place.
                </p>
                <p className="lg:text-base sm:text-sm text-xs">
                  <strong>Currently:</strong> <span className="text-foreground/75">Building, learning, and looking for the next thing to create.</span>
                </p>
              </div>

              <ScrollToButton id="content" className="relative group w-fit mt-4 gap-1 flex flex-row items-center text-foreground/50 text-sm hover:text-primary hover:cursor-pointer transition-colors ease-in-out duration-300">
                More About Me 
                <ArrowDownIcon className="size-4 text-current"/>
                <span className="absolute top-full left-0 w-full -bottom-0.5 bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300 will-change-transform"></span>
              </ScrollToButton>
            
            </div>
          </div>
        </div>
      </section>

      <LineSeparator />

      <section id="content" className="md:scroll-mt-48 sm:scroll-mt-36 scroll-mt-32">
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm px-4 space-y-6">
          <div className="space-y-1">
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              My Story?
            </h2>
            <h3 className="lg:text-2xl sm:text-xl text-lg text-foreground/75">
              Here&apos;s what made me
            </h3>
          </div>
          <div className="lg:space-y-8 sm:space-y-6 space-y-4 lg:text-base sm:text-sm text-xs leading-relaxed">
            <p>
              Back when I was applying to universities as a fresh senior high school graduate,
              I did not know what program to take. There were three things I knew back then: 
              I was fairly good at math and logic stuff, I liked science, and I liked tinkering my phone and computer on both the parts and the apps. 
            </p>
            <p>
              When I was browsing for programs available on university websites, 
              I searched for what just sounded familiar and fit for what I was already doing.
              There I found my major Computer Science, and I enrolled not even knowing what it was. 
              I just knew it had the word &apos;Computer&apos; and &apos;Science&apos;, and that&apos;s it. 
              That&apos;s the very reason why I&apos;m here. 
            </p>
            <p>
              When I got into my college program, I learned more of what it was about. 
              And I wished I was exposed a lot sooner to Computer Science.
              I made my first Java program, and the very first thought that came to me was 
              &quot;This is a creative field, I can create anything I want here.&quot;. 
              However, Computer Science is a broad field. Even though my university taught many different specializations,
              I could only learn so much in a limited time. So throughout my college years, 
              I focused on engineering and architecting full stack systems.
            </p>
            <p>
              As I went through many challenging leadership roles, internship, and a few extracurriculars, 
              it added other complementary skills like research, presentation, teaching, 
              mentoring, collaboration, networking, and critical decision making. 
              Through those growing experiences, I made two of my proudest academic breakthroughs.
              I was able to publish an NLP paper with my team and I was able to engineer one of my best projects: our CS Thesis.
            </p>
            <p>
              Right now, I continue to learn and discover new things outside formal education, improve on my craft and expand my arsenal.
              As a fresh graduate with small professional experience, I am confident in my engineering and tinkering abilities.
              I&apos;m very eager to refine and grow myself further as I experience more challenges in my software development journey. 
            </p>
          </div>
        </div>
      </section>

      <LineSeparator />

      <section>
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm px-4 space-y-8">
          <div>
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              Working Style
            </h2>
          </div>
          <div className="mx-auto md:grid md:grid-cols-3 flex flex-col md:gap-x-8 gap-y-8">
            { 
              workingStyles.map(({ title, content }, idx) => (
                <div key={ idx } className="md:space-y-4 sm:space-y-3 space-y-2 px-4">
                  <h3 className="lg:text-2xl md:text-xl text-lg uppercase tracking-widest text-nowrap text-foreground/50">{ title }</h3>
                  <p className="lg:text-base sm:text-sm text-xs leading-relaxed">
                    { content }
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      
      
      <LineSeparator />
      
      <section>
        <div className="mx-auto xl:w-2xl lg:w-xl md:w-lg sm:w-md w-sm px-4 md:space-y-16 sm:space-y-12 space-y-8">
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center">
            My Process
          </h2>
          <ol className="mx-auto flex flex-col md:gap-4 sm:gap-3.5 gap-3">
            { steps.map((step, idx) => (
              <li key={ idx } className="group flex flex-row gap-4 items-center">
                <span className="flex flex-row lg:size-16 md:size-14 sm:size-12 size-10 shrink-0 md:text-3xl sm:text-2xl: text-xl text-background bg-foreground justify-center items-center select-none group-hover:bg-primary transition-colors duration-300 ease-in-out">
                  { idx + 1 }
                </span>
                <p className="w-full lg:ml-4 md:ml-3 sm:ml-2 ml-1 lg:text-xl md:text-lg sm:text-base text-sm group-hover:text-primary transition-colors duration-300 ease-in-out">
                  { step }
                </p>
              </li>
            )) }
          </ol>
        </div>
      </section>
      
      <LineSeparator />
      
      <section>
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm px-4 space-y-8">
          <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Merge Conflicts
          </h2>
          <div className="mx-auto pl-8 space-y-4 border-l-4 border-l-foreground/50">
            <p className="lg:text-base sm:text-sm text-xs leading-relaxed">
              WIth my previous experiences working with different teams, I have encountered codes that are difficult to read,  
              especially when merging code bases in a repository. It&apos;s common for teams like these to struggle collaborating
              with each other because of conflicting coding styles, 
              which consequently introduces development time overhead, and possibly team politics. 
              
              For such teams, I become more of a DevOps than a developer. I learned to read code semantics by determining the intent, 
              learned how to merge different personalities of codes, and successfully connect different code bases. 
            </p>
          </div>
        </div>
      </section>

      <LineSeparator />
      
      <section>
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm px-4 space-y-6">
          <div className="space-y-1">
            <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
              Work & Life
            </h2>
            <h3 className="lg:text-2xl sm:text-xl text-lg text-foreground/75">
              A few things I do outside of code
            </h3>
          </div>
          <p className="lg:text-base sm:text-sm text-xs leading-relaxed">
            I play video games, both mobile and pc. 
            I also do some creative work involving digital illustrations and music production. 
            Sometimes I watch anime, movie series, or movies with my family and friends.
            Sometimes I also watch videos on the internet and just be laid back on my bed.
            Lately, I have taken an interest into financing.
          </p>
        </div>
        <div className="lg:my-16 md:my-14 sm:my-12 my-10 text-center">
          {/* <ScrollToTop /> */}
          <ScrollToButton id="hero" className="mx-auto w-fit md:pl-7 md:pr-6 md:py-3 pl-5 pr-4 py-2 md:tracking-[4px] tracking-[3px] rounded-md md:text-lg text-base text-background bg-foreground hover:bg-primary hover:cursor-pointer transition-colors duration-300 ease-in-out">
            Back to Top
          </ScrollToButton>
        </div>
      </section>

    </main>
  )
}
