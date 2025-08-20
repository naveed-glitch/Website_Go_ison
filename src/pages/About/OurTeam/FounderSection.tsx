
import { motion } from 'framer-motion';


export function FounderSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Founder & Chairman of the Board
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-30 animate-pulse" />
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/about/founder.jpg"
                alt="Martin E. Judge, Jr."
                width={256}
                height={256}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md bg-white p-8 rounded-xl shadow-lg border border-slate-200"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              <a 
                href="#" 
                className="text-blue-700 hover:text-blue-800 underline underline-offset-4 transition-colors"
              >
                Naveed Haq
              </a>
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Naveed Haq is the Founder and Chairman of Go Ison. With a vision to redefine the staffing industry, he established the company in 2025 to deliver innovative, people-focused workforce solutions.
As a forward-thinking leader, Naveed is dedicated to building strong partnerships, driving sustainable growth, and empowering businesses with the right talent to succeed in a rapidly changing world.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Industry Pioneer
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Visionary Leader
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                Strategic Advisor
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}