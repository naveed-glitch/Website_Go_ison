import { Link } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        to="/contact"
        className="group relative bg-blue-600 text-white p-4 rounded-full shadow-lg 
                   hover:bg-blue-700 hover:scale-110 transition 
                   flex items-center justify-center"
      >
        <FaEnvelope size={24} />

        {/* Tooltip */}
        <span
          className="absolute right-full mr-3 whitespace-nowrap 
                     bg-gray-800 text-white text-sm px-2 py-1 rounded 
                     opacity-0 group-hover:opacity-100 transition"
        >
          Contact Us
        </span>
      </Link>
    </div>
  );
};

export default FloatingContact;