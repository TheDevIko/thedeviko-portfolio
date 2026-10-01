// "use client"


export default function ProjectCardSkeleton() {
  return (
    <div className="w-full h-full grid md:grid-cols-3 grid-cols-1 md:grid-rows-1 sm:grid-rows-2 grid-rows-5 justify-between md:pb-12 sm:pb-10 pb-8 sm:gap-y-8 gap-y-4 gap-x-8">
      <div className="h-full p-4 flex flex-col col-span-1 sm:row-span-1 row-span-3 md:order-1 order-2 gap-8">

        <div className="space-y-2">
          <div className="md:h-12 sm:h-10 h-8 w-5/6 bg-foreground/5 shimmer shimmer-bg shimmer-color-foreground/10 shimmer-angle-0 shimmer-spread-300 shimmer-speed-180 shimmer-repeat-delay-1000"></div>
          <div className="h-6 w-3/5 bg-foreground/5 shimmer shimmer-bg shimmer-color-foreground/10 shimmer-angle-0 shimmer-spread-300 shimmer-speed-180 shimmer-repeat-delay-1000"></div>
          <div className="h-3 w-1/4 bg-foreground/5 shimmer shimmer-bg shimmer-color-foreground/10 shimmer-angle-0 shimmer-spread-300 shimmer-speed-180 shimmer-repeat-delay-1000"></div>
        </div>

        <div className="md:h-36 h-24 w-full bg-foreground/5 shimmer shimmer-bg shimmer-color-foreground/10 shimmer-angle-0 shimmer-spread-300 shimmer-speed-180 shimmer-repeat-delay-1000"></div>
        
        <div className="space-y-2">
          <div className="md:h-6 h-4 w-1/4 bg-foreground/5 shimmer shimmer-bg shimmer-color-foreground/10 shimmer-angle-0 shimmer-spread-300 shimmer-speed-180 shimmer-repeat-delay-1000"></div>
          <div className="md:h-8 h-6 w-3/4 bg-foreground/5 shimmer shimmer-bg shimmer-color-foreground/10 shimmer-angle-0 shimmer-spread-300 shimmer-speed-180 shimmer-repeat-delay-1000"></div>
        </div>

        <div className="h-4 w-2/5 bg-foreground/5 shimmer shimmer-bg shimmer-color-foreground/10 shimmer-angle-0 shimmer-spread-300 shimmer-speed-180 shimmer-repeat-delay-1000"></div>
      </div>

      <div className="bg-foreground/5 shimmer shimmer-bg shimmer-color-foreground/10 shimmer-angle-0 shimmer-spread-300 shimmer-speed-180 shimmer-repeat-delay-1000 md:col-span-2 sm:row-span-1 row-span-2 md:order-2 order-1"></div>
    </div>
  )
}