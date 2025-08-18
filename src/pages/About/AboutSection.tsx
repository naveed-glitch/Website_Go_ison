import React from "react";
import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icon for map markers
const customIcon = new L.Icon({
  iconUrl: "data:image/png;base64,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",
  iconSize: [24, 24],
});

const locations: { position: [number, number]; name: string }[] = [
  { position: [40.7128, -74.006], name: "New York, USA" },
  { position: [51.5074, -0.1278], name: "London, UK" },
  { position: [35.6895, 139.6917], name: "Tokyo, Japan" },
  { position: [28.6139, 77.209], name: "Delhi, India" },
];

// Animated map view
const AnimatedMap = () => {
  const map = useMap();

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      map.flyTo(locations[index].position, 4, {
        duration: 2,
      });
      index = (index + 1) % locations.length;
    }, 5000);
    return () => clearInterval(interval);
  }, [map]);

  return null;
};

const AboutSection: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-900 to-gray-900 text-white relative">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Transforming the IT staffing industry with innovation and a global reach.
        </motion.p>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-gray-100 text-blue-900">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl">
              To connect top-tier talent with leading companies, fostering innovation and growth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Innovative Solutions", "Global Reach", "Dedicated Team"].map((title, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p>
                  {title === "Innovative Solutions" && "Providing cutting-edge staffing services tailored to meet client needs."}
                  {title === "Global Reach" && "A presence in major cities around the globe ensures unparalleled service."}
                  {title === "Dedicated Team" && "Experienced professionals committed to excellence in every engagement."}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="h-screen bg-gradient-to-br from-gray-200 to-white">
        <div className="container mx-auto px-4 py-24">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Global Presence</h2>
            <p className="text-xl">We have established offices in key locations around the world.</p>
          </motion.div>
          <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={false}
            className="w-full h-[500px] rounded-xl shadow-lg"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((location, index) => (
              <Marker key={index} position={location.position} icon={customIcon}>
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
            <AnimatedMap />
          </MapContainer>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
