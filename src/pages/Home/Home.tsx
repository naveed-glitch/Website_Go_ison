import React from "react";
import { Separator } from "@/components/ui/separator";
import Hero from "@/pages/Home/Hero";
import AboutSplit from "./AboutSplit";
import ServicesHome from "./ServicesHome";
import StatsSection from "./StatsSection";
import WhyChooseUsSection from "./WhyChooseUs";
import ResourcesSection from "./Resources";
import TestimonialSection from "./Testimonials";
import ContactCTA from "./ContactCTA";

const Home: React.FC = () => {
  return (
    <main className=" text-center ">
      {/* Hero Section */}
      <section id="hero" className="">
        <Hero/>
        
      </section>

      

      
       <StatsSection/>

      {/* About Section */}
      <section id="about" className="scroll-mt-20">
         {/* <h2 className="text-3xl font-semibold">About Us</h2> */}
        <AboutSplit/>
       
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-20">
    
        <ServicesHome/>
       
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="scroll-mt-20">
        <WhyChooseUsSection/>
      </section>

     

      {/* Resources Section */}
      {/* <section id="news" className="scroll-mt-20">
       <ResourcesSection/>
       
      </section> */}

      {/* Testimonials Section */}
      {/* <section id="testimonials" className="scroll-mt-20">
        <TestimonialSection/>
    
      </section> */}

      {/* Contact CTA Section */}
      <section id="contact" className="scroll-mt-20">
        <ContactCTA/>
        <Separator className="mt-2" />
      </section>
    </main>
  );
};

export default Home;
