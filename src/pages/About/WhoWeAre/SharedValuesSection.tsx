import { motion } from "framer-motion";

type Value = {
  title: string;
  description: string;
};

const SharedValuesSection: React.FC = () => {
  const values: Value[] = [
    {
      title: "People First",
      description:
        "We prioritize the growth, success, and well-being of the people we serve.",
    },
    {
      title: "Integrity",
      description:
        "We uphold honesty, transparency, and ethical practices in every interaction.",
    },
    {
      title: "Innovation",
      description:
        "We embrace change and deliver smarter, more effective solutions for our clients.",
    },
    {
      title: "Community",
      description:
        "We are committed to making a positive impact in the businesses and communities we support.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#1e3a8a] py-24 px-4">
      <div className="relative z-10 container mx-auto max-w-4xl">
        {/* Section Heading */}
        <motion.h2
          className="text-5xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Shared Values
        </motion.h2>

        {/* Section Subheading */}
        <motion.p
          className="text-xl text-gray-200 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          These core values define who we are and guide every partnership we build.
        </motion.p>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-blue-900/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-700/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -10,
                borderColor: "rgba(56,189,248,0.5)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-200">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharedValuesSection;