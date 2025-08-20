import { motion } from "framer-motion";
import { useState } from "react";

// Replace with your actual Apps Script deployment URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyebwAPd8niEsx9PPwr6O5pDHERlK4WnZlaNCXTs4N2ggIA50O64xGUtY0XrsE2rGM/exec";

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // 👈 loader state

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    setLoading(true); // 👈 start loader

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `Date=${Date.now()}&Name=${encodeURIComponent(form.name)}&Email=${encodeURIComponent(
          form.email
        )}&Topic=${encodeURIComponent(form.topic)}&Message=${encodeURIComponent(
          form.message
        )}`,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("✅ Submitted successfully!");
        setForm({ name: "", email: "", topic: "General Inquiry", message: "" });
      } else {
        setStatus("❌ " + data.error);
      }
    } catch (err) {
      setStatus("❌ Network error");
    } finally {
      setLoading(false); // 👈 stop loader
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl p-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Send us a message
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-slate-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="Your Full name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-slate-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="topic" className="block text-slate-700 mb-2">
            Topic
          </label>
          <select
            id="topic"
            name="topic"
            value={form.topic}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          >
            <option>General Inquiry</option>
            <option>Hiring Needs</option>
            <option>Support</option>
            <option>Partnership</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-slate-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            placeholder="How can we help you?"
            required
          />
        </div>

        <motion.button
          type="submit"
          disabled={loading} // 👈 disable while loading
          whileHover={!loading ? { scale: 1.02 } : {}}
          whileTap={!loading ? { scale: 0.98 } : {}}
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all flex justify-center items-center"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Send Message"
          )}
        </motion.button>

        {status && (
          <p className="text-sm text-center text-gray-600 mt-3">{status}</p>
        )}
      </form>
    </motion.div>
  );
};

export default ContactForm;