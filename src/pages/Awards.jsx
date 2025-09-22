// src/pages/Awards.js
import React from 'react';

const Awards = () => {
  const awardCategories = [
    {
      title: "Best Digital Marketing Campaign",
      description: "Outstanding airline marketing innovation and creativity",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
      )
    },
    {
      title: "Customer Experience Initiative",
      description: "Transformative passenger journey improvements",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "E-Commerce Excellence",
      description: "Revolutionary online commerce solutions and platforms",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: "AI Innovation in Aviation",
      description: "Groundbreaking artificial intelligence applications",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    }
  ];

  const benefits = [
    "Gain international recognition on global stage",
    "Extensive media coverage across aviation networks",
    "Network with industry elite at exclusive Gala",
    "Motivate teams and strengthen reputation"
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 mt-15">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Celebrating Excellence in Aviation Marketing</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            The IAMS Awards Gala is the industry's premier evening of recognition, honoring teams and innovations redefining passenger experience and driving commercial success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-100 transition shadow-lg">
              Nominate Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition">
              View All Categories
            </button> */}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Participate in IAMS Awards?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-900 mb-2">15+</div>
              <div className="text-gray-700">Award Categories</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-700">Industry Judges</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-900 mb-2">200+</div>
              <div className="text-gray-700">Expected Attendees</div>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-900 mb-2">25+</div>
              <div className="text-gray-700">Countries Represented</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-blue-900">Benefits of Participation</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-blue-900">Gala Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Date:</p>
                  <p className="text-gray-700">April 9, 2026</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Time:</p>
                  <p className="text-gray-700">7:00 PM onwards</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Venue:</p>
                  <p className="text-gray-700">Bharat Mandapam, New Delhi</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Dress Code:</p>
                  <p className="text-gray-700">Black Tie Optional</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg className="w-5 h-5 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Tickets:</p>
                  <p className="text-gray-700">Separate registration required</p>
                </div>
              </div>
            </div>
            <button className="w-full mt-8 bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
              Book Gala Tickets
            </button>
          </div>
        </div>
        
        {/* Award Categories Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Award Categories</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Recognizing excellence across all aspects of aviation marketing and customer experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awardCategories.map((award, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-900 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 text-blue-900">
                    {award.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">{award.title}</h3>
                </div>
                <p className="text-gray-700 pl-14">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-blue-900 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Submit Your Nominations</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Join the prestigious IAMS Awards 2026 and gain recognition for your innovative contributions to aviation marketing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-100 transition">
              Download Entry Kit
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition">
              Contact Awards Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;