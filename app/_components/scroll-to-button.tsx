"use client"

type ScrollToButtonProps = {
  id: string,
  className?: string,
  children: React.ReactNode,
}

export default function ScrollToButton({ id, className, children }: ScrollToButtonProps) {
  return (
    <button
      onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
      className={className}>
        { children }
    </button>
  )
}