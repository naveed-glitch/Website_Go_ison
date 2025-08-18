import React from "react";
import { Parallax } from "react-scroll-parallax";

const WhyChooseUs = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-screen">
        {/* Text Content */}
        <div className="relative bg-white rounded-3xl shadow-xl p-12 max-w-2xl text-center z-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 tracking-tight">
            What We Do
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
            We're fully engaged, hands-on collaborators. We're passionate about creating solutions that fuel business, technology and people transformation.
          </p>
          <a
            href="#learn-more"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg text-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            Learn About Our Solutions
          </a>
        </div>

        {/* Parallax Background Images */}
        {/* Top-right image */}
        <Parallax speed={-15} className="absolute top-10 right-10">
          <div className="relative w-56 h-72 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661598442345-245ee74b57b2?w=600&auto=format&fit=crop&q=80"
              alt="Technology"
              className="w-full h-full object-cover"
            />
          </div>
        </Parallax>

        {/* Middle-left image */}
        <Parallax speed={-8} className="absolute left-8 bottom-1/3">
          <div className="relative w-48 h-64 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <img
              src="https://plus.unsplash.com/premium_photo-1661573611925-860268d2902a?w=600&auto=format&fit=crop&q=80"
              alt="Teamwork"
              className="w-full h-full object-cover"
            />
          </div>
        </Parallax>

        {/* Bottom-right image */}
        <Parallax speed={-20} className="absolute bottom-20 right-20">
          <div className="relative w-52 h-68 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?w=600&auto=format&fit=crop&q=80"
              alt="Workspace"
              className="w-full h-full object-cover"
            />
          </div>
        </Parallax>
      </div>
    </section>
  );
};

export default WhyChooseUs;