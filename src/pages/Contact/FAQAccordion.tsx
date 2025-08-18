import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How can I contact support?",
    answer: "You can reach us via the contact form or call us at +123 456 789."
  },
  {
    question: "What services do you offer?",
    answer: "We specialize in staffing, consulting, and project management."
  },
  {
    question: "How quickly can you provide candidates?",
    answer: "We typically provide qualified candidates within 1 to 2 weeks based on your requirements."
  },
  {
    question: "Do you provide contract, contract-to-hire, and permanent staffing?",
    answer: "Yes, we offer flexible staffing solutions including contract, contract-to-hire, and direct hire placements."
  },
  {
    question: "What industries do you serve?",
    answer: "We primarily serve IT, software development, finance, healthcare, and engineering sectors."
  },
  {
    question: "How do you ensure candidate quality?",
    answer: "Our rigorous screening process includes technical assessments, interviews, and reference checks."
  },
  {
    question: "Can you help with bulk hiring?",
    answer: "Absolutely! We have the capacity and resources to support large-scale recruitment projects."
  },
  {
    question: "Do you offer payroll services?",
    answer: "Yes, we provide payroll and compliance management for contract employees."
  }
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="font-semibold text-lg text-slate-900">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  className="text-blue-600 text-2xl font-bold select-none"
                  aria-hidden="true"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-content-${index}`}
                    role="region"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { height: "auto", opacity: 1, marginTop: 8 },
                      collapsed: { height: 0, opacity: 0, marginTop: 0 }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-6 overflow-hidden text-slate-700"
                  >
                    <p className="py-2">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
