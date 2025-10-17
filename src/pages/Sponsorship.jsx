// src/pages/Sponsorship.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import sponsorbanner from "../../public/sponsor/sponsor.jpg";

import exibhit from "../../public/assembly/exibitorimage.png";
const Sponsorship = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // animation happens only once
    });
  }, []);

  const packages = [
    {
      name: "Platinum Sponsor",
      features: [
        "Exclusive Keynote Présentation (30 min)",
        "Exclusive Pre-Event Email Blast",
        "Full Opt-In Delegate List (Post-Event)",
        "Exclusive Gala Dinner Sponsor",
        "Premium, Double-Sized Stand",
        "4 Airlines Full-Access Passes (Includes Gala)",
        "P.O.A. (Price on Application)",
      ],
      featured: true,
    },
    {
      name: "Gold Sponsor",
      features: [
        "Featured Panel Position (45 min)",
        "Prominent Logo on event website and all printed material.",
        "Filtered Opt-In Delegate List (Post-Event)",
        "Host/Sponsor of a Networking Break",
        "Standard Exhibition Stand",
        "2 Airlines Full-Access Passes (Includes Gala)",
        "P.O.A",
      ],
    },
    {
      name: "Silver Sponsor",
      features: [
        "Session Speaker Slot (15 min)",
        "Logo on event website and select printed material.",
        "Featured Session Branding",
        "Shared Display Area Option",
        "1 Airlines Full-Access Pass (Includes Gala)",
        "P.O.A.",
      ],
    },
  ];

  const exhibitors = [
    "Airlines & Airline Support Services",
    "Airport Management Companies",
    "System Providers (PSS, NDC, GDS, CRM, RO, AI/ML, IoT)",
    "Loyalty, Awards & Payment Solution Developrs",
    "In-flight & On-ground Experience Providers",
    "Hotels, Car Rentals, Insurance, Credit Cards & FinTech Suppliers",
  ];

  const stats = [
    {
      value: "Forge Strategic Partnerships",
      label:
        "Connect with top decision makers from airline marketing, revenue, loyalty and more.",
    },
    {
      value: "Showcase Industry Leadership",
      label: "Demonstrate your cutting-edge solutions on a global stage.",
    },
    {
      value: "Generate Qualified Leads",
      label:
        "Access a highly targeted audience actively seeking new technologies and partners.",
    },
    {
      value: "Gain Actionable Intelligence",
      label:
        "Immerse your team in sessions that reveal upcoming trends and market opportunities.",
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      {/* <section className="text-white py-12 mt-16" style={{ backgroundColor: "rgb(21, 164, 179)" }}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Elevate Your Presence. Accelerate Your Growth</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Position your brand at the center of the aviation commerce ecosystem. Engage directly with key decision-makers,
            showcase your innovation, and unlock new business in a market poised for rapid transformation.
          </p>
        </div>
      </section> */}

      <section
        data-aos="fade-down"
        className="relative mt-[80px] overflow-hidden bg-cover bg-center bg-no-repeat h-[380px] md:h-[480px]"
        style={{
          backgroundImage: `url(${sponsorbanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* very light overlay for subtle depth */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* center content vertically and horizontally */}
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            {/* ultra-subtle glass blur behind text */}
            <div className="bg-white/1 backdrop-blur-[2px] rounded-3xl px-6 py-8 inline-block md:px-10 md:py-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-sm">
                Become a Sponsor
              </h1>
              <p className="text-xl max-w-3xl mx-auto mb-8 text-white">
                Position your brand at the center of the aviation commerce
                ecosystem. Engage directly with key decision-makers, showcase
                your innovation, and unlock new business in a market poised for
                rapid transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-50" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 text-center py-[20px]"
            style={{ color: "rgb(21, 164, 179)" }}
          >
            Why Sponsor or Exhibit at IAMS 2026?
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div
                  className="text-2xl md:text-2xl font-extrabold mb-2"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(21, 164, 179), rgb(15, 130, 142))",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-700 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column */}
            <div data-aos="fade-right">
              <h2
                className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 text-center py-[20px]"
                style={{ color: "rgb(21, 164, 179)" }}
              >
                Strategic Partnerships
              </h2>

              <p className="mb-8 text-gray-700 text-lg md:text-xl">
                Connect with top decision-makers from airline e-commerce,
                marketing, revenue management, distribution, loyalty, alliances
                and customer service.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Showcase Industry Leadership",
                    desc: "Demonstrate your cutting-edge solutions to your targeted customers.",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        style={{ color: "rgb(21, 164, 179)" }}
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
                    ),
                  },
                  {
                    title: "Gain Actionable Intelligence",
                    desc: "Immerse your team in sessions that reveal upcoming trends and market opportunities.",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        style={{ color: "rgb(21, 164, 179)" }}
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
                    ),
                  },
                  {
                    title: "Generate Qualified Leads",
                    desc: "Access a highly targeted audience actively seeking new technologies and strategic partners.",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        style={{ color: "rgb(21, 164, 179)" }}
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
                    ),
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white border-l-4 shadow-md hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                    style={{ borderColor: "rgb(21, 164, 179)" }}
                  >
                    <div
                      className="p-3 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(21,164,179,0.1)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="text-xl font-semibold mb-2"
                        style={{ color: "rgb(21, 164, 179)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
              data-aos="fade-left"
            >
              <h2
                className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 text-center py-[20px]"
                style={{ color: "rgb(21, 164, 179)" }}
              >
                Who Should Exhibit?
              </h2>
              <ul className="mb-8 space-y-3">
                {exhibitors.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: "rgb(21, 164, 179)" }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <section className="max-w-6xl mx-auto px-6 py-16 mb-[70px]">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#0E7785] to-[#15A4B3]">
            Exhibitor Opportunities
          </h2>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Image */}
            <div data-aos="fade-right" className="flex justify-center">
              <img
                src={exibhit} // 🔁 Replace with your image
                alt="Exhibition Booth"
                className="rounded-3xl w-full h-auto object-cover shadow-lg"
              />
            </div>

            {/* Right: Opportunities List */}
            <div data-aos="fade-left" className="space-y-5">
              {[
                "Showcase your solutions in our dynamic exhibition hub.",
                "Booth Packages: Standard (3x3m) & Premium (6x3m)",
                "Custom-designed spaces available",
                "Inclusion in the Exhibitor Directory",
                "Dedicated networking time",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 rounded-3xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-[#15A4B3] to-[#0E7785]"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#0E7785]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <p className="text-white font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <div className="mb-16" data-aos="zoom-in">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 text-center py-[20px]"
            style={{ color: "rgb(21, 164, 179)" }}
          >
            Sponsorship Packages
          </h2>

          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Choose the package that best fits your marketing objectives and
            budget
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col h-full transform transition-all duration-300 hover:scale-105 ${
                  pkg.featured ? "ring-2 ring-opacity-50 relative" : ""
                }`}
                style={
                  pkg.featured
                    ? { boxShadow: "0 0 0 2px rgba(21,164,179,0.5)" }
                    : {}
                }
              >
                {pkg.featured && (
                  <div
                    className="absolute top-0 right-0 text-white px-4 py-1 text-sm font-bold rounded-bl-lg"
                    style={{ backgroundColor: "rgb(21, 164, 179)" }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <h3
                  className="text-2xl font-bold mb-2 text-center"
                  style={{ color: "rgb(21, 164, 179)" }}
                >
                  {pkg.name}
                </h3>

                <ul className="mb-8 space-y-4 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0"
                        style={{ color: "rgb(21, 164, 179)" }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* <button
                  className="w-full py-3 rounded font-semibold transition"
                  style={{
                    backgroundColor: pkg.featured ? "rgb(21, 164, 179)" : "rgb(240,240,240)",
                    color: pkg.featured ? "#fff" : "rgb(21, 164, 179)"
                  }}
                >
                  Inquire Now
                </button> */}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center rounded-xl p-12 text-white"
          style={{ backgroundColor: "rgb(21, 164, 179)" }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Join IAMS 2026?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Secure your place at IAMS 2026 — as a sponsor, exhibitor, or
            strategic partner — and position your brand at the forefront of
            aviation’s next era of commercial innovation. Contact us to
            collaborate.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/registration"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#0080ff] hover:to-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Partner With Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsorship;
