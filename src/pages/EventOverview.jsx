// src/pages/EventOverview.js
import React from "react";

const EventOverview = () => {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-teal-50 min-h-screen">
      {/* Full-width Gradient Hero Heading */}
      <section className="w-full bg-gradient-to-r from-teal-900 to-teal-700 text-white py-30 mt-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Event Overview</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the key highlights, sessions, and speakers shaping the
            future of aviation at our summit.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Event Highlights Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-teal-700"
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
              </div>
              <h2 className="text-xl font-semibold text-teal-900">
                Dates & Location
              </h2>
            </div>
            <p className="text-lg text-gray-700">
              April 9-10, 2026 at Bharat Mandapam, New Delhi, India
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-teal-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-teal-900">
                Strategic Focus
              </h2>
            </div>
            <p className="text-lg text-gray-700">
              Marketing, e-commerce, loyalty, and customer experience in
              aviation
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="bg-teal-100 p-3 rounded-full mr-4">
                <svg
                  className="w-6 h-6 text-teal-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-teal-900">
                Global Platform
              </h2>
            </div>
            <p className="text-lg text-gray-700">
              Bridging Asia, Middle East, and global markets for strategic
              partnerships
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="md:flex">
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex items-center mb-6">
                <div className="bg-teal-600 p-3 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <h2 className="text-2xl font-semibold text-teal-900">
                  About IAMS 2026
                </h2>
              </div>

              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                IAMS 2026 combines high-profile keynotes, exclusive awards gala,
                and dynamic exhibition hub. Airlines, airports, technology
                leaders, and system providers engage in strategic discussions,
                forge partnerships, and explore cutting-edge solutions driving
                aviation's future.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-5 bg-teal-50 rounded-xl transition-all duration-300 hover:bg-teal-100">
                  <div className="bg-teal-200 p-3 rounded-full inline-flex mb-3">
                    <svg
                      className="w-6 h-6 text-teal-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-teal-900">
                    High-Value Networking
                  </h3>
                  <p className="text-sm text-gray-600">
                    Curated B2B meetings between airlines, airports, and
                    technology partners
                  </p>
                </div>

                <div className="text-center p-5 bg-teal-50 rounded-xl transition-all duration-300 hover:bg-teal-100">
                  <div className="bg-teal-200 p-3 rounded-full inline-flex mb-3">
                    <svg
                      className="w-6 h-6 text-teal-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-teal-900">
                    Comprehensive Agenda
                  </h3>
                  <p className="text-sm text-gray-600">
                    AI/ML, sustainability, NDC, merchandising, and next-gen
                    passenger journeys
                  </p>
                </div>

                <div className="text-center p-5 bg-teal-50 rounded-xl transition-all duration-300 hover:bg-teal-100">
                  <div className="bg-teal-200 p-3 rounded-full inline-flex mb-3">
                    <svg
                      className="w-6 h-6 text-teal-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-teal-900">
                    Industry Partnerships
                  </h3>
                  <p className="text-sm text-gray-600">
                    Strong potential for partnerships with IATA, ACI, and global
                    aviation media
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 bg-gradient-to-b from-teal-600 to-teal-800 p-8 flex flex-col justify-center">
              <div className="text-white text-center">
                <h3 className="text-xl font-bold mb-4">Why Attend?</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-200 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Connect with 200+ aviation leaders</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-200 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Discover innovative solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-200 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Shape the future of aviation commerce</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-5 h-5 text-teal-200 mr-2 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Gain competitive insights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* The IAMS Difference Section */}
        <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 text-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-10 md:p-16">
            <div className="text-center mb-12">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-6">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">The IAMS Difference</h2>
              <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                The only major summit centered on marketing, e-commerce,
                loyalty, and customer experience in aviation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-5 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
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
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Strategic Location
                    </h3>
                    <p className="text-teal-100 leading-relaxed">
                      Hosted in New Delhi, a burgeoning aviation hub connecting
                      Asia, Middle East, and global markets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-5 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      High-Value Networking
                    </h3>
                    <p className="text-teal-100 leading-relaxed">
                      Curated B2B meetings connecting airlines, airports, and
                      technology partners for guaranteed ROI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-5 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Industry Insights
                    </h3>
                    <p className="text-teal-100 leading-relaxed">
                      Access to cutting-edge research, trends, and data-driven
                      strategies from aviation experts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/15">
                <div className="flex items-start">
                  <div className="bg-white/20 p-3 rounded-full mr-5 flex-shrink-0">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Customized Experience
                    </h3>
                    <p className="text-teal-100 leading-relaxed">
                      Tailored agenda and meetings based on your specific
                      interests and business objectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-white/20">
              <p className="text-lg italic max-w-4xl mx-auto leading-relaxed">
                The definitive international platform uniting the complete
                ecosystem that drives growth, innovation, and sustained
                profitability across airline commercial divisions. This is your
                runway to transformation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventOverview;