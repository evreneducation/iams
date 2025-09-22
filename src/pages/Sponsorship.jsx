// src/pages/Sponsorship.js
import React from 'react';

const Sponsorship = () => {
  const packages = [
    {
      name: "Platinum",
      price: "$15,000",
      features: ["Exclusive keynote presentation", "Premium branding throughout venue", "10 VIP passes", "Full-page conference guide ad", "Dedicated social media promotion"],
      featured: true
    },
    {
      name: "Gold",
      price: "$10,000",
      features: ["Panel participation opportunity", "Prominent branding in main hall", "6 VIP passes", "Half-page conference guide ad", "Featured in post-event communications"]
    },
    {
      name: "Silver",
      price: "$7,500",
      features: ["Session branding recognition", "4 Standard passes", "Logo in conference guide", "Listing on event website", "Networking access"]
    },
    {
      name: "Exhibitor",
      price: "$5,000",
      features: ["Exhibition space (3m × 3m)", "Lead generation system access", "Mobile app inclusion", "2 Exhibitor passes", "Company profile in directory"]
    }
  ];

  const exhibitors = [
    "Airlines (Passenger & Cargo)",
    "Technology & System Providers",
    "Loyalty & Payment Solutions",
    "Holiday & Package Partners"
  ];

  const stats = [
    { value: "500+", label: "Industry Leaders" },
    { value: "80%", label: "C-Level Attendance" },
    { value: "30+", label: "Countries Represented" },
    { value: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Elevate Your Presence. Accelerate Your Growth</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Sponsoring or exhibiting at IAMS 2026 positions your brand as a leader in the global aviation ecosystem. 
            Connect with key decision-makers and unlock new business opportunities.
          </p>
          {/* <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-100 transition shadow-lg">
            Download Sponsorship Kit
          </button> */}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Sponsor IAMS 2026?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-900">Strategic Partnerships</h2>
            <p className="mb-6 text-gray-700">Connect with C-level executives from airline marketing, revenue, and loyalty divisions at the premier aviation marketing event.</p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Showcase Leadership</h3>
                  <p className="text-gray-700">Demonstrate cutting-edge solutions and lead conversations on digital transformation.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Market Intelligence</h3>
                  <p className="text-gray-700">Gain insights from sessions and panels to refine strategies and anticipate trends.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-900">Generate Qualified Leads</h3>
                  <p className="text-gray-700">Access highly targeted audience actively seeking new technologies and strategic partners.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">Who Should Exhibit</h2>
            <ul className="mb-8 space-y-3">
              {exhibitors.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Booth Packages</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Standard: 3m × 3m, 6m × 3m</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Custom-designed spaces available</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Speaking slots available for premium partners</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Digital visibility across all platforms</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Packages Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900">Sponsorship Packages</h2>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Choose the package that best fits your marketing objectives and budget
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col h-full transform transition-all duration-300 hover:scale-105 ${pkg.featured ? 'ring-2 ring-blue-500 ring-opacity-50 relative' : ''}`}
              >
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-blue-900 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-center text-blue-900">{pkg.name}</h3>
                <div className="text-3xl font-bold text-center mb-6 text-gray-800">{pkg.price}</div>
                <ul className="mb-8 space-y-4 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-900 mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded font-semibold transition ${pkg.featured ? 'bg-blue-900 text-white hover:bg-blue-800' : 'bg-gray-100 text-blue-900 hover:bg-gray-200'}`}>
                  Inquire Now
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-blue-900 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Join IAMS 2026?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Secure your sponsorship package today and position your brand at the forefront of aviation marketing innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-100 transition">
              Contact Us to Exhibit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition">
              Request Custom Package
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;