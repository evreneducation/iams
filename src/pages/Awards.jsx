// src/pages/Awards.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import awards from "../../public/awards/awardss.jpg";
import galadinner from "../../public/awards/galadinner.jpg";

const Awards = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // animation happens only once
    });
  }, []);

  const categories = [
    {
      title: "Airline Marketing & Brand Leadership",
      items: [
        "Best Airline Digital Marketing Campaign",
        "Best Social Media Strategy by an Airline",
        "Excellence in Airline Holiday Packages",
        "Airline Marketing Team of the Year",
        "Rising Star in Airline Commercial Leadership",
      ],
    },
    {
      title: "Digital Commerce & Revenue Innovation",
      items: [
        "Excellence in Airline E-Commerce Innovation",
        "Innovation in Pricing & Revenue Optimization",
        "Best Next-Gen Loyalty Programme",
        "Most Innovative Ancillary Revenue Strategy",
        "Best Next-Gen Merchandising Implementation",
      ],
    },
    {
      title: "Technology, Data & Transformation Excellence",
      items: [
        "Best Use of Artificial Intelligence in Aviation",
        "Excellence in Data & Predictive Analytics",
        "Most Innovative Payment Gateway Integration",
        "Best GDS/NDC Implementation by an Airline",
        "Most Innovative Airline Technology Provider",
        "Workforce & Digital Transformation Excellence",
        "Most Effective Cybersecurity Strategy",
      ],
    },
    {
      title: "Customer Experience & Operational Excellence",
      items: [
        "Outstanding Customer Experience Initiative",
        "Outstanding IROPS & Recovery Solution",
        "Best In-flight Digital Passenger Experience (IFEC)",
        "Best Contactless Journey Experience",
        "Excellence in Airport–Airline Partnership",
      ],
    },
    {
      title: "Sustainability & Global Impact",
      items: [
        "Sustainability & ESG Leader of the Year",
        "Best Ancillary Partnership (Hotels, Cars, Chauffeurs)",
        "Best Next-Gen Merchandising Implementation",
      ],
    },
  ];

  const benefits = [
    {
      text: "Gain international recognition on global stage",
      icon: (
        <svg
          className="w-8 h-8 text-[#15A4B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ),
    },
    {
      text: "Extensive media coverage across aviation networks",
      icon: (
        <svg
          className="w-8 h-8 text-[#15A4B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h18M3 6h18M3 14h18M3 18h18"
          ></path>
        </svg>
      ),
    },
    {
      text: "Network with industry elite at exclusive Gala",
      icon: (
        <svg
          className="w-8 h-8 text-[#15A4B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12h.01M12 16h.01M8 12h.01M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      ),
    },
    {
      text: "Motivate teams and strengthen reputation",
      icon: (
        <svg
          className="w-8 h-8 text-[#15A4B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      ),
    },
  ];

  const galaInfo = [
    {
      label: "Date",
      value: "April 9, 2026",
      icon: (
        <svg
          className="w-6 h-6 text-[#15A4B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
    {
      label: "Time",
      value: "7:00 PM onwards",
      icon: (
        <svg
          className="w-6 h-6 text-[#15A4B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3M12 2a10 10 0 1010 10A10 10 0 0012 2z"
          ></path>
        </svg>
      ),
    },
    {
      label: "Venue",
      value: "Holiday Inn New Delhi Aerocity ",
      icon: (
        <svg
          className="w-6 h-6 text-[#15A4B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 9V7a5 5 0 00-10 0v2H5a2 2 0 00-2 2v9h18v-9a2 2 0 00-2-2h-2z"
          ></path>
        </svg>
      ),
    },
    {
      label: "Dress Code",
      value: "Black Tie Optional",
      icon: (
        <svg
          className="w-6 h-6 text-[#15A4B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422M12 14v7M12 14L5.84 10.578M5 20h14v2H5v-2z"
          ></path>
        </svg>
      ),
    },
    {
      label: "Tickets",
      value: "Included in the IAMS 2026 Pass",
      icon: (
        <svg
          className="w-6 h-6 text-[#15A4B3]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 14l2 2 4-4M5 12h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stats = [
    {
      value: "Gain International Recognition",
      label: "Showcase your achievements on a global stage.",
    },
    {
      value: "Extensive Media Coverage",
      label: "Be featured across leading aviation media and partner networks.",
    },
    {
      value: "Network with Industry Elite",
      label: "Engage with airline leaders at the exclusive Gala Night.",
    },
    {
      value: "Motivate Your Team",
      label:
        "Boost employee morale and strengthen your organization's reputation for excellence.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      {/* <section
        className="w-full text-white py-20 flex flex-col items-center justify-center relative"
        style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }}
      >
        <div className="px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            IAMS 2026 Awards
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10">
            The IAMS Awards Gala is the industry's premier evening of recognition,
            honoring teams and innovations redefining passenger experience and driving commercial success.
          </p>
        </div>
      </section> */}

      <section
        data-aos="fade-down"
        className="relative my-[80px] overflow-hidden bg-cover bg-center bg-no-repeat h-[380px] md:h-[480px]"
        style={{
          backgroundImage: `url(${awards})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* subtle overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/15"></div>

        {/* center content vertically and horizontally */}
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-4xl mx-auto">
            {/* ultra-subtle glass blur behind text */}
            <div className="bg-white/1 backdrop-blur-[2px] rounded-3xl px-6 py-8 inline-block md:px-10 md:py-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-sm animate-fadeIn">
                IAMS 2026 Awards
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-2 text-white/90 drop-shadow-sm">
                The IAMS Awards Gala is the industry's premier evening of
                recognition, honoring teams and innovations redefining passenger
                experience and driving commercial success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#E6F7F9]">
        <div className="max-w-7xl mx-auto px-6">
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700 text-center"
            data-aos="zoom-in"
          >
            Where achievement meets prestige — the IAMS Awards Gala celebrates
            visionary teams and groundbreaking innovations transforming global
            aviation’s commercial landscape.
          </p>

          <h2
            data-aos="zoom-in"
            className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight text-center py-3
             bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent"
          >
            Why Participate in IAMS Awards?
          </h2>

          <div
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
            data-aos="fade-up"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2 }}
              >
                <div
                  className="text-2xl md:text-2xl font-extrabold mb-2"
                  style={{
                    background: "linear-gradient(to right, #15A4B3, #0E7785)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-700 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits + Gala Info */}
      <section className="max-w-[1400px] mx-auto px-6 py-20">
        {/* Common Heading */}
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-14 tracking-tight text-center py-3
      bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent"
          data-aos="fade-down"
        >
          Gala Information
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Left Side – Info Card */}
          <div
            className="flex flex-col bg-white rounded-2xl shadow-xl p-10 border border-gray-100"
            data-aos="fade-right"
          >
            <div className="flex-1 space-y-6">
              {galaInfo.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#E6F7F9] transition"
                >
                  <div
                    className="p-3 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: "rgba(21,164,179,0.15)",
                      color: "#15A4B3",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">{item.label}</p>
                    <p className="text-gray-700">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side – Image */}
          <div
            className="flex justify-center items-center"
            data-aos="fade-left"
          >
            <img
              style={{ objectFit: "100% 100%" }}
              src={galadinner}
              alt="Gala Event"
              className="rounded-2xl shadow-xl w-full object-cover h-full lg:h-auto max-h-[600px]"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section
        id="awards-categories"
        className="py-20 px-6 md:px-12 bg-gradient-to-br from-[#f4f8f9] to-[#f8fbfb] relative overflow-hidden"
        data-aos="zoom-in"
      >
        {/* Decorative floating gradients */}
        <div className="absolute top-10 left-10 w-60 h-60 bg-[#15A4B3]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#0E7785]/20 rounded-full blur-3xl animate-pulse"></div>

        {/* Title */}
        <div className="relative text-center mb-16 z-10">
          <h2 className="text-4xl md:text-5xl py-[10px] font-extrabold tracking-tight bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent">
            IAMS 2026 Awards — Categories
          </h2>
          {/* <div className="w-24 h-1 bg-[#15A4B3] mx-auto rounded-full mt-4"></div> */}
        </div>

        {/* Category Cards */}

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto z-10 justify-items-center">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => handleToggle(index)} // Mobile tap toggle
              className="w-full max-w-[360px] relative bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden group border border-white/40 cursor-pointer"
            >
              {/* Front View */}
              <div
                className={`p-8 flex flex-col items-center justify-center text-center min-h-[320px] transition-all duration-500 
              ${
                activeIndex === index
                  ? "translate-y-[-100%]" // Show slide on mobile
                  : "group-hover:translate-y-[-100%]" // Show slide on hover (desktop)
              }`}
              >
                <h4 className="text-2xl font-bold bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent">
                  {cat.title}
                </h4>
                <ChevronRight
                  className="mt-6 text-[#15A4B3] opacity-70 group-hover:opacity-100 transition-all duration-500"
                  size={32}
                />
              </div>

              {/* Hidden Slide-Out Info */}
              <div
                className={`absolute inset-0 p-8 bg-gradient-to-br from-[#0E7785] to-[#15A4B3] text-white transition-all duration-500 ease-in-out rounded-2xl 
              ${
                activeIndex === index
                  ? "translate-y-0" // Show on click (mobile)
                  : "translate-y-full group-hover:translate-y-0" // Show on hover (desktop)
              }`}
              >
                <h4 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">
                  {cat.title}
                </h4>
                <ul className="space-y-2 text-left text-sm md:text-base">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 opacity-90 hover:opacity-100 transition"
                      style={{ fontSize: "12px" }}
                    >
                      <span className="text-[#f4f8f9] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* nominate catagory is herew  */}
      <section
        className="py-16 px-6 md:px-12 bg-white text-white"
        data-aos="fade-down"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight 
               bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent"
          >
            How to Nominate
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Eligibility */}
          <div
            className="rounded-2xl p-6 shadow-lg hover:shadow-[#15A4B3]/50 transition-all duration-300 text-center"
            style={{
              background: "linear-gradient(135deg, #0E7785 0%, #15A4B3 100%)",
            }}
          >
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent text-white">
              Eligibility
            </h3>
            <p className="text-white text-sm leading-relaxed">
              Open to global airlines, airports, technology providers, and
              travel partners.
            </p>
          </div>

          {/* Nomination Period */}
          <div
            className="rounded-2xl p-6 shadow-lg hover:shadow-[#15A4B3]/50 transition-all duration-300 text-center"
            style={{
              background: "linear-gradient(135deg, #0E7785 0%, #15A4B3 100%)",
            }}
          >
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent text-white">
              Nomination Period
            </h3>
            <p className="text-white text-sm leading-relaxed">
              1 December 2025 – 15 February 2026 .
            </p>
          </div>

          {/* Judging Criteria */}
          <div
            className="rounded-2xl p-6 shadow-lg hover:shadow-[#15A4B3]/50 transition-all duration-300 text-center"
            style={{
              background: "linear-gradient(135deg, #0E7785 0%, #15A4B3 100%)",
            }}
          >
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent text-white">
              Judging Criteria
            </h3>
            <p className="text-white text-sm leading-relaxed">
              Innovation & Creativity | Impact & Results | Scalability |
              Industry Relevance.
            </p>
          </div>

          {/* Call to Action */}
          <div
            className="rounded-2xl p-6 shadow-lg hover:shadow-[#15A4B3]/50 transition-all duration-300 text-center"
            style={{
              background: "linear-gradient(135deg, #0E7785 0%, #15A4B3 100%)",
            }}
          >
            <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent text-white">
              Call-to-Action
            </h3>
            <p className="text-white text-sm leading-relaxed mb-4">
              The nomination portal opens on December 1st, 2025.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <div className="w-full flex justify-center px-4 md:px-8 lg:px-16 py-5">
        <div className="w-full max-w-6xl text-center bg-gradient-to-r from-[#e6f7ff] to-[#f0f9ff] rounded-2xl p-8 border border-[#21d6e0]/30 shadow-md">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight 
               bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent"
          >
            Submit Your Nominations
          </h2>
          <button
            className="bg-gradient-to-r from-[#8ed0d8] to-[#15A4B3] text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-[#15A4B3] hover:to-[#8ed0d8] transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Awards Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Awards;
