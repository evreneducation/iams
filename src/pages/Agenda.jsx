import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import agendabanner from '../../public/agenda/agenda.jpg'



const Agenda = () => {

  
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
