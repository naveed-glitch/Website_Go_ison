

import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import Logo from '../../assets/images/go_ison_logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#023286] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* Logo & Description */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <img src={Logo} alt="YourLogo" className="h-8 w-8" />
            <span className="font-bold text-xl">GoisOn</span>
          </div>
          <p className="text-sm text-blue-100">
            GoisOn connects companies with top talent. Your trusted partner for recruitment and staffing solutions.
          </p>
        </div>

       
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-8 border-t border-blue-800 pt-4">
        <span className="text-xs text-blue-200">
          © {new Date().getFullYear()} GoisOn. All rights reserved.
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-400"><FaInstagram /></a>
          <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-400"><FaFacebook /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-blue-400"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
