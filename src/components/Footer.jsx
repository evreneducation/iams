// src/components/Footer.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const openLocation = () => {
    window.open("https://maps.app.goo.gl/DvSeC96TBuffbbHb8", "_blank");
  };

  const handleEmailSignup = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    alert("Thank you for subscribing to updates!");
    setEmail("");
  };

  const openSocialMedia = (platform) => {
    const urls = {
      linkedin: "https://linkedin.com/company/iams2026",
      twitter: "https://twitter.com/iams2026",
    };
    window.open(urls[platform], "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Information & Quick Links */}
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center overflow-hidden mr-3">
                <img
                  src="/logo/hl.png"
                  alt="IAMS Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold">IAMS 2026</h3>
            </div>

            <p className="text-gray-300 mb-6 max-w-md">
              The premier international conference for aviation marketing and
              technology, bringing together industry leaders and innovators.
            </p>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2">
                 
                    <li>
                    <Link
                      to="/contact"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/agenda"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Agenda
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/speakers"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Speakers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/awards"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Awards
                    </Link>
                  </li>
                   <li>
                    <Link
                      to="/sponsorship"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Sponsorship
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/registration"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Registration
                    </Link>
                  </li>
                </ul>
                <ul className="space-y-2">
                 
                  <li>
                    <Link
                      to="/venue-travel"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Venue
                    </Link>
                  </li>
                 <li>
                    <Link
                      to="/overview"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Event Overview
                    </Link>
                  </li>
                  {/* Added Privacy & Terms here */}
                  <li>
                    <Link
                      to="/privacy"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      to="/terms"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faqs"
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                     FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Information
            </h4>
            <div className="space-y-4">
              <div
                className="flex items-center text-gray-300 hover:text-blue-400 cursor-pointer transition-colors"
                onClick={() => handleEmailClick("info@iams2026.com")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>info@iams2026.com</span>
              </div>

              <div
                className="flex items-center text-gray-300 hover:text-blue-400 cursor-pointer transition-colors"
                onClick={() => handleEmailClick("exhibitors@iams2026.com")}
              >
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span>exhibitors@iams2026.com</span>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center text-gray-300 mb-2">
                  <svg
                    className="w-5 h-5 mr-3 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>April 9-10, 2026</span>
                </div>

                <div
                  className="flex items-center text-gray-300 hover:text-white cursor-pointer transition-colors"
                  onClick={openLocation}
                >
                  <svg
                    className="w-5 h-5 mr-3 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Holiday Inn Aero City, Delhi, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Email Signup Form */}
          <div className="lg:col-span-4">
            <h4 className="text-lg font-semibold mb-4 text-white">
              Register for Updates
            </h4>
            <p className="text-gray-300 mb-4 text-sm">
              Stay informed about the latest news, speakers, and agenda updates.
            </p>

            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-r-none focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg sm:rounded-l-none font-semibold transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-white">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                <button
                  onClick={() => openSocialMedia("linkedin")}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
                <button
                  onClick={() => openSocialMedia("twitter")}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section (cleaned up) */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 International Aviation Marketing Summit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
