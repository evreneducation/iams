// src/pages/Assembly.js
import React from 'react';

const Assembly = () => {
  const roles = [
    {
      title: "Commercial Visionaries",
      description: "C-level executives from leading airlines redefining passenger experience and unlocking growth frontiers",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      image: "/assembly/cv.webp"
    },
    {
      title: "Customer & Loyalty Executives",
      description: "Heads of loyalty focused on building unbreakable brand relationships and seamless passenger experiences",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>
      ),
      image: "/assembly/cle.webp"
    },
    {
      title: "Revenue Strategies",
      description: "Leaders in revenue optimization, e-commerce, and digital marketing seeking profitability solutions",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      image: "/assembly/rs.webp"
    },
    {
      title: "IT & Infrastructure Chiefs",
      description: "IT professionals implementing cutting-edge technologies to modernize airline operations",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
        </svg>
      ),
      image: "/assembly/itandci.webp"
    },
    {
      title: "Technological Pioneers",
      description: "Minds behind disruptive innovations in AI, sustainable propulsion, and data security",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      image: "/assembly/tp.webp"
    },
    {
      title: "Influential Regulators",
      description: "Policymakers guiding industry evolution, ensuring secure, efficient global framework",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      ),
      image: "/assembly/ir.webp"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with same gradient as Sponsorship page */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">An Assembly of Architects</h1>
          <p className="text-xl max-w-3xl mx-auto">
            IAMS 2026 is a carefully curated assembly of individuals shaping the very fabric of modern aviation.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Image Grid Section */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {roles.map((role, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className="h-64 bg-blue-100 relative">
                  <img 
                    src={role.image} 
                    alt={role.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback in case image fails to load
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback if image fails to load */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center hidden">
                    <span className="text-white font-medium text-center px-4">{role.title}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">{role.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Roles Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Key Attendee Roles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <div className="text-blue-700">
                      {role.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">{role.title}</h3>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom Section with Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">IAMS 2026 By The Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-lg">Industry Leaders</div>
              <p className="text-sm opacity-80 mt-2">Attending IAMS 2026</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40%</div>
              <div className="text-lg">C-Level Executives</div>
              <p className="text-sm opacity-80 mt-2">From top aviation companies</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Countries</div>
              <p className="text-sm opacity-80 mt-2">Represented at the summit</p>
            </div>
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-white border-opacity-20">
            <p className="text-lg">
              Join the most influential gathering of aviation professionals shaping the future of flight.
            </p>
            <button className="mt-6 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assembly;