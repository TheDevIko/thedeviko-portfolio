"use client"

export default function Error({ 
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex-1 flex justify-center items-center">
      <div className="mx-auto h-full flex flex-col items-center xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm px-4 text-center md:space-y-12 sm:space-y-10 space-y-8">

        <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">Something went wrong</h2>

        <button 
          className="md:px-5 md:py-3 px-4 py-2 rounded-md md:text-sm text-xs text-background bg-foreground hover:bg-primary hover:cursor-pointer transition-colors duration-300 ease-in-out"
          onClick={() => reset()}>
          Try again
        </button>
      </div>
    </main>
  );
}