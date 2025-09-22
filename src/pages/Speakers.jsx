// src/pages/Speakers.js
import React from 'react';

const Speakers = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-26 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Visionary Speakers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from the industry's most innovative minds as they share insights on the future of aviation marketing, technology, and customer experience.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-10 mb-16 text-center border border-blue-100">
          <h2 className="text-3xl font-semibold mb-6 text-blue-900">Call for Speakers</h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700">
            We're seeking visionary leaders to share groundbreaking insights at IAMS 2026. If you're redefining aviation marketing, technology, or customer experience, we want to hear from you.
          </p>
          <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition transform hover:-translate-y-1">
            Apply to Speak
          </button>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-12 text-blue-900">Speaker Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-700 text-center hover:shadow-lg transition">
              <div className="text-5xl font-bold text-blue-900 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-4">Global Platform</h3>
              <p className="text-gray-700">Share your expertise with international aviation leaders and media</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-700 text-center hover:shadow-lg transition">
              <div className="text-5xl font-bold text-blue-900 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-4">Networking Access</h3>
              <p className="text-gray-700">Connect with C-level executives and industry innovators</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-blue-700 text-center hover:shadow-lg transition">
              <div className="text-5xl font-bold text-blue-900 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-4">Complimentary Pass</h3>
              <p className="text-gray-700">Full access to all summit sessions and networking events</p>
            </div>
          </div>
        </div>

        {/* Deadline Section */}
        <div className="bg-blue-900 text-white rounded-xl p-10 text-center">
          <h2 className="text-3xl font-semibold mb-6">Speaker Application Deadline</h2>
          <p className="text-2xl mb-8 font-light">Submit your proposal by October 31, 2025</p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition">
            Submit Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
