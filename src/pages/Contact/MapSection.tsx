import React from "react";
import { motion } from "framer-motion";
import WorldMap from "@/components/ui/world-map";

const MapSection: React.FC = () => {
  return (
    <div className="py-16">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
          Visit Our Headquarters
        </h2>
        <p className="text-slate-600 mb-10 text-center max-w-2xl mx-auto">
          Our global team of experienced specialists are ready to take your call and help you achieve your goals.
        </p>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="relative">
            {/* Ensure the WorldMap props align with its implementation */}
            <WorldMap
              style={{ height: "24rem", width: "100%" }} // Use `style` for height and width
              markers={[
                {
                  lat: 42.5867,
                  lng: -83.1456,
                  title: "Global Headquarters",
                },
              ]}
              onMarkerClick={(marker: { lat: number; lng: number; title: string }) => {
                console.log("Clicked marker:", marker);
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="inline-block bg-white p-6 rounded-xl shadow-lg pointer-events-auto">
                  <div className="text-blue-800 font-bold text-xl mb-2">
                    Global Headquarters
                  </div>
                  <div className="text-slate-700">
                    999 West Big Beaver Road, Troy, Michigan
                  </div>
                  <a
                    href="https://goo.gl/maps/samplelink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MapSection;
