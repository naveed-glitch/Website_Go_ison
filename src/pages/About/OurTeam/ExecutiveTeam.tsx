
import { motion } from 'framer-motion';


const teamMembers = [
  { id: 1, name: "Sarah Johnson", title: "Chief Executive Officer", img: "/team/ceo.jpg" },
  { id: 2, name: "Michael Chen", title: "Chief Technology Officer", img: "/team/cto.jpg" },
  { id: 3, name: "David Rodriguez", title: "Chief Financial Officer", img: "/team/cfo.jpg" },
  { id: 4, name: "Emma Williams", title: "Chief Marketing Officer", img: "/team/cmo.jpg" },
  { id: 5, name: "James Wilson", title: "VP of Operations", img: "/team/vp-ops.jpg" },
  { id: 6, name: "Olivia Thompson", title: "VP of Human Resources", img: "/team/vp-hr.jpg" },
  { id: 7, name: "Robert Garcia", title: "VP of Sales", img: "/team/vp-sales.jpg" },
  { id: 8, name: "Sophia Martinez", title: "VP of Client Services", img: "/team/vp-client.jpg" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ExecutiveTeam() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Executive Leadership Team
          </h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Our experienced leaders drive innovation and excellence across all aspects of our organization.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-5">
                  <div className="absolute inset-0 rounded-full bg-blue-500 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <img
                      src={member.img}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-600 mt-1">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}