import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import agendabanner from '../../public/agenda/agenda.jpg'
import { motion, AnimatePresence } from "framer-motion";
import {
  Coffee,
  Users,
  MessageCircle,
  Globe,
  Clock,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";


const AgendaItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3">
          <div className="w-6 h-6">{item.icon}</div>
          <div>
            <p className="text-purple-700 font-semibold">{item.title}</p>
            <p className="text-gray-500 text-sm">{item.time}</p>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-12 py-2 text-gray-600 whitespace-pre-line"
          >
            {item.focus}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Agenda = () => {
const [activeDay, setActiveDay] = useState("day1");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const gradient = "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)";
 
  const agendaData = {
  day1: [
    {
      time: "09:00 – 09:30",
      title: "Registration & Welcome Coffee",
      icon: <Coffee className="h-6 w-6 text-purple-700" />,
      // focus: `Welcome coffee and registration for attendees.`,
    },
    {
      time: "09:30 – 10:30",
      title: "Opening Keynote Address",
      icon: <Users className="h-6 w-6 text-purple-700" />,
      focus: `Navigating the New Skies: A CEO's Vision for Enterprise Transformation in Aviation`,
    },
    {
      time: "10:30 – 11:30",
      title: "Session 1: E-commerce & Digital Marketing in the Era of Personalization",
      icon: <MessageCircle className="h-6 w-6 text-purple-700" />,
      focus: `A deep dive into modern airline e-commerce platforms
      • Optimizing airline booking funnels
      • Personalized digital marketing strategies
      • SEO, programmatic advertising, social media & email marketing`,
    },
    {
      time: "11:30 – 11:45",
      title: "Tea & Coffee Break",
      icon: <Coffee className="h-6 w-6 text-purple-700" />,
      // focus: `Short tea break.`,
    },
    {
      time: "11:45 – 12:45",
      title: "Session 2: The Future of Customer Experience – From Check-in to Destination",
      icon: <Globe className="h-6 w-6 text-purple-700" />,
      focus: `Examining the end-to-end customer journey, with a spotlight on contactless technologies, seamless wayfinding at airports, and integrated ground operations.
      • Seamless, contactless travel journeys
      • Biometric identity, digital boarding passes, self-service kiosks
      • Integrated ground operations & mobile-first passenger engagement`,
    },
    {
      time: "12:45 – 13:45",
      title: "Lunch & Networking",
      icon: <Coffee className="h-6 w-6 text-purple-700" />,
      // focus: `Lunch and networking for attendees.`,
    },
    {
      time: "13:45 – 14:45",
      title: "Session 3: Data as the New Fuel – Leveraging AI & ML for Operational Excellence",
      icon: <MessageCircle className="h-6 w-6 text-purple-700" />,
      focus: `Exploring how artificial intelligence, machine learning, and robust data management systems can be used for predictive analytics, dynamic pricing optimization and enhancing operational efficiency
      • Predictive analytics for demand forecasting
      • AI/ML in pricing and revenue optimization
      • Data-driven decision-making & predictive maintenance`,
    },
    {
      time: "14:45 – 15:45",
      title: "Session 4: Mitigating Disruption – Modernizing IROPS & Customer Service",
      icon: <MessageCircle className="h-6 w-6 text-purple-700" />,
      focus: `Strategies and technologies for managing flight interruptions (IROPS). A look at modern customer service channels, including AI-powered chatbots and real-time communication tools for proactive passenger care.
      • AI-powered chatbots & real-time communication tools
      • Proactive rebooking & customer communication during disruptions
      • Social media & digital service recovery strategies`,
    },
    {
      time: "15:45 – 16:00",
      title: "Tea & Coffee Break",
      icon: <Coffee className="h-6 w-6 text-purple-700" />,
      // focus: `Short tea break.`,
    },
    {
      time: "16:00 – 17:00",
      title: "Panel Discussion: The Connected Ecosystem – How Ancillary Partners Drive Value",
      icon: <Users className="h-6 w-6 text-purple-700" />,
      focus: `A discussion with airlines, hotels, car rental companies, and other partners on creating seamless, value-added products and enhancing the total travel experience.
      • Airlines + hotels, car rentals, OTAs & chauffeur services
      • Integrated loyalty rewards & bundled travel packages
      • Cross-promotional strategies for incremental revenue`,
    },
    {
      time: "17:00 – 17:30",
      title: "Day 1 Wrap-Up & Closing Remarks",
      icon: <Users className="h-6 w-6 text-purple-700" />,
      // focus: `Summary of Day 1 sessions and closing remarks.`,
    },
  ],

  day2: [
    {
      time: "09:00 – 09:30",
      title: "Welcome Back & Networking Coffee",
      icon: <Coffee className="h-6 w-6 text-purple-700" />,
      // focus: `Networking coffee and welcome back attendees.`,
    },
    {
      time: "09:30 – 10:30",
      title: "Keynote Address",
      icon: <Users className="h-6 w-6 text-purple-700" />,
      focus: `The Next Generation: Reimagining Loyalty, Merchandising & Revenue Streams`,
    },
    {
      time: "10:30 – 11:30",
      title: "Session 5: Next-Gen Loyalty & Merchandising – From Miles to Experiences",
      icon: <MessageCircle className="h-6 w-6 text-purple-700" />,
      focus: `Moving beyond traditional points-based systems to create engaging, personalized loyalty programmes. Exploring the latest trends in merchandising to maximize ancillary revenue.
      • Beyond traditional points-based loyalty
      • Tiered benefits & non-air partnerships
      • Personalized ancillary offers powered by PSS & GDS`,
    },
    {
      time: "11:30 – 11:45",
      title: "Tea & Coffee Break",
      icon: <Coffee className="h-6 w-6 text-purple-700" />,
      // focus: `Short tea break.`,
    },
    {
      time: "11:45 – 12:45",
      title: "Session 6: The Tech Foundation – GDS, NDC & Cybersecurity",
      icon: <Globe className="h-6 w-6 text-purple-700" />,
      focus: `Understanding the evolution of distribution from traditional Global Distribution Systems (GDS) to the advanced capabilities of NDC. This session will also cover critical cyber security measures to protect both corporate and customer data.
      • NDC adoption & integration challenges
      • Modern payment gateways & digital trust
      • Safeguarding loyalty & passenger data through advanced cybersecurity`,
    },
    {
      time: "12:45 – 13:45",
      title: "Lunch & Networking",
      icon: <Coffee className="h-6 w-6 text-purple-700" />,
      // focus: `Lunch and networking for attendees.`,
    },
    {
      time: "13:45 – 14:45",
      title: "Session 7: Building a Greener Future – Sustainability & Innovation",
      icon: <Globe className="h-6 w-6 text-purple-700" />,
      focus: `The role of marketing and technology in promoting sustainable aviation. How airlines can communicate their environmental commitments and use innovation to reduce their carbon footprint.
      • Communicating environmental commitments to travelers
      • Sustainable Aviation Fuel (SAF) & carbon offset strategies
      • IoT & Cloud technologies for fuel & energy efficiency`,
    },
    {
      time: "14:45 – 15:45",
      title: "Session 8: Talent & Operations – Powering the Digital Shift",
      icon: <Users className="h-6 w-6 text-purple-700" />,
      focus: `The human element of digital transformation. This session will address how to re-skill and train Commercial manpower for digital-first airline operations, as well as how new technologies are impacting ground and digital operations.
      • Re-skilling & training for digital-first airline operations
      • Talent transformation and best practises in the commercial division
      • Future of ground & digital operations in a hyper-connected world`,
    },
    {
      time: "15:45 – 16:00",
      title: "Tea & Coffee Break",
      icon: <Coffee className="h-6 w-6 text-purple-700" />,
      // focus: `Short tea break.`,
    },
    {
      time: "16:00 – 17:00",
      title: "Closing Keynote Panel",
      icon: <Users className="h-6 w-6 text-purple-700" />,
      focus: `A forward-looking discussion on the most significant challenges and opportunities for the aviation sector in the next decade.`,
    },
    {
      time: "17:00 – 17:30",
      title: "Conference Conclusion & Final Remarks",
      icon: <Users className="h-6 w-6 text-purple-700" />,
      // focus: `Summary of Day 2 sessions and closing remarks.`,
    },
  ],
};

  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        easing: "ease-in-out", // easing function
        once: true, // animation happens only once
      });
    }, []);
  

  const containerRef = useRef(null);
  const planeRef = useRef(null);
// "day1", "day2" or null

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        const containerHeight = containerRef.current.offsetHeight;
        const windowHeight = window.innerHeight;

        const progress = Math.min(
          1,
          Math.max(
            0,
            (windowHeight - containerTop) / (containerHeight + windowHeight)
          )
        );
        setScrollProgress(progress);

        if (planeRef.current) {
          const runway = document.querySelector(".runway-path");
          if (runway) {
            const pathLength = runway.getTotalLength();
            const point = runway.getPointAtLength(progress * pathLength);
            planeRef.current.style.left = `${point.x - 25}px`;
            planeRef.current.style.top = `${point.y - 25}px`;

            if (progress < 0.99) {
              const nextPoint = runway.getPointAtLength(
                (progress + 0.01) * pathLength
              );
              const angle =
                (Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) *
                  180) /
                Math.PI;
              planeRef.current.style.transform = `rotate(${angle}deg)`;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
<div
  className="relative overflow-hidden mt-[60px] bg-cover bg-center bg-no-repeat h-[380px] md:h-[480px]"
  data-aos="fade-down"
  style={{
    backgroundImage: `url(${agendabanner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* very light overlay for subtle depth */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/15"></div>

  {/* center content vertically and horizontally */}
  <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-6">
    <div className="max-w-4xl mx-auto">
      {/* ultra-thin glass behind text */}
      <div className="bg-white/1 backdrop-blur-[2px] rounded-3xl px-6 py-8 inline-block md:px-10 md:py-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-sm">
          Aviation Summit <span className="text-blue-300">2026</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-4 text-white/90 drop-shadow-sm">
          Two Days of Innovation & Transformation
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg text-white/90 drop-shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            <span><strong>Venue:</strong> Bharat Mandapam, New Delhi</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
            <span><strong>Dates:</strong> April 9-10, 2026</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="text-center mb-20 px-4 md:px-0 mt-[80px]">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
    Your Journey Through Innovation
  </h2>
  <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
    Follow our interactive timeline as we navigate through two days of
    cutting-edge aviation technology and industry transformation.
  </p>
</div>


   <div
      className="text-center py-10 rounded-t-2xl text-white"
      style={{
        background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide">
        Holiday Inn New Delhi Aerocity <span className="font-normal">(proposed)</span>
      </h2>
      <p className="text-base sm:text-lg mt-2 opacity-90" style={{fontSize:'1.5rem'}} >9–10 April 2026</p>
    </div>

<div className="max-w-5xl mx-auto mt-12 rounded-2xl shadow-xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        {["day1", "day2"].map((day, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveDay(day);
              setOpenIndex(null);
            }}
            className={`flex-1 py-4 text-center text-lg font-semibold transition-all duration-300 ${
              activeDay === day
                ? "text-white"
                : "text-gray-700 hover:text-[#0E7785]"
            }`}
            style={{
              background:
                activeDay === day ? gradient : "rgba(240, 240, 240, 0.8)",
            }}
          >
            {day === "day1" ? "DAY 1" : "DAY 2"}
          </button>
        ))}
      </div>

      {/* Agenda Items */}
      <div className="bg-white divide-y divide-gray-200">
        {agendaData[activeDay].map((item, index) => {
          const hasFocus = !!item.focus; // ✅ condition check

          return (
            <div
              key={index}
              className="transition-all duration-500 ease-in-out hover:bg-gray-50"
            >
              {/* Header Row */}
              <button
                className={`w-full flex justify-between items-center p-5 text-left ${
                  hasFocus ? "" : "cursor-default"
                }`}
                onClick={() => hasFocus && toggleItem(index)}
              >
                <div>
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#0E7785]" />
                    {item.time}
                  </h3>
                  <h2 className=" text-gray-800 mt-1" style={{fontSize:'1.1rem'}} >{item.title}</h2>
                  {item.topic && (
                    <p className="mt-1 text-[#0E7785] font-semibold">
                      {item.topic}
                    </p>
                  )}
                </div>

                {/* Show chevron only if focus exists */}
                {hasFocus && (
                  <div
                    className="text-[#0E7785] transition-transform duration-300"
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                )}
              </button>

              {/* Expandable Content — only render if focus exists */}
              {hasFocus && (
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-[600px] p-5" : "max-h-0"
                  }`}
                  style={{
                    background: openIndex === index ? gradient : "transparent",
                  }}
                >
                  {openIndex === index && (
                    <div className="text-white">
                      {/* Focus Section */}
                      <div className="flex items-start gap-3 mb-4">
                        {/* <Target className="w-5 h-5 text-yellow-300 mt-1" /> */}
                        <p className="font-semibold leading-relaxed whitespace-pre-line">
                          {item.focus}
                        </p>
                      </div>

                      {/* Bullet Points */}
                      {item.points && (
                        <ul className="list-disc list-inside space-y-1 pl-2">
                          {item.points.map((point, i) => (
                            <li
                              key={i}
                              className="opacity-90 leading-relaxed"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>


      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20" 
data-aos="zoom-in">
        <div   style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }} className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 rounded-3xl shadow-2xl">
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-indigo-300 rounded-full opacity-15 animate-pulse delay-500"></div>
          </div>

          <div className="relative z-10 text-center py-16 px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Ready to Take Flight?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Get the complete detailed agenda with speaker information,
                session descriptions, and networking opportunities. Your journey
                to aviation innovation starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Complete Speaker Profiles</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Networking Guide</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span>Venue Maps</span>
                </div>
              </div>

              <button
             
                className="group relative inline-flex items-center gap-3 bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                <svg
                  className="w-6 h-6 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download Complete Agenda
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>

              <p className="text-blue-200 text-sm mt-4">
                PDF format • Printable • Mobile friendly
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
