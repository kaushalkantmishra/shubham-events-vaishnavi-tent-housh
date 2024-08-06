// src/app/services/[slug]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import serviceData from "@/data/event_services.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  duration: string;
  location: string;
  highlights: string[];
  isFeatured: boolean;
  image: string;
}

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const serviceDetail = serviceData.services.find((s) => s.slug === slug);
    setService(serviceDetail || null);
  }, [slug]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mt-16 mx-auto px-4 sm:px-6 lg:px-8">
        <BackgroundGradient className="relative rounded-3xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden">
          <div className="absolute inset-0 rounded-3xl -z-10 bg-gradient-to-r from-teal-400 to-blue-500 opacity-30"></div>
          <div className="flex-shrink-0">
            <img
              className="w-full h-48 object-cover rounded-t-3xl" // Adjust height as needed
              src={service.image}
              alt={service.title}
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {service.title}
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {service.description}
            </p>
            <div className="mt-2">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                Price: ${service.price.toFixed(2)}
              </h3>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                Duration: {service.duration}
              </h3>
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                Location: {service.location}
              </h3>
            </div>
            <div className="mt-2">
              <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                Highlights:
              </h3>
              <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400">
                {service.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
