import React, { useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", link: "/" },
  {
    name: "About Us",
    link: "/about",
    dropdown: [
      { name: "Who We Are", link: "/about/who-we-are" },
      { name: "Our Mission & Vision", link: "/about/our-mission" },
      { name: "Our Team", link: "/about/our-team" },
    ],
  },
  {
    name: "Services",
    link: "/services",
    dropdown: [
      { name: "What We Do", link: "/services/what-we-do" },
      { name: "Candidate Sourcing", link: "/services/candidate-sourcing" },
    ],
  },
  // { name: "Need a Job?", link: "/jobs" },
  { name: "Contact Us", link: "/contact" },
  // { name: "News", link: "/news" },
];

const Navbar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();

  const handleMouseEnter = (name: string) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-blue-700 font-extrabold text-2xl tracking-tight">
              GoisOn
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map(({ name, link, dropdown }) => (
              <div
                key={name}
                className="relative"
                onMouseEnter={() => dropdown && handleMouseEnter(name)}
                onMouseLeave={() => dropdown && handleMouseLeave()}
              >
                <Link
                  to={link}
                  className={`text-gray-700 font-medium px-3 py-2 rounded inline-flex items-center transition-colors duration-300
                    ${dropdown ? "hover:text-blue-700" : "hover:text-blue-600"}
                    ${openDropdown === name ? "text-blue-700" : ""}
                  `}
                >
                  {name}
                  {dropdown && (
                    <svg
                      className="ml-1 h-4 w-4 fill-current text-gray-500 transition-transform duration-300"
                      style={{
                        transform:
                          openDropdown === name ? "rotate(180deg)" : undefined,
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.25 7.5l4.5 4.5 4.5-4.5h-9z" />
                    </svg>
                  )}
                </Link>
                {dropdown && (
                  <div
                    className={`absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50
                    transition-all duration-200 ease-in-out origin-top
                    ${openDropdown === name
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                    }
                  `}
                    onMouseEnter={() => handleMouseEnter(name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="py-1">
                      {dropdown.map((item) => (
                        <li key={item.name}>
                          <Link
                            to={item.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
              onClick={() => {
                setMobileOpen((prev) => !prev);
                setMobileDropdown(null);
              }}
            >
              {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden
        ${mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
      `}
      >
        <div className="flex flex-col px-4 py-4 space-y-2">
          {NAV_LINKS.map(({ name, link, dropdown }) => (
            <div key={name} className="relative">
              <button
                className={`w-full text-left text-gray-700 font-medium px-3 py-2 rounded flex items-center justify-between transition
                ${dropdown ? "hover:text-blue-700" : "hover:text-blue-600"}
                ${mobileDropdown === name ? "text-blue-700" : ""}
              `}
                onClick={() => {
                  if (dropdown) {
                    if (mobileDropdown === name) {
                      navigate(link);
                      setMobileOpen(false);
                    } else {
                      setMobileDropdown(name);
                    }
                  } else {
                    navigate(link);
                    setMobileOpen(false);
                  }
                }}
              >
                <span>{name}</span>
                {dropdown && (
                  <svg
                    className={`ml-2 h-4 w-4 fill-current text-gray-500 transition-transform duration-300
                    ${mobileDropdown === name ? "rotate-180" : ""}
                  `}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.25 7.5l4.5 4.5 4.5-4.5h-9z" />
                  </svg>
                )}
              </button>
              {dropdown && (
                <ul
                  className={`bg-gray-50 rounded mt-1 overflow-hidden transition-all duration-300 ease-in-out
                  ${mobileDropdown === name
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0 pointer-events-none"
                    }
                `}
                >
                  {dropdown.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.link}
                        className="block px-6 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
