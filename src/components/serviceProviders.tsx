"use client";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const serviceProviders = [
  {
    id: 1,
    name: "Shubham Gupta",
    designation: "Wedding Planner",
    image: "/serviceProviders/Wedding-planner.jpg",
  },
  {
    id: 2,
    name: "Pankaj Gupta",
    designation: "Event Coordinator",
    image: "/serviceProviders/Event-Coordinator.jpg",
  },
  {
    id: 3,
    name: "Shubham events",
    designation: "Catering Specialist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Bittu Ballon",
    designation: "Decoration Expert",
    image: "/serviceProviders/decoration.jpg",
  },
  {
    id: 5,
    name: "Fitty Gupta",
    designation: "Photography Specialist",
    image: "/serviceProviders/Photography.jpg",
  },
  {
    id: 6,
    name: "Liam Smith",
    designation: "Videography Expert",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 7,
    name: "Olivia Brown",
    designation: "Live Singing Specialist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
];

function ServiceProviders() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          Meet Our Service Providers
        </h2>
        <p className="text-base md:text-lg text-white text-center mb-4">
          Discover the talented professionals who will make your event
          unforgettable
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={serviceProviders} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default ServiceProviders;
