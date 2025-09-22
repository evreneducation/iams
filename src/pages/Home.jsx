// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Hero Section with Background Image */}
      <section className="relative text-white py-20 overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/landingpage/image.jpeg')" }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-blue-900/70"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight mt-8">
              International Aviation Marketing Summit 2026
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
              The premier international conference for aviation marketing and technology, bringing together global leaders to shape the future of flight.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/registration" 
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Register Now
              </Link>
              <Link 
                to="/agenda" 
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Agenda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* At a Glance Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">At a Glance: Key Numbers</h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Discover the scale and impact of the premier aviation marketing event
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl font-bold text-blue-900 mb-3">2</div>
              <div className="text-xl font-semibold mb-2">Days</div>
              <p className="text-gray-600">Intensive Learning & Networking</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl font-bold text-blue-900 mb-3">30+</div>
              <div className="text-xl font-semibold mb-2">Speakers</div>
              <p className="text-gray-600">Visionary Industry Leaders</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl font-bold text-blue-900 mb-3">300+</div>
              <div className="text-xl font-semibold mb-2">Attendees</div>
              <p className="text-gray-600">Industry Leaders & Decision-Makers</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl font-bold text-blue-900 mb-3">25+</div>
              <div className="text-xl font-semibold mb-2">Awards</div>
              <p className="text-gray-600">Categories Celebrating Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-6">
              <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Propelled by Strategy, Fueled by Intelligence</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The International Aviation Marketing Summit 2026 is the definitive platform dedicated to aviation marketing, e-commerce, loyalty, and technology—a niche underserved by existing industry conferences.
            </p>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <p className="text-lg text-blue-800 font-medium italic">
                "Our mission is to unite the complete ecosystem driving growth, innovation, and sustained profitability across airline commercial divisions and beyond."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Future of Aviation</h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 opacity-90">
            Be part of the conversation that's shaping the next generation of aviation marketing
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Register</h3>
              <p className="mb-6 opacity-90">Secure your spot at the premier aviation marketing summit</p>
              <Link 
                to="/registration" 
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Register Now
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Exhibit</h3>
              <p className="mb-6 opacity-90">Showcase your innovations to global aviation leaders</p>
              <Link 
                to="/sponsorship" 
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Exhibit With Us
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-5">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Nominate</h3>
              <p className="mb-6 opacity-90">Apply for prestigious aviation marketing awards</p>
              <Link 
                to="/awards" 
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                View Awards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-blue-900">Why Aviation Leaders Choose IAMS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 极 3 0 016 0zm6 极a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Exclusive Networking</h3>
                  <p className="text-gray-600">Connect with top executives and decision-makers from leading aviation companies</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill极="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 极 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cutting-Edge Insights</h3>
                  <p className="text-gray-600">Gain access to the latest trends and innovations in aviation marketing</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 极0V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semib极 mb-2">Strategic Partnerships</h3>
                  <p className="text-gray-600">Forge valuable partnerships that drive business growth and innovation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interactive Sessions</h3>
                  <p className="text-gray-600">Engage in hands-on workshops and dynamic panel discussions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;