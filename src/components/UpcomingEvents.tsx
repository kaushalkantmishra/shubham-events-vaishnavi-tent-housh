"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingEvents() {
  const featuredEvents = [
    {
      title: "Dream Wedding Planning",
      description:
        "Explore the latest trends and tips for planning your perfect wedding.",
      slug: "dream-wedding-planning",
      isFeatured: true,
    },
    {
      title: "Corporate Event Success",
      description:
        "Learn how to host successful corporate events that leave a lasting impression.",
      slug: "corporate-event-success",
      isFeatured: true,
    },
    {
      title: "Creative Birthday Parties",
      description:
        "Discover creative ideas to make birthday parties memorable and fun.",
      slug: "creative-birthday-parties",
      isFeatured: true,
    },
    {
      title: "Themed Party Magic",
      description:
        "Get inspired by unique themed party ideas for all occasions.",
      slug: "themed-party-magic",
      isFeatured: true,
    },
    {
      title: "Live Performance Mastery",
      description:
        "Learn the secrets to captivating live performances from experienced entertainers.",
      slug: "live-performance-mastery",
      isFeatured: true,
    },
    {
      title: "Event Photography & Videography",
      description:
        "Capture your event's best moments with expert photography and videography tips.",
      slug: "event-photography-videography",
      isFeatured: true,
    },
    {
      title: "College Fest Planning",
      description:
        "Organize an unforgettable college fest with tips on themes, events, and more.",
      slug: "college-fest-planning",
      isFeatured: true,
    },
    {
      title: "Conferencing & Seminars",
      description:
        "Discover best practices for organizing effective conferences and seminars.",
      slug: "conferencing-seminars",
      isFeatured: true,
    },
    {
      title: "Destination Wedding Essentials",
      description:
        "Plan a perfect destination wedding with our expert tips and guidance.",
      slug: "destination-wedding-essentials",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED EVENTS
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Discover Unforgettable Experiences
          </p>
        </div>

        <div className="mt-10 z-0">
          <HoverEffect
            items={featuredEvents.map((event) => ({
              title: event.title,
              description: event.description,
              link: "/",
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Events
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
