import React from "react";
import { Parallax } from "react-scroll-parallax";
import {Link} from "react-router-dom"

const WhyChooseUs = () => {
  return (
    <section
  className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3')",
  }}
>

  <div className="absolute inset-0 bg-black/40"></div>

  <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-screen">
    {/* Text Content */}
    <div className="relative bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-12 max-w-2xl text-center z-20">
      <h2 className="text-4xl font-bold text-gray-800 mb-8 tracking-tight">
        What We Do
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-xl mx-auto">
        We partner with businesses to deliver tailored recruitment
        solutions—permanent, contract, and executive hiring. Our goal is
        simple: the right talent, at the right time, to drive your growth.
      </p>
      <Link
        to={"/Services"}
        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
      >
        Learn About Our Services
      </Link>
    </div>
  </div>
</section>
  );
};

export default WhyChooseUs;