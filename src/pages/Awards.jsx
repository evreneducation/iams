// src/pages/Awards.js
import React from "react";

const Awards = () => {
  const awardCategories = [
    {
      title: "Best Digital Marketing Campaign",
      description: "Outstanding airline marketing innovation and creativity",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
        </svg>
      )
    },
    {
      title: "Customer Experience Initiative",
      description: "Transformative passenger journey improvements",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "E-Commerce Excellence",
      description: "Revolutionary online commerce solutions and platforms",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      title: "AI Innovation in Aviation",
      description: "Groundbreaking artificial intelligence applications",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    }
  ];

  const benefits = [
    {
      text: "Gain international recognition on global stage",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      )
    },
    {
      text: "Extensive media coverage across aviation networks",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18"></path>
        </svg>
      )
    },
    {
      text: "Network with industry elite at exclusive Gala",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h.01M12 16h.01M8 12h.01M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      text: "Motivate teams and strengthen reputation",
      icon: (
        <svg className="w-8 h-8 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      )
    }
  ];

  const galaInfo = [
    { label: "Date", value: "April 9, 2026", icon: (
      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z"></path>
      </svg>
    ) },
    { label: "Time", value: "7:00 PM onwards", icon: (
      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3M12 2a10 10 0 1010 10A10 10 0 0012 2z"></path>
      </svg>
    ) },
    { label: "Venue", value: "Bharat Mandapam, New Delhi", icon: (
      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a5 5 0 00-10 0v2H5a2 2 0 00-2 2v9h18v-9a2 2 0 00-2-2h-2z"></path>
      </svg>
    ) },
    { label: "Dress Code", value: "Black Tie Optional", icon: (
      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422M12 14v7M12 14L5.84 10.578M5 20h14v2H5v-2z"></path>
      </svg>
    ) },
    { label: "Tickets", value: "Separate registration required", icon: (
      <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 14l2 2 4-4M5 12h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2z"></path>
      </svg>
    ) }
  ];

  const stats = [
    { value: "15+", label: "Award Categories" },
    { value: "50+", label: "Industry Judges" },
    { value: "200+", label: "Expected Attendees" },
    { value: "25+", label: "Countries Represented" }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 flex flex-col items-center justify-center relative">
        <div className="px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Celebrating Excellence in Aviation Marketing
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            The IAMS Awards Gala is the industry's premier evening of recognition, honoring teams and innovations redefining passenger experience and driving commercial success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-50 w-full">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900">
            Why Participate in IAMS Awards?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-3xl shadow-2xl p-10 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
                <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 mb-4">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-lg md:text-xl text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Gala */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Benefits */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">Benefits of Participation</h2>
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start p-5 rounded-2xl bg-white shadow-lg border-l-4 border-blue-700 transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <div className="bg-blue-100 p-4 rounded-full mr-5 flex items-center justify-center text-blue-900 text-2xl">
                {b.icon}
              </div>
              <p className="text-gray-700 text-lg">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Gala Info */}
        <div className="bg-white rounded-2xl shadow-xl p-10 space-y-6 border border-gray-100">
          <h2 className="text-4xl font-bold text-blue-900 text-center">Gala Information</h2>
          {galaInfo.map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-50 transition">
              <div className="bg-blue-100 p-3 rounded-full text-blue-900 flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className="text-gray-700">{item.value}</p>
              </div>
            </div>
          ))}
          <button className="w-full mt-6 bg-blue-900 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 hover:scale-105 transition transform shadow-lg">
            Book Gala Tickets
          </button>
        </div>
      </section>

      {/* Award Categories */}
      <section className="max-w-[1400px] mx-auto px-6 py-20 space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-900">Award Categories</h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-4">
            Recognizing excellence across all aspects of aviation marketing and customer experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {awardCategories.map((award, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-blue-700 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-900 flex items-center justify-center">
                  {award.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900">{award.title}</h3>
              </div>
              <p className="text-gray-700 pl-14">{award.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 py-20 text-white text-center rounded-3xl transform transition-transform duration-500 hover:scale-105 shadow-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Submit Your Nominations</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Join the prestigious IAMS Awards 2026 and gain recognition for your innovative contributions to aviation marketing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 px-6">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-100 hover:scale-105 transition transform shadow-lg">
            Download Entry Kit
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-blue-900 hover:scale-105 transition transform shadow-lg">
            Contact Awards Team
          </button>
        </div>
      </section>
    </div>
  );
};

export default Awards;
