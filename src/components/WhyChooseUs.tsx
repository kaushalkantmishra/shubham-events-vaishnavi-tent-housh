"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const eventCateringContent = [
  {
    title:
      "Exceptional Event Planning Services Tailored to Your Unique Needs for a Flawless Experience",
    description:
      "Our expert team delivers exceptional event planning services tailored to your unique needs. From initial concept to final execution, we ensure every detail is managed with precision, creating unforgettable events that exceed your expectations.",
  },
  {
    title:
      "Gourmet Catering for Every Occasion: Elevate Your Event with Exquisite Menus and Personalized Options",
    description:
      "Indulge in gourmet catering that transforms your event into a culinary experience. We offer a wide variety of exquisite menus and personalized options to delight your guests and enhance the overall event atmosphere.",
  },
  {
    title:
      "Customized Event Solutions for Weddings, Corporate Events, and Private Parties to Reflect Your Vision",
    description:
      "Whether it’s a wedding, corporate event, or private party, we provide customized solutions to meet your specific requirements. Our team works closely with you to create a unique event experience that reflects your vision and style.",
  },
  {
    title:
      "Professional and Reliable Service: Ensuring a Smooth and Seamless Event from Start to Finish",
    description:
      "Our commitment to professionalism and reliability ensures your event runs smoothly from start to finish. We take pride in our attention to detail and dedication to delivering exceptional service, making us a trusted partner for your event planning needs.",
  },
  {
    title:
      "Innovative Event Design that Captivates and Inspires: Bringing Creative Ideas to Life",
    description:
      "Experience innovative event design that captivates and inspires. We bring creative ideas and cutting-edge solutions to every event, ensuring a memorable and impactful experience for you and your guests.",
  },
  {
    title:
      "Comprehensive Event Support: From Venue Selection to Post-Event Follow-Up for a Successful Outcome",
    description:
      "From venue selection to post-event follow-up, we offer comprehensive support throughout the entire event process. Our team is here to assist with every aspect of your event, providing the expertise and resources needed for a successful outcome.",
  },
];

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={eventCateringContent} />
    </div>
  );
}

export default WhyChooseUs;
