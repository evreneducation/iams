// src/pages/Registration.js
import React from 'react';

const Registration = () => {
  const passes = [
    {
      name: "Early Bird Pass",
      price: "USD $695",
      validity: "Until 30 November 2025",
      savings: "Save $155 with early registration",
      features: ["Full conference access", "Exhibition entry", "Networking meals", "Mobile app access", "Networking reception invitation"]
    },
    {
      name: "Standard Pass",
      price: "USD $850",
      validity: "From 1 December 2025",
      savings: null,
      features: ["Full conference access", "Exhibition entry", "Networking meals", "Mobile app access", "Networking reception invitation"]
    },
    {
      name: "Group Discount",
      price: "Buy 2, Get 3rd FREE!",
      validity: null,
      savings: "Perfect for team attendance",
      features: ["All standard pass benefits", "Special group networking", "Team photo opportunity"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">Secure Your Place at IAMS 2026</h1>
      <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
        Join hundreds of industry leaders for two days of unparalleled learning and networking at India's premier convention center in the heart of New Delhi.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {passes.map((pass, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">{pass.name}</h3>
            <div className="text-3xl font-bold mb-2">{pass.price}</div>
            {pass.validity && <p className="text-gray-600 mb-4">{pass.validity}</p>}
            {pass.savings && <p className="text-green-600 font-semibold mb-6">{pass.savings}</p>}
            
            <ul className="space-y-3 mb-8">
              {pass.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-blue-900 text-white py-3 rounded font-semibold hover:bg-blue-800 transition">
              Register Now
            </button>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold text-center mb-6">Important Information</h2>
        <ul className="list-disc pl-5 space-y-3 max-w-2xl mx-auto">
          <li>All passes include full conference access, exhibition entry, networking meals, mobile app access, and networking reception invitation.</li>
          <li>Awards Gala requires separate ticket purchase.</li>
          <li>Group discounts apply for 3 or more attendees from the same organization.</li>
          <li>Cancellation policy: Full refund until January 31, 2026; 50% refund until February 28, 2026; no refund after March 1, 2026.</li>
        </ul>
      </div>
      
      <div className="text-center">
        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-800 transition mr-4">
          Register Now
        </button>
        <button className="bg-white text-blue-900 border border-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-50 transition">
          Contact for Group Booking
        </button>
      </div>
    </div>
  );
};

export default Registration;