import FeaturedServices from "@/components/FeaturedServices";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceProviders from "@/components/serviceProviders";
import ShubhamEventsTestimonials from "@/components/TestimonialCards";
import UpcomingEvents from "@/components/UpcomingEvents";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <ShubhamEventsTestimonials />
      <UpcomingEvents />
      <ServiceProviders />
      <Footer />
    </main>
  );
}
