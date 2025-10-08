import React, { useEffect, useRef, useState } from "react";

const Agenda = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const planeRef = useRef(null);
  const [showDay1Popup, setShowDay1Popup] = useState(false);
  const [showDay2Popup, setShowDay2Popup] = useState(false);

  const day1Events = [
    { time: "9:00 AM", title: "Opening Keynote", description: "CEO's Vision for Enterprise Transformation" },
    { time: "10:30 AM", title: "E-commerce & Personalization", description: "Strategies for digital customer experience" },
    { time: "12:00 PM", title: "Lunch & Networking", description: "Connect with industry leaders and peers" },
    { time: "1:30 PM", title: "AI & ML Excellence", description: "Operational excellence through AI" },
    { time: "3:00 PM", title: "IROPS Modernization", description: "Transforming disruption management" },
    { time: "4:30 PM", title: "Panel Discussion", description: "Connected Ecosystem for Aviation" },
  ];

  const day2Events = [
    { time: "9:00 AM", title: "Keynote: Loyalty & Merchandising", description: "Next-generation passenger engagement" },
    { time: "10:30 AM", title: "Tech Foundation", description: "GDS to NDC evolution and cybersecurity" },
    { time: "12:00 PM", title: "Lunch & Networking", description: "Continued networking and collaboration" },
    { time: "1:30 PM", title: "Sustainability Innovation", description: "Building a greener aviation future" },
    { time: "3:00 PM", title: "Digital Talent Development", description: "Preparing for the future workforce" },
    { time: "4:30 PM", title: "Panel Discussion", description: "Charting Course for Aviation 2030" },
  ];


  const generatePDF = () => {
    // Simple PDF content generation using window.print() styled for PDF
    const printWindow = window.open("", "_blank");
    const pdfContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Aviation Summit 2026 - Agenda</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
            .header { text-align: center; margin-bottom: 40px; }
            .title { font-size: 24px; font-weight: bold; color: #1e3a8a; margin-bottom: 10px; }
            .venue { font-size: 16px; margin-bottom: 5px; }
            .day-section { margin-bottom: 40px; page-break-inside: avoid; }
            .day-title { font-size: 20px; font-weight: bold; color: #1e3a8a; margin-bottom: 20px; border-bottom: 2px solid #1e3a8a; padding-bottom: 5px; }
            .event { margin-bottom: 15px; padding: 10px; border-left: 3px solid #3b82f6; background: #f8fafc; }
            .event-time { font-weight: bold; color: #1e40af; }
            .event-title { font-weight: bold; margin-top: 5px; }
            .event-desc { color: #666; margin-top: 5px; }
            @media print { body { margin: 20px; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="title">Aviation Summit 2026 - Agenda</div>
            <div class="venue"><strong>Venue:</strong> Bharat Mandapam, New Delhi</div>
            <div class="venue"><strong>Dates:</strong> April 9-10, 2026</div>
          </div>
          
          <div class="day-section">
            <div class="day-title">Day 1: Digital Core & Customer-Centric Future</div>
            ${day1Events
              .map(
                (event) => `
              <div class="event">
                <div class="event-time">${event.time}</div>
                <div class="event-title">${event.title}</div>
                ${
                  event.description
                    ? `<div class="event-desc">${event.description}</div>`
                    : ""
                }
              </div>
            `
              )
              .join("")}
          </div>
          
          <div class="day-section">
            <div class="day-title">Day 2: Innovation, Loyalty & Sustainable Growth</div>
            ${day2Events
              .map(
                (event) => `
              <div class="event">
                <div class="event-time">${event.time}</div>
                <div class="event-title">${event.title}</div>
                ${
                  event.description
                    ? `<div class="event-desc">${event.description}</div>`
                    : ""
                }
              </div>
            `
              )
              .join("")}
          </div>
        </body>
      </html>
    `;

    printWindow.document.write(pdfContent);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  };

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
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#1646d8] text-white py-6 mt-10">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Aviation Summit <span className="text-blue-300">2026</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-2">
            Two Days of Innovation & Transformation
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-lg">
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

      {/* Flight Path Timeline */}
      <div className="container mx-auto px-6 py-16">
        <div ref={containerRef} className="relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your Journey Through Innovation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow our interactive timeline as we navigate through two days of
              cutting-edge aviation technology and industry transformation.
            </p>
          </div>

          <div className="runway-container relative h-80 mb-16 mx-auto max-w-2xl">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="runwayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#e2e8f0", stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: "#cbd5e1", stopOpacity: 0.6 }} />
                </linearGradient>
              </defs>

              <path
                className="runway-path"
                d="M 50,50 C 120,50 150,80 200,120 C 250,160 280,180 350,220"
                fill="none"
                stroke="url(#runwayGradient)"
                strokeWidth="20"
                strokeLinecap="round"
                opacity="0.4"
              />
              <path
                className="runway-path"
                d="M 50,50 C 120,50 150,80 200,120 C 250,160 280,180 350,220"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="4"
                strokeDasharray="8,8"
              />
            </svg>

            {/* Day 1 Marker */}
            <div className="absolute top-8 left-8 transform -translate-x-1/2">
              <div className="relative">
                <button
                  onMouseEnter={() => setShowDay1Popup(true)}
                 onMouseLeave={() => setShowDay1Popup(false)}
                  className="w-4 h-4 bg-blue-600 rounded-full shadow-lg focus:outline-none cursor: pointer "
                ></button>
                <p className="mt-2 text-sm font-semibold text-blue-900 whitespace-nowrap text-center">
                  Day 1 Start
                </p>

                {showDay1Popup && (
                  <div className="absolute z-50 top-10 left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-2xl p-4 text-gray-800 transform scale-100 transition-transform duration-300">
                    <h4 className="text-lg font-bold mb-2 text-blue-900">Day 1 Agenda</h4>
                    <ul className="space-y-2 max-h-64 overflow-y-auto">
                      {day1Events.map((event, idx) => (
                        <li key={idx} className="border-l-2 border-blue-500 pl-2">
                          <p className="font-semibold text-blue-800">
                            {event.time} - {event.title}
                          </p>
                          {event.description && <p className="text-gray-600 text-sm">{event.description}</p>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Day 2 Marker */}
            <div className="absolute bottom-8 right-8 transform translate-x-1/2">
              <div className="relative">
                <button
                 onMouseEnter={() => setShowDay2Popup(true)}
                  onMouseLeave={() => setShowDay2Popup(false)}
                  className="w-4 h-4 bg-green-600 rounded-full shadow-lg focus:outline-none cursor: pointer"
                ></button>
                <p className="mb-2 text-sm font-semibold text-green-900 whitespace-nowrap text-center">
                  Day 2 End
                </p>

                {showDay2Popup && (
                  <div className="absolute z-50 bottom-10 left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-2xl p-4 text-gray-800 transform scale-100 transition-transform duration-300">
                    <h4 className="text-lg font-bold mb-2 text-green-900">Day 2 Agenda</h4>
                    <ul className="space-y-2 max-h-64 overflow-y-auto">
                      {day2Events.map((event, idx) => (
                        <li key={idx} className="border-l-2 border-green-500 pl-2">
                          <p className="font-semibold text-green-800">
                            {event.time} - {event.title}
                          </p>
                          {event.description && <p className="text-gray-600 text-sm">{event.description}</p>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Animated Plane */}
            <div
              ref={planeRef}
              className="absolute w-16 h-16 transition-all duration-200 drop-shadow-lg"
              style={{ left: "25px", top: "25px" }}
            >
              <div className="relative">
                <svg
                  className="w-full h-full text-blue-600 drop-shadow-md"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19L8 20.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
                <div className="absolute -inset-2 bg-blue-200 rounded-full opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


{/* Enhanced CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 rounded-3xl shadow-2xl">
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
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Complete Speaker Profiles</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Networking Guide</span>
                </div>
                <div className="flex items-center gap-2 text-blue-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Venue Maps</span>
                </div>
              </div>

              <button
                onClick={generatePDF}
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
  </>)
};

export default Agenda;


