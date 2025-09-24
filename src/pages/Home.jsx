import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Demo from "../utils/InfiniteScroll";
import SpeakerCard from "../components/SpeakerCard";
import speakers from "../speaker/data.js";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50/30">
      {/* Hero Section with Background Image */}
      <section
        className="relative text-white py-32 overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{ backgroundImage: "url('/landingpage/image.jpeg')" }}
      >
        {/* Overlay with blue-teal gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/90 via-[#004c4c]/80 to-[#006666]/90"></div>

        {/* Decorative Elements with blue accents */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#21d6e0]/10 rounded-full blur-xl"></div>
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-[#0080ff]/5 rounded-full blur-xl"></div>
          {/* Neon accent lines */}
          <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#21d6e0] to-transparent opacity-30"></div>
          <div className="absolute bottom-1/3 right-0 w-1/2 h-1 bg-gradient-to-l from-transparent via-[#0080ff] to-transparent opacity-30"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight mt-16">
              International Aviation
              <br />
              Marketing Summit
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl mb-16 max-w-5xl mx-auto leading-relaxed font-light">
              The Complete Next-Gen Aviation
              <br />
              Commercial Ecosystem
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
              <Link
                to="/registration"
                className="bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white px-10 py-5 rounded-lg font-semibold text-xl hover:from-[#0080ff] hover:to-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-[#21d6e0]/30"
              >
                Register Now
              </Link>
              <Link
                to="/agenda"
                className="bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-lg font-semibold text-xl hover:bg-white/10 hover:border-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                View Agenda
              </Link>
            </div>
          </div>
        </div>

        {/* Date and Location */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-auto lg:bottom-8 lg:left-8 lg:translate-x-0 z-10">
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-[#21d6e0]/30 max-w-xs lg:max-w-none mx-auto lg:mx-0">
            <div className="flex items-center mb-2 lg:mb-3">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-[#21d6e0] mr-2 lg:mr-3 flex-shrink-0"
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
              <span className="text-base lg:text-xl font-semibold text-white">
                April 9-10, 2026
              </span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 lg:w-6 lg:h-6 text-[#21d6e0] mr-2 lg:mr-3 flex-shrink-0"
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
              <span className="text-sm lg:text-lg text-white">
                Yashobhoomi, Delhi, India
              </span>
            </div>
          </div>
        </div>

        {/* Floating particles */}
        {/* <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#21d6e0] rounded-full animate-float opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div> */}
      </section>

      {/* New Section: Where Strategy Meets Opportunity */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Placeholder */}
              <div className="order-1 lg:order-2 relative">
                <div className="rounded-2xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src="/landingpage/1.jpeg"
                      alt="Strategy & Opportunity Visual"
                      className="mx-auto mb-4"
                    />
                    <p className="text-xl font-semibold text-[var(--primary-teal)]">
                      Strategy & Opportunity Visual
                    </p>
                    <p className="text-[var(--secondary-teal)]/90 mt-2">
                      Image placeholder representing aviation innovation
                    </p>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-teal)]">
                  Where Strategy Meets Opportunity
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The International Aviation Marketing Summit (IAMS 2026) is
                    the strategic command center for the global aviation
                    industry. This is more than a conference; it's a curated
                    ecosystem where airlines, airports, technology pioneers, and
                    ancillary partners converge to unlock the next era of
                    commercial success.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Over two dynamic days, you will forge powerful alliances,
                    gain exclusive market intelligence, and discover the
                    cutting-edge solutions driving growth, profitability, and
                    competitive advantage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Icon-based Columns Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f0f9f9] to-[#e6f2f2]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-teal)]">
                Unlock Your Aviation Potential
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join industry pioneers and transform your commercial strategy
                with cutting-edge insights and unparalleled networking
                opportunities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Column 1: Forge Alliances */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#008080]/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[#e6f2f2] p-4 rounded-full inline-flex mb-6">
                  <svg
                    className="w-8 h-8 text-[var(--secondary-teal)]"
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
                <h3 className="text-2xl font-bold mb-4 text-[var(--primary-teal)]">
                  Forge Alliances
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Connect with C-level executives and decision-makers in curated
                  B2B meetings and high-value networking sessions.
                </p>
              </div>

              {/* Column 2: Gain Intelligence */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--accent-teal)]/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[var(--accent-teal)]/10 p-4 rounded-full inline-flex mb-6">
                  <svg
                    className="w-8 h-8 text-[var(--secondary-teal)]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[var(--primary-teal)]">
                  Gain Intelligence
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Access a deep-dive agenda on AI/ML, NDC, sustainability,
                  loyalty, and next-gen passenger journeys.
                </p>
              </div>

              {/* Column 3: Drive Growth */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-[var(--accent-teal)]/20 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="bg-[var(--accent-teal)]/10 p-4 rounded-full inline-flex mb-6">
                  <svg
                    className="w-8 h-8 text-[var(--secondary-teal)]"
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
                <h3 className="text-2xl font-bold mb-4 text-[var(--primary-teal)]">
                  Drive Growth
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Discover new profit centers, unleash ancillary revenue
                  streams, and position your brand at the forefront of
                  innovation.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/agenda"
                className="inline-block bg-[var(--primary-teal)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--secondary-teal)] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Explore the Agenda
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance Section with Animated Numbers */}
      <AnimatedNumbersSection />

      {/* Who You'll Meet Section */}
      <Demo />

      {/* Featured Speakers Sneak Peek Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50/50 to-[#f0f9f9]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-teal)]">
                Learn from the Leaders
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Gain insights from industry pioneers and visionaries shaping the
                future of aviation
              </p>
            </div>

            {/* Speaker Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {speakers.map((speaker) => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center">
              <Link
                to="/speakers"
                className="inline-block bg-transparent border-2 border-[var(--primary-teal)] text-[var(--primary-teal)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[var(--primary-teal)] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                View All Speakers
              </Link>
              <p className="text-gray-500 mt-4 text-sm">
                This section is crucial for building credibility and will be
                populated as speakers are confirmed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-4 bg-[#e6f2f2] rounded-full mb-6 border border-[#008080]/10">
              <svg
                className="w-8 h-8 text-[var(--secondary-teal)]"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--primary-teal)]">
              Propelled by Strategy, Fueled by Intelligence
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              The International Aviation Marketing Summit 2026 is the definitive
              platform dedicated to aviation marketing, e-commerce, loyalty, and
              technology—a niche underserved by existing industry conferences.
            </p>
            <div className="bg-[#f0f9f9] p-6 rounded-2xl border border-[#008080]/10">
              <p className="text-lg text-[var(--secondary-teal)] font-medium italic">
                "Our mission is to unite the complete ecosystem driving growth,
                innovation, and sustained profitability across airline
                commercial divisions and beyond."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#006666] to-[#008080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Future of Aviation
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-12 opacity-90">
            Be part of the conversation that's shaping the next generation of
            aviation marketing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Register",
                desc: "Secure your spot at the premier aviation marketing summit",
                link: "/registration",
                linkText: "Register Now",
              },
              {
                title: "Exhibit",
                desc: "Showcase your innovations to global aviation leaders",
                link: "/sponsorship",
                linkText: "Exhibit With Us",
              },
              {
                title: "Nominate",
                desc: "Apply for prestigious aviation marketing awards",
                link: "/awards",
                linkText: "View Awards",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="bg-white/20 p-4 rounded-full inline-flex mb-5">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <p className="mb-6 opacity-90">{card.desc}</p>
                <Link
                  to={card.link}
                  className="inline-block bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--primary-teal)] transition border border-white/20"
                >
                  {card.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-[var(--primary-teal)]">
              Why Aviation Leaders Choose IAMS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                {
                  title: "Exclusive Networking",
                  desc: "Connect with top executives and decision-makers from leading aviation companies",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  ),
                },
                {
                  title: "Cutting-Edge Insights",
                  desc: "Gain access to the latest trends and innovations in aviation marketing",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  ),
                },
                {
                  title: "Strategic Partnerships",
                  desc: "Forge valuable partnerships that drive business growth and innovation",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  ),
                },
                {
                  title: "Interactive Sessions",
                  desc: "Engage in hands-on workshops and dynamic panel discussions",
                  icon: (
                    <>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="bg-[#e6f2f2] p-3 rounded-full mr-4 flex-shrink-0 border border-[#008080]/10">
                    <svg
                      className="w-6 h-6 text-[var(--secondary-teal)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fixed Animated Numbers Component
const AnimatedNumbersSection = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [animated]);

  const numbers = [
    { target: 2, label: "Days", desc: "Intensive Learning & Networking" },
    { target: 30, label: "Speakers", desc: "Visionary Industry Leaders" },
    {
      target: 300,
      label: "Attendees",
      desc: "Industry Leaders & Decision-Makers",
    },
    { target: 25, label: "Awards", desc: "Categories Celebrating Excellence" },
    { target: 1, label: "Awards", desc: "Unmissable Awards Gala Night" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-[#f7fbfb] to-[#e6f2f2]"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--primary-teal)]">
          At a Glance: Key Numbers
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover the scale and impact of the premier aviation marketing event
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 text-center">
          {numbers.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-[#008080]/10 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl font-bold text-[var(--primary-teal)] mb-3">
                {animated ? (
                  <Counter target={item.target} duration={2000} />
                ) : (
                  "0"
                )}
              </div>
              <div className="text-xl font-semibold mb-2">{item.label}</div>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Fixed Counter Component
const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 20);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}
      {target >= 30 && "+"}
    </span>
  );
};

export default Home;
