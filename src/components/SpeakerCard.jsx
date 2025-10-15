import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const SpeakerCard = ({ speaker }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        easing: "ease-in-out", // easing function
        once: true, // animation happens only once
      });
    }, []);
  

  const handleMouseMove = (e) => {
    if (!isOpen) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

    setMousePosition({ x, y });
  };

  return (
    <>
      {/* Normal Card (Closed State) */}
      <div data-aos="zoom-in"
        className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <div className="h-64 bg-gradient-to-br from-[#21d6e0] to-[#0080ff] relative" >
          <img
            src={speaker.image || "/speakers/dummy-speaker.jpg"}
            alt={speaker.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2 text-[#003366]">
            {speaker.name}
          </h3>
          <p className="text-lg text-[#0080ff] font-semibold mb-4">
            {speaker.designation}
          </p>
          <p className="text-gray-600 line-clamp-3">{speaker.about}</p>
        </div>
      </div>

      {/* Floating Modal (Open State) */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-4 overflow-hidden relative transition-all duration-500"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotateX(${
                mousePosition.y * -0.5
              }deg) rotateY(${mousePosition.x}deg)`,
              transition: "transform 0.1s ease-out",
            }}
            onMouseMove={handleMouseMove}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Speaker Image */}
              <div className="h-96 bg-gradient-to-br from-[#21d6e0] to-[#0080ff]">
                <img
                  src={speaker.image || "/speakers/dummy-speaker.jpg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
              </div>

              {/* Speaker Content */}
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-2 text-[#003366]">
                  {speaker.name}
                </h3>
                <p className="text-xl text-[#0080ff] font-semibold mb-4">
                  {speaker.designation}
                </p>
                <p className="text-gray-700 leading-relaxed">{speaker.about}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpeakerCard;