import LineSeparator from "@/components/utils/line-separator";
import Link from "next/link";

import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiGmail, SiProtonmail } from "react-icons/si";

export default function Contact() {
  return (
    <main className="w-full min-h-screen flex flex-col flex-1 lg:gap-16 md:gap-14 sm:gap-12 gap-8 scroll-mt-24">
      <section className="md:h-[30vh] h-[25vh] flex flex-col items-center justify-center">
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm px-4">
          <div className="space-y-1 overflow-x-hidden">
            <h2 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl select-none">
              Let&apos;s Build <span className="text-foreground hover:text-primary hover:shimmer hover:shimmer-color-white/75 hover:shimmer-spread-200 hover:shimmer-repeat-delay-3000 hover:shimmer-duration-500 transition-colors ease-in-out duration-300">Something</span>
            </h2>
            <p className="md:text-2xl text:base text-foreground/75">
              Have a project, opportunity, or idea you&apos;d like to discuss?
            </p>
          </div>
        </div>
      </section>
      
      <LineSeparator />
      
      <section className="">
        <div className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm md:grid md:grid-cols-2 grid-cols-1 md:grid-rows-1 flex flex-col xl:gap-24 lg:gap-20 md:gap-16 gap-12 px-4">
          <div className="md:space-y-8 sm:space-y-6 space-y-4">
            <h3 className="md:text-2xl sm:text-xl text-lg">
              Send a message
            </h3>
            <form action="api/contact" method="post" className="flex flex-col space-y-4 md:text-sm text-xs">
              <div className="flex flex-col space-y-1">
                <label htmlFor="name" className="font-bold">Name</label>
                <input id="name" name="name" type="text" placeholder="Name" className="px-3 py-2 rounded-md border border-foreground outline-primary" required />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="email" className="font-bold">Email</label>
                <input id="email" name="email" type="email" placeholder="example@yourmail.com" className="px-3 py-2 rounded-md border border-foreground outline-primary" required />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="subject" className="font-bold">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="Subject" className="px-3 py-2 rounded-md border border-foreground outline-primary" required />
              </div>
              <div className="flex flex-col space-y-1">
                <label htmlFor="message" className="font-bold">Message</label>
                <textarea id="message" name="message" placeholder="Your message" rows={ 3 } className="px-3 py-2 min-h-20 rounded-md border border-foreground outline-primary" required />
              </div>
              <button type="submit" className="px-3 py-2 rounded-md bg-foreground text-background hover:bg-primary hover:cursor-pointer transition-colors ease-in-out duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="md:space-y-12 sm:space-y-10 space-y-8 md:order-2 order-1">
            <div>
              <h3 className="md:text-2xl sm:text-xl text-lg">
                Connect with me
              </h3>
            </div>
            <div className="flex flex-col md:gap-4 sm:gap-3 gap-2 md:text-lg sm:text-base text-sm">
              <Link href={"https://www.github.com/TheDevIko"} className="w-fit flex flex-row gap-2 items-center hover:text-primary transition-colors ease-in-out duration-300">
                <SiGithub className="md:size-6 sm:size-5 size-4 shrink-0" />
                GitHub
              </Link>
              <Link href={"https://www.linkedin.com/in/iko-viado"} className="w-fit flex flex-row gap-2 items-center hover:text-primary transition-colors ease-in-out duration-300">
                <FaLinkedin className="md:size-6 sm:size-5 size-4 shrink-0" />
                LinkedIn
              </Link>
              <Link href={"mailto:iko.viado.contact@gmail.com"} className="w-fit flex flex-row gap-2 items-center hover:text-primary transition-colors ease-in-out duration-300">
                <SiGmail className="md:size-6 sm:size-5 size-4 shrink-0" />
                Google Mail
              </Link>
              <Link href={"mailto:thedeviko@proton.me"} className="w-fit flex flex-row gap-2 items-center hover:text-primary transition-colors ease-in-out duration-300">
                <SiProtonmail className="md:size-6 sm:size-5 size-4 shrink-0" />
                Proton Mail
              </Link>
            </div>

            <div>
              <h3 className="md:text-2xl sm:text-xl text-lg">
                Based in
              </h3>
              <p className="md:text-lg sm:test-base text-sm">
                Philippines · Available remotely
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}