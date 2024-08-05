"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const shubhamEventsTestimonials = [
  {
    quote:
      "The team at Shubham Events and Catering made our wedding day unforgettable. Their attention to detail and personalized service were outstanding!",
    name: "Ankit Sharma",
    title: "Wedding Ceremony Client",
    image: "/events/wedding.jpg",
  },
  {
    quote:
      "We hosted a corporate event with Shubham Events, and it was a seamless experience. The professionalism and quality were top-notch.",
    name: "Priya Singh",
    title: "Corporate Event Client",
    image: "/events/corporate.jpg",
  },
  {
    quote:
      "Shubham Events organized an amazing birthday party for my daughter. The decorations, the food, everything was perfect!",
    name: "Rahul Verma",
    title: "Birthday Party Client",
    image: "/events/birthday.jpg",
  },
  {
    quote:
      "Our theme party was a huge success thanks to Shubham Events. They brought our vision to life with incredible creativity and expertise.",
    name: "Neha Kapoor",
    title: "Theme Party Client",
    image: "/events/theme.jpg",
  },
  {
    quote:
      "The live singing and stage setup were fantastic. Shubham Events knows how to create a memorable experience!",
    name: "Amit Patel",
    title: "Live Singing Event Client",
    image: "/events/live-singing.jpg",
  },
  {
    quote:
      "The conference we organized was flawless, thanks to Shubham Events. Their attention to detail ensured everything went smoothly.",
    name: "Rohit Mehta",
    title: "Conference Client",
    image: "/events/conference.jpg",
  },
  {
    quote:
      "Shubham Events provided stunning light and sound for our college fest. The atmosphere was electrifying!",
    name: "Riya Joshi",
    title: "College Fest Organizer",
    image: "/events/college-fest.jpg",
  },
  {
    quote:
      "From decoration to catering, Shubham Events exceeded our expectations at our anniversary celebration. Highly recommend!",
    name: "Vikram Saini",
    title: "Anniversary Party Client",
    image: "/events/anniversary.jpg",
  },
  {
    quote:
      "The stage setup and decoration were perfect for our product launch. Shubham Events delivered an impressive experience.",
    name: "Karan Desai",
    title: "Product Launch Organizer",
    image: "/events/product-launch.jpg",
  },
  {
    quote:
      "The photography and videography team captured our special moments beautifully. We couldn't have asked for a better experience.",
    name: "Megha Agarwal",
    title: "Wedding Photography Client",
    image: "/events/photography.jpg",
  },
];

function ShubhamEventsTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Harmony: Voices of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl h-64">
          <InfiniteMovingCards
            items={shubhamEventsTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default ShubhamEventsTestimonials;
