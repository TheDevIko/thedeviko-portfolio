import { IconType } from "react-icons";

import { FaJava } from "react-icons/fa6"

import { 
  SiAlpinedotjs, SiCss, SiDocker, SiFastapi, SiFedora, SiFlask, SiGit, SiGithub, SiHtml5, SiHtmx, SiJavascript, 
  SiLangchain, SiLanggraph, SiLinux, SiNextdotjs, SiNodedotjs, SiOllama, SiPostgresql,  SiPython, SiPytorch, SiQdrant, 
  SiRasa, SiReact, SiResend, SiSpring, SiSpringboot, SiSpringsecurity, SiSupabase, SiTailwindcss, SiTensorflow, SiThymeleaf, SiTypescript 
} from "react-icons/si";

export const techStackIconMap: Record<
  string, 
  { 
    name: string, 
    icon: IconType 
  }
> = {
  alpinedotjs: { 
    name: "Alpine.js", 
    icon: SiAlpinedotjs 
  },
  css: {
    name: "CSS",
    icon: SiCss
  },
  docker: {
    name: "Docker",
    icon: SiDocker
  },
  fastapi: {
    name: "FastAPI",
    icon: SiFastapi,
  },
  fedora: {
    name: "Fedora",
    icon: SiFedora,
  },
  flask: {
    name: "Flask",
    icon: SiFlask
  },
  git: {
    name: "Git",
    icon: SiGit,
  },
  github: {
    name: "Github",
    icon: SiGithub,
  },
  html: {
    name: "HTML",
    icon: SiHtml5,
  },
  htmx: {
    name: "HTMX",
    icon: SiHtmx,
  },
  java: {
    name: "Java",
    icon: FaJava,
  },
  javascript: {
    name: "JavaScript",
    icon: SiJavascript,
  },
  langchain: {
    name: "LangChain",
    icon: SiLangchain,
  },
  langgraph: {
    name: "LangGraph",
    icon: SiLanggraph,
  },
  linux: {
    name: "Linux",
    icon: SiLinux,
  },
  nextdotjs: {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  nodedotjs: {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  ollama: {
    name: "Ollama",
    icon: SiOllama,
  },
  postgresql: {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
  python: {
    name: "Python",
    icon: SiPython,
  },
  qdrant: {
    name: "Qdrant",
    icon: SiQdrant,
  },
  rasa: {
    name: "Rasa",
    icon: SiRasa,
  },
  react: {
    name: "React",
    icon: SiReact,
  },
  resend: {
    name: "Resend",
    icon: SiResend,
  },
  spring: {
    name: "Spring Framework",
    icon: SiSpring,
  },
  springboot: {
    name: "Spring Boot",
    icon: SiSpringboot,
  },
  springsecurity: {
    name: "Spring Security",
    icon: SiSpringsecurity,
  },
  supabase: {
    name: "Supabase",
    icon: SiSupabase,
  },
  tailwindcss: {
    name: "TailwindCSS",
    icon: SiTailwindcss,
  },
  tensorflow: {
    name: "TensorFlow",
    icon: SiTensorflow
  },
  thymeleaf: {
    name: "THymeleaf",
    icon: SiThymeleaf,
  },
  torch: {
    name: "PyTorch",
    icon: SiPytorch,
  },
  typescript: {
    name: "TypeScript",
    icon: SiTypescript,
  }
}