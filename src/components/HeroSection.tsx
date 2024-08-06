import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto px-4 py-10">
      <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="relative z-10 w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Shubham Events & Catering
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Elevate your events with our exceptional catering services, meticulous
          event planning, and expert consultations. From grand celebrations to
          intimate gatherings, let us bring your vision to life with
          unparalleled expertise.
        </p>
        <div className="mt-6">
          <Link href={"/services"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
