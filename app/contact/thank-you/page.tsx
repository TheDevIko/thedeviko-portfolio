import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ContactThankYou() {
  return (
    <main className="flex-1">
      <section className="mx-auto xl:w-6xl lg:w-5xl md:w-3xl sm:w-xl w-sm px-4">
        <div className="mt-24 md:mb-10 sm:mb-8 mb-6 md:space-x-4 sm:space-x-10 space-x-2 flex flex-row flex-nowrap justify-center align-middle items-center">
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center">
            Email sent 
          </h1>
          <CheckCircleIcon className="md:size-20 sm:size-16 size-12 text-lime-500"/>
        </div>
        <p className="text-center md:text-2xl sm:text-xl text-lg">
           Thank you for reaching out! Kindly wait for a response through your email.
        </p>
      </section>
    </main>
  )
}