"use client";

import clsx from "clsx";
import Link from "next/link";
import { CommandLineIcon } from "@heroicons/react/24/outline";

import { usePathname } from "next/navigation";

export default function RootHeader() {
  const pathname = usePathname();

  return (
    <header className="top-0 z-50 sticky bg-background w-full select-none">
      <nav className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm flex flex-row justify-between items-center px-4">
        <Link href="/" className="relative group w-fit text-foreground lg:text-xl md:text-lg text-base flex flex-nowrap align-middle items-center gap-0.5 font-bold hover:text-primary transition-colors ease-in-out duration-300">
          <CommandLineIcon className="lg:size-10 md:size-9 size-8" />
          TheDevIko
          {/* <span className="absolute top-full left-0 w-full -bottom-0.5 bg-current origin-center scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300 will-change-transform"></span> */}
        </Link>
        <div className="flex flex-row gap-4 lg:text-base md:text-sm text-xs uppercase">
          <div className="md:px-2 px-1 md:py-8 py-6">
            <Link href="/" className={ clsx (
              "relative group text-foreground hover:text-primary transition-colors ease-in-out duration-300",
              { "text-primary": pathname === "/" }
            )}>            
              Home
              <span className={ clsx (
                "absolute top-full left-0 w-full -bottom-0.5 bg-current origin-center scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300 will-change-transform",
                { "scale-x-100": pathname === "/" }
              )}></span>
            </Link>
          </div>
          {/* <div className="md:px-2 px-1 md:py-8 py-6">
            <Link href="/projects" className={ clsx (
              "relative group text-foreground hover:text-primary transition-colors ease-in-out duration-300",
              { "text-primary": pathname === "/projects" }
            )}>   
              Projects
              <span className={ clsx (
                "absolute top-full left-0 w-full -bottom-0.5 bg-current origin-center scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300 will-change-transform",
                { "scale-x-100": pathname === "/projects" }
              )}></span>
            </Link>
          </div> */}
          <div className="md:px-2 px-1 md:py-8 py-6">
            <Link href="/about" className={ clsx (
              "relative group text-foreground hover:text-primary transition-colors ease-in-out duration-300",
              { "text-primary": pathname === "/about" }
            )}>   
              About
              <span className={ clsx (
                "absolute top-full left-0 w-full -bottom-0.5 bg-current origin-center scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300 will-change-transform",
                { "scale-x-100": pathname === "/about" }
              )}></span>
            </Link>
          </div>
          <div className="md:px-2 px-1 md:py-8 py-6">
            <Link href="/contact" className={ clsx (
              "relative group text-foreground hover:text-primary transition-colors ease-in-out duration-300",
              { "text-primary": pathname === "/contact" }
            )}>   
              Contact
              <span className={ clsx (
                "absolute top-full left-0 w-full -bottom-0.5 bg-current origin-center scale-x-0 group-hover:scale-x-100 transition-all ease-in-out duration-300 will-change-transform",
                { "scale-x-100": pathname === "/contact" }
              )}></span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}