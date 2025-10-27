// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  <style>
  {`
    /* ✅ Tight layout for mid-width laptops (1025px–1150px) */
    @media (min-width: 1025px) and (max-width: 1150px) {
      header .container {
        padding-left: 0.75rem !important;
        padding-right: 0.75rem !important;
      }

      header .ml-4 { margin-left: 0.5rem !important; } /* Adjusted for smaller gap */

      header a[href="/"] span:first-child {
        font-size: 1.1rem !important;
      }

      header nav a {
        padding-left: 0.6rem !important;
        padding-right: 0.6rem !important;
        font-size: 0.93rem !important;
      }

      header nav { gap: 0.15rem !important; }

      header a[href="/registration"] {
        padding-left: 1rem !important;
        padding-right: 1rem !important;
        font-size: 0.92rem !important;
      }

      header .flex.justify-between { align-items: center !important; }
    }
  `}
</style>

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [location]);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/agenda", label: "Agenda" },
    { path: "/speakers", label: "Speakers" },
    { path: "/sponsorship", label: "Sponsor & Exhibit" },
    { path: "/awards", label: "Awards" },
    { path: "/venue-travel", label: "Venue & Travel" },
    { path: "/contact", label: "Contact" },
  ];

  return (
<header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    isScrolled
      ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100"
      : "bg-gradient-to-r from-[#1394A2] via-[#12909F] to-[#118C9A] py-4"
  }`}
  style={{ transform: "translateY(0)" }}
>
      <div className="container mx-auto ">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 md:space-x-3 group"
            onMouseEnter={() => setActiveHover("logo")}
            onMouseLeave={() => setActiveHover(null)}
          >
            <div className="relative">
  {/* Logo Container */}
  <div
  className={`relative transition-all duration-300 group-hover:scale-105 ${
    isScrolled ? "w-12 h-12" : "w-16 h-16"
  }`}
>
  {/* Outer glow / gradient layer */}
  <div
    className={`absolute inset-0 rounded-full flex items-center justify-center 
      transition-all duration-300 overflow-hidden ${
        isScrolled
          ? "bg-gradient-to-br from-[#003366] to-[#0080ff] border border-[#000000]/30"
          : "bg-white/10 border border-white"
      } group-hover:border-[#21d6e0]/50 group-hover:shadow-lg`}
  >
    {/* Make logo fill better */}
    <img
      src="/logo/main1.png"
      alt="IAMS Logo"
      className="w-[95%] h-[95%] object-contain transition-all duration-300"
    />
  </div>

  {/* Hover glow effect */}
  <div
    className="absolute -inset-1 bg-gradient-to-r from-[#21d6e0] to-[#0080ff] rounded-full blur-sm 
      opacity-0 group-hover:opacity-30 transition-all duration-500"
  ></div>
</div>
</div>


            {/* Logo Text with reduced gap */}
            <div className="flex flex-col ml-1">
             <span
  className={`font-bold transition-all duration-300 whitespace-nowrap ${
    isScrolled ? "text-[#003366] text-xl" : "text-white text-2xl"
  } group-hover:bg-gradient-to-r group-hover:from-[#21d6e0] group-hover:to-[#0080ff] group-hover:bg-clip-text group-hover:text-transparent` }
>
  IAMS&nbsp;2026
</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-5 py-3 font-medium transition-all duration-300 group
                  ${
                    isScrolled
                      ? isActive(item.path)
                        ? "text-[#003366] font-semibold bg-blue-50/80"
                        : "text-gray-600 hover:text-[#003366] hover:bg-blue-50/40"
                      : isActive(item.path)
                      ? "text-white font-semibold bg-white/20"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  } rounded-lg`}
              >
                <span className="relative z-10 transition-all duration-300 group-hover:translate-y-[-1px] whitespace-nowrap">
                  {item.label}
                </span>

                <div
                  className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 
                    bg-gradient-to-r from-[#21d6e0] to-[#0080ff] transition-all duration-300 ${
                      isActive(item.path)
                        ? "w-12 opacity-100"
                        : "w-0 opacity-0 group-hover:w-12 group-hover:opacity-80"
                    } rounded-full`}
                ></div>

                <div className="absolute inset-0 overflow-hidden rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#21d6e0]/10 to-[#0080ff]/10 blur-sm"></div>
                </div>
              </Link>
            ))}

            {/* Register Now Button */}
            <Link
              to="/registration"
              className="ml-4 px-6 py-3 rounded-lg font-semibold transition-all duration-300 
                transform hover:scale-105 hover:shadow-xl relative overflow-hidden group"
            >
              <div
                className={`absolute inset-0 transition-all duration-500 ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#003366] via-[#0080ff] to-[#21d6e0]"
                    : "bg-gradient-to-r from-white to-[#21d6e0]"
                } group-hover:from-[#0080ff] group-hover:via-[#21d6e0] group-hover:to-[#003366]`}
              ></div>

              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div
                  className="absolute -inset-10 bg-gradient-to-r from-transparent via-white/40 to-transparent 
                    transform rotate-12 transition-all duration-1000 group-hover:translate-x-20"
                ></div>
              </div>

              <span className={`relative z-10 flex items-center space-x-2 transition-all duration-300 ${
                isScrolled ? "text-white" : "text-[#003366]"
              } font-semibold`}>
                <span className="whitespace-nowrap">REGISTER&nbsp;NOW</span>
              </span>

              <div className="absolute -inset-1 bg-[#21d6e0] rounded-lg blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-3 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-[#003366] hover:bg-blue-50/50"
                : "text-white hover:bg-white/10"
            } group`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300
                  ${isMenuOpen ? "top-1/2 transform -rotate-45" : "top-1/4"}`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300
                  ${isMenuOpen ? "opacity-0" : "top-1/2"}`}
              ></span>
              <span
                className={`absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300
                  ${isMenuOpen ? "top-1/2 transform rotate-45" : "top-3/4"}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2
                  ${
                    isScrolled
                      ? isActive(item.path)
                        ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-[#003366] font-semibold border-l-4 border-[#21d6e0]"
                        : "text-gray-600 hover:bg-blue-50/50 hover:text-[#003366]"
                      : isActive(item.path)
                      ? "bg-white/20 text-white font-semibold border-l-4 border-[#21d6e0]"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  } backdrop-blur-sm`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/registration"
              className={`block py-3 px-4 rounded-lg font-semibold text-center mt-4 transition-all duration-300
                transform hover:scale-105 relative overflow-hidden group ${
                  isScrolled
                    ? "bg-gradient-to-r from-[#003366] to-[#0080ff] text-white"
                    : "bg-white text-[#003366]"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full"></div>
              <span className="relative z-10">REGISTER NOW</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
