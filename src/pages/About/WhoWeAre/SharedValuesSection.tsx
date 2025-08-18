import { motion } from 'framer-motion';

type BlobProps = {
  color: string;
  size: number;
  top: number;
  left: number;
  delay: number;
};

const Blob: React.FC<BlobProps> = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      className="absolute rounded-full filter blur-xl opacity-30"
      style={{
        backgroundColor: color,
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
      }}
      animate={{
        scale: [1, 1.2, 1],
        borderRadius: ['50%', '40%', '50%'],
        x: [0, 20, 0],
        y: [0, 15, 0],
      }}
      transition={{
        duration: 10 + Math.random() * 10,
        repeat: Infinity,
        repeatType: 'reverse',
        delay,
      }}
    />
  );
};

type Value = {
  title: string;
  description: string;
};

const SharedValuesSection: React.FC = () => {
  const values: Value[] = [
    {
      title: 'People First',
      description: 'We prioritize the well-being and growth of our people above all else.',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in everything we do.',
    },
    {
      title: 'Innovation',
      description: 'We embrace change and continuously seek better ways to serve our community.',
    },
    {
      title: 'Community',
      description: 'We believe in giving back and making a positive impact in the communities we serve.',
    },
  ];

const blobs: BlobProps[] = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  color: ['#00FFFF', '#FF00FF', '#FFFF00', '#FFA500', '#00FF00'][
    Math.floor(Math.random() * 5)
  ],
  size: Math.random() * 200 + 100,
  top: Math.random() * 100,
  left: Math.random() * 100,
  delay: Math.random() * 5,
}));

  return (
    <div className="relative min-h-screen bg-[#001f3f] py-24 px-4 overflow-hidden">
      {blobs.map((blob, index) => (
        <Blob
          key={index}
          color={blob.color}
          size={blob.size}
          top={blob.top}
          left={blob.left}
          delay={blob.delay}
        />
      ))}

      <div className="relative z-10 container mx-auto max-w-4xl">
        <motion.h2
          className="text-5xl font-bold text-white text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Shared Values
        </motion.h2>

        <motion.p
          className="text-xl text-gray-200 text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          These core principles guide everything we do and shape our company culture.
        </motion.p>

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
                borderColor: 'rgba(56,189,248,0.5)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              }}
            >
              <h3 className="text-2xl font-bold text-cyan-300 mb-4">{value.title}</h3>
              <p className="text-gray-200">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SharedValuesSection;
