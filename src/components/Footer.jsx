// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Function to handle email click
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  // Function to open location in Google Maps
  const openLocation = () => {
    window.open('https://www.google.com/maps/place/Bharat+Mandapam/@28.6172416,77.2395733,17z/data=!3m1!4b1!4m6!3m5!1s0x390ceffcb5a2126b:0x6f4cd2c3c37b355f!8m2!3d28.6172369!4d77.2421482!16s%2Fg%2F11v0v4x5_1?entry=ttu', '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Information */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
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
              The premier international conference for aviation marketing and technology, bringing together industry leaders and innovators.
            </p>
            
            {/* Event Details */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                <span>April 9-10, 2026</span>
              </div>
              
              <div 
                className="flex items-center text-gray-300 hover:text-white cursor-pointer transition-colors"
                onClick={openLocation}
              >
                <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Bharat Mandapam, New Delhi, India</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/overview" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Event Overview
                </Link>
              </li>
              <li>
                <Link to="/agenda" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Agenda
                </Link>
              </li>
              <li>
                <Link to="/sponsorship" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link to="/awards" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Awards
                </Link>
              </li>
              <li>
                <Link to="/registration" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Registration
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <div className="space-y-3">
              <div 
                className="flex items-center text-gray-300 hover:text-blue-400 cursor-pointer transition-colors"
                onClick={() => handleEmailClick('info@IAMS2026.com')}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>info@iams2026com</span>
              </div>
              
              <div 
                className="flex items-center text-gray-300 hover:text-blue-400 cursor-pointer transition-colors"
                onClick={() => handleEmailClick('exhibitors@IAMS2026.com')}
              >
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <span>exhibitors@iams2026.com</span>
              </div>
            </div>

            {/* Special Offers */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3 text-white">Registration Offers</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Buy 1 Get 2nd at 50% Off</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span>Buy 2 Get 3rd Free</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>Early Bird until Nov 30, 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 International Aviation Marketing Summit. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;