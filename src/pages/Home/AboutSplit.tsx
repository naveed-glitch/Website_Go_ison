import { motion } from "framer-motion";

export default function AboutSplit() {
  return (
    <section className="bg-white py-20 px-6 lg:px-20 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left: Text Content */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-6">
            More than just a recruitment agency
          </h2>
          <p className="text-gray-600 mb-4">
            Whether you’re in a permanent job or working in a temporary position as one of our associates,
            we’re here to help you develop your career.
          </p>
          <p className="text-gray-600 mb-4">
            We have thousands of jobs in your area covering a range of skill sets and can help you get
            the training and upskilling you need to be ready for the future.
          </p>
          <p className="text-gray-600 mb-6">
            Whether you're just starting out or you're 30 years in, we’re here to guide and support
            you in your next steps.
          </p>

          {/* Animated Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#1e3a8a",
              color: "#ffffff",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-blue-100 text-blue-700 font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Right: Animated Image */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <div className="overflow-hidden rounded-3xl shadow-xl transform hover:scale-[1.03] transition-transform duration-500 ease-in-out">
            <img
              src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80"
              alt="Modern office with team collaboration"
              className="rounded-3xl object-cover w-full h-auto max-w-[600px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
