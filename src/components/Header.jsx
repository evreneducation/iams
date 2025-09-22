// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" // Increased padding when scrolled
          : "bg-gradient-to-r from-blue-900 to-blue-700 py-6" // Increased padding for taller header
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group"> {/* Increased space between logo and text */}
            <div className="relative">
              {/* Logo Circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
                  isScrolled ? "bg-blue-600" : "bg-white"
                }`}
              >
                {/* Replace SVG with your logo */}
                <img
                  src="/logo/hl.png"
                  alt="IAMS Logo"
                  className="w-10 h-10 object-contain transition-all duration-300" // Increased logo size
                />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 bg-blue-400/30 rounded-full blur-sm group-hover:bg-blue-400/50 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>

            {/* Logo Text */}
            <span
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-blue-900" : "text-white"
              }`}
            >
              IAMS 2026
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 relative group ${
                isScrolled
                  ? isActive("/")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/50"
                  : isActive("/")
                  ? "text-white bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Home
              <span
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-blue-400 transition-all duration-300 ${
                  isActive("/")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </Link>

            <Link
              to="/overview"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 relative group ${
                isScrolled
                  ? isActive("/overview")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/50"
                  : isActive("/overview")
                  ? "text-white bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Overview
              <span
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-blue-400 transition-all duration-300 ${
                  isActive("/overview")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </Link>

            <Link
              to="/assembly"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 relative group ${
                isScrolled
                  ? isActive("/assembly")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/50"
                  : isActive("/assembly")
                  ? "text-white bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Assembly
              <span
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-blue-400 transition-all duration-300 ${
                  isActive("/assembly")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </Link>

            <Link
              to="/agenda"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 relative group ${
                isScrolled
                  ? isActive("/agenda")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/50"
                  : isActive("/agenda")
                  ? "text-white bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Agenda
              <span
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-blue-400 transition-all duration-300 ${
                  isActive("/agenda")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </Link>

            <Link
              to="/sponsorship"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 relative group ${
                isScrolled
                  ? isActive("/sponsorship")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/50"
                  : isActive("/sponsorship")
                  ? "text-white bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Sponsorship
              <span
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-blue-400 transition-all duration-300 ${
                  isActive("/sponsorship")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </Link>

            <Link
              to="/awards"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 relative group ${
                isScrolled
                  ? isActive("/awards")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/50"
                  : isActive("/awards")
                  ? "text-white bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Awards
              <span
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-blue-400 transition-all duration-300 ${
                  isActive("/awards")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </Link>

            <Link
              to="/speakers"
              className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 relative group ${
                isScrolled
                  ? isActive("/speakers")
                    ? "text-blue-700 bg-blue-50"
                    : "text-gray-700 hover:text-blue-700 hover:bg-blue-50/50"
                  : isActive("/speakers")
                  ? "text-white bg-white/20"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Speakers
              <span
                className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 w-6 bg-blue-400 transition-all duration-300 ${
                  isActive("/speakers")
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </Link>

            <Link
              to="/registration"
              className={`ml-2 px-5 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                  : "bg-white text-blue-700 hover:bg-blue-50 shadow-md hover:shadow-lg"
              }`}
            >
              Register Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden focus:outline-none p-3 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-blue-900 hover:bg-blue-50"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {!isMenuOpen ? (
              <svg
                className="w-7 h-7" // Increased mobile menu icon size
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-7 h-7" // Increased mobile menu icon size
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="pb-4 space-y-2">
            <Link
              to="/"
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isActive("/")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-blue-50"
                  : isActive("/")
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/90 hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/overview"
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isActive("/overview")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-blue-50"
                  : isActive("/overview")
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/90 hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </Link>

            <Link
              to="/assembly"
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isActive("/assembly")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-blue-50"
                  : isActive("/assembly")
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/90 hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Assembly
            </Link>

            <Link
              to="/agenda"
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isActive("/agenda")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-blue-50"
                  : isActive("/agenda")
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/90 hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda
            </Link>

            <Link
              to="/sponsorship"
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isActive("/sponsorship")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-blue-50"
                  : isActive("/sponsorship")
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/90 hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sponsorship
            </Link>

            <Link
              to="/awards"
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isActive("/awards")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-blue-50"
                  : isActive("/awards")
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/90 hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Awards
            </Link>

            <Link
              to="/speakers"
              className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? isActive("/speakers")
                    ? "bg-blue-100 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-blue-50"
                  : isActive("/speakers")
                  ? "bg-white/20 text-white font-medium"
                  : "text-white/90 hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Speakers
            </Link>

            <Link
              to="/registration"
              className={`block py-3 px-4 rounded-lg font-semibold text-center mt-2 transition-all duration-300 ${
                isScrolled
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-white text-blue-700 hover:bg-blue-50"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Register Now
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;