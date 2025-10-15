import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import aboutbanner from '../../public/about/aboutbanner.jpg'

import AOS from "aos";
import "aos/dist/aos.css";


const AnimatedRegionItem = ({ item, index, isVisible }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const itemRef = useRef(null);

   useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        easing: "ease-in-out", // easing function
        once: true, // animation happens only once
      });
    }, []);
  


  useEffect(() => {
    if (isVisible && !hasAnimated) {
      // Start the shuffle animation after a small delay
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, index * 200); // Stagger the animation start

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasAnimated, index]);

  return (
    <div
      ref={itemRef}
      className={`text-center region-item transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className={`bg-gradient-to-br ${
          item.color
        } w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 ${
          hasAnimated ? "animate-shuffle" : ""
        }`}
        style={{
          animationDelay: hasAnimated ? "0s" : "0s",
        }}
      >
        <span className="text-white text-2xl font-bold">
          {item.region.charAt(0)}
        </span>
      </div>
      <h3
        className={`text-lg font-semibold text-[#003366] transition-all duration-700 ${
          hasAnimated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{
          transitionDelay: hasAnimated ? "1.5s" : "0s",
        }}
      >
        {item.region}
      </h3>
    </div>
  );
};
const About = () => {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);
  const globalSectionRef = useRef(null);
  const [isGlobalSectionVisible, setIsGlobalSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isGlobalSectionVisible) {
            setIsGlobalSectionVisible(true);
          }
        });
      },
      { threshold: 0.4 }
    );

    if (globalSectionRef.current) {
      observer.observe(globalSectionRef.current);
    }

    return () => {
      if (globalSectionRef.current) {
        observer.unobserve(globalSectionRef.current);
      }
    };
  }, [isGlobalSectionVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animated]);

  const AnimatedNumber = ({ target, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);

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
            }
          });
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [target, duration, hasAnimated]);

    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    );
  };

  const Interactive3DCard = ({ usp, index, animated }) => {
    const cardRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();

      // Get mouse position relative to card center
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Calculate rotation values (smoother calculation)
      const rotateY = ((x - centerX) / centerX) * 4;
      const rotateX = ((centerY - y) / centerY) * 4;

      setMousePosition({ x: rotateX, y: rotateY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setMousePosition({ x: 0, y: 0 });
    };

    return (
      <div
        ref={cardRef}
        className="group relative"
        style={{ perspective: "1000px" }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main Card */}
        <div
          className={`bg-gradient-to-br from-white to-[#f0f9ff] p-6 rounded-2xl shadow-lg border border-[#0080ff]/20
          ${animated ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}
          `}
          style={{
            transition: animated
              ? `transform 0.3s ease-out, opacity 0.3s ease-out ${
                  index * 100
                }ms`
              : "none",
            transform: isHovering
              ? `rotateX(${mousePosition.x}deg) rotateY(${mousePosition.y}deg) scale(1.02)`
              : "rotateX(0deg) rotateY(0deg) scale(1)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Card Content */}
          <div style={{ transformStyle: "preserve-3d" }}>
            {/* Icon */}
            <div
              className="bg-gradient-to-br from-[#21d6e0]/10 to-[#0080ff]/10 p-3 rounded-2xl inline-flex mb-4"
              style={{
                transform: isHovering ? "translateZ(20px)" : "translateZ(0)",
                transition: "transform 0.3s ease-out",
              }}
            >
              <div
                className="text-[#0080ff]"
                style={{
                  transform: isHovering ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s ease-out",
                }}
              >
                {usp.icon}
              </div>
            </div>

            {/* Title */}
            <h3
              className="text-xl font-bold mb-3 text-[#003366]"
              style={{
                transform: isHovering ? "translateZ(15px)" : "translateZ(0)",
                transition: "transform 0.3s ease-out",
              }}
            >
              {usp.title}
            </h3>

            {/* Description */}
            <p
              className="text-gray-700"
              style={{
                transform: isHovering ? "translateZ(10px)" : "translateZ(0)",
                transition: "transform 0.3s ease-out",
              }}
            >
              {usp.description}
            </p>
          </div>

          {/* Dynamic Glow Effect */}
          <div
            className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${
                50 + mousePosition.y * 10
              }% ${
                50 + mousePosition.x * 10
              }%, rgba(33, 214, 224, 0.1), transparent 70%)`,
              opacity: isHovering ? 0.8 : 0,
              transition: "opacity 0.3s ease-out",
            }}
          />
        </div>

        {/* Enhanced Shadow */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0080ff]/20 to-[#21d6e0]/20 blur-xl -z-10"
          style={{
            opacity: isHovering ? 0.4 : 0,
            transform: isHovering
              ? `translateX(${mousePosition.y * 2}px) translateY(${
                  mousePosition.x * 2
                }px) scale(1.02)`
              : "translateX(0) translateY(0) scale(1)",
            transition: "all 0.3s ease-out",
          }}
        />
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50/30 min-h-screen">
      {/* Hero Banner Section */}
       <section data-aos="fade-down"
                className="relative mt-[80px] overflow-x-hidden bg-cover bg-center bg-no-repeat"
                style={{
                  // backgroundImage: `url('./about/1.png')`,
                  background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)",
                  backgroundSize: "cover",
                }}
              >
                <div className="absolute inset-0 "></div> {/* overlay */}
                <div className="relative container mx-auto text-center py-42 md:py-50">
                  <div className="max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fadeIn">
                         About the Summit
                    </h1>
                    {/* <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Connect with our team to explore participation, sponsorship, exhibition, or award opportunities.
            We’re here to help you maximize your presence and impact at <span className="text-white text-2xl">IAMS 2026.</span> 
          </p> */}
                  </div>
                </div>
              </section>
           

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#003366]">
                  The Premier Aviation Marketing Platform
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The International Aviation Marketing Summit 2026 is the
                    definitive international platform dedicated to the
                    intersection of aviation marketing, e-commerce, loyalty, and
                    technology—a niche underserved by existing industry
                    conferences.
                  </p>
                  <p>
                    Our mission is to unite the complete ecosystem that drives
                    growth, innovation, and sustained profitability across the
                    airline commercial division and beyond.
                  </p>
                </div>
              </div>
              <div className="relative" data-aos="fade-left">
                {/* Image Container with proper spacing */}
                <div className="rounded-2xl overflow-hidden aspect-video shadow-2xl mb-8">
                  <img
                    src="/about/1.png"
                    alt="Aviation Summit"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text positioned below image without overlap */}
                <div className="bg-gradient-to-r from-[#21d6e0] to-[#0080ff] hover:from-[#0080ff] hover:to-[#21d6e0] text-white p-6 rounded-2xl shadow-xl text-center mx-4 transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl">
                  <p className="text-lg font-semibold">
                    Connecting Global Aviation Leaders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with Moving Components */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#f0f9ff] to-[#e6f2ff] relative overflow-hidden">
        {/* Background Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#21d6e0]/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#0080ff]/5 rounded-full blur-3xl animate-bounce-slow"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[#0066cc]/5 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Icon */}
            {/* <div className="inline-flex items-center justify-center p-6 bg-gradient-to-br from-[#21d6e0]/10 to-[#0080ff]/10 rounded-3xl mb-8 border border-[#0080ff]/20 animate-pulse">
              <svg
                className="w-12 h-12 text-[#0080ff]"
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
            </div> */}

            {/* Mission Text with Animation */}
            <div className="space-y-6" data-aos="fade-down">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] animate-slide-in-up">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed animate-slide-in-up delay-200">
                We provide a unique forum bridging Asia, the Middle East, Europe
                and global markets, fostering strategic discussions and powerful
                partnerships that will define the future of air travel.
              </p>
            </div>

            {/* Moving Stats with Animated Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { target: 40, label: "Countries", suffix: "+", duration: 2000 },
                {
                  target: 80,
                  label: "Companies",
                  suffix: "+",
                  duration: 2200,
                },
                { target: 120, label: "Leaders", suffix: "+", duration: 2400 },
                { target: 4, label: "Continents", suffix: "", duration: 1800 },
              ].map((stat, index) => (
                <div key={index} className="group relative" data-aos="zoom-in" >
                  <div className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl border border-[#0080ff]/20 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#21d6e0]/5 to-[#0080ff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10" >
                      {/* Animated Number */}
                      <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-[#21d6e0] to-[#0080ff] bg-clip-text text-transparent mb-2">
                        <AnimatedNumber
                          target={stat.target}
                          duration={stat.duration}
                          suffix={stat.suffix}
                        />
                      </div>

                      {/* Label */}
                      <div className="text-sm md:text-base font-semibold text-[#003366] uppercase tracking-wide">
                        {stat.label}
                      </div>

                      {/* Decorative Line */}
                      <div className="w-12 h-1 bg-gradient-to-r from-[#21d6e0] to-[#0080ff] rounded-full mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#0080ff]/30 rounded-tr-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#21d6e0]/30 rounded-bl-2xl"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Call-to-Action */}
            <div className="mt-12 animate-fade-in delay-1000">
              <p className="text-lg text-gray-600 mb-6">
                Join thousands of aviation professionals shaping the future
              </p>
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
                Join the Mission
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section ref={sectionRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-down">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#003366]">
                Unique Selling Propositions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes IAMS 2026 the must-attend event for aviation
                professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="zoom-in">
              {[
                {
                  icon: (
                    <svg
                      className="w-12 h-12"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "Niche Focus",
                  description:
                    "The only major summit centered on marketing, e-commerce, loyalty, and customer experience.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12"
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
                  ),
                  title: "Strategic Location",
                  description:
                    "Hosted in New Delhi, a burgeoning aviation hub connecting key global regions.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12"
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
                  title: "High-Value Networking",
                  description:
                    "Curated B2B meetings connect airlines, airports, and technology partners for guaranteed ROI.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12"
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
                  title: "Comprehensive Agenda",
                  description:
                    "Covering AI/ML, sustainability, NDC, merchandising, and next-gen passenger journey.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12"
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
                  ),
                  title: "Global Partnerships",
                  description:
                    "Strong alliances with IATA, ACI, and global aviation media ensure world-class experience.",
                },
                {
                  icon: (
                    <svg
                      className="w-12 h-12"
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
                  title: "Future-Focused",
                  description:
                    "Designed to address tomorrow's challenges and opportunities in aviation commerce.",
                },
              ].map((usp, index) => (
                <Interactive3DCard
                  key={index}
                  usp={usp}
                  index={index}
                  animated={animated}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section data-aos="fade-down" style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }}  className="py-16 md:py-24 bg-gradient-to-br from-[#001933] to-[#004080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            This is your runway to transformation.
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
            The future of aviation commerce is taking off—will you be on board?
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link
              to="/registration"
              className="bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[#0080ff] hover:to-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl border border-[#21d6e0]/30"
            >
              Register Your Interest
            </Link>
            
          </div>


          {/* Animated Plane */}
          
        </div>
      </section>

      {/* Global Reach Section */}
      
    </div>
  );
};

export default About;
