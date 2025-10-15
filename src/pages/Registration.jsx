// src/pages/Registration.js
import React from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Registration = () => {
  const navigate = useNavigate();


  
  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        easing: "ease-in-out", // easing function
        once: true, // animation happens only once
      });
    }, []);
  

  const passes = [
    {
      name: "Early Bird Pass (Airline|Airport)",
      price: "USD 600",
      validity: "Until 31 December 2025",
      features: [
        "Full conference access",
        "Exhibition entry",
        "Networking meals",
        "Mobile app access",
        "Networking reception invitation",
      ],
    },
    {
      name: "Standard Pass",
      price: "USD 1,900",
      features: [
        "Full conference access",
        "Exhibition entry",
        "Networking meals",
        "Mobile app access",
        "Networking reception invitation",
      ],
    },
    {
      name: "Group Discount (All)",
      price: "Buy 2, Get 3rd FREE!",
      savings: "Perfect for team attendance",
      features: [
        "All standard pass benefits",
        "Special group networking",
        "Team photo opportunity",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section (Full Width, No Top Margin) */}
      <section data-aos="fade-down"
        className="relative overflow-x-hidden bg-cover bg-center bg-no-repeat w-full"
        style={{
          background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)",
        }}
      >
        <div className="absolute inset-0"></div>
        <div className="relative text-center py-28 md:py-36 px-6">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 text-white animate-fadeIn">
              Secure Your Place at IAMS 2026
            </h1>
            <p className="text-lg md:text-xl text-center text-white max-w-3xl mx-auto mb-12">
              Join{" "}
              <span className="font-semibold text-white">
                hundreds of global industry leaders
              </span>{" "}
              for two days of unparalleled learning and networking in the
              dynamic capital of New Delhi, India.
            </p>
          </div>
        </div>
      </section>

      {/* Passes Section */}
      <div className="container mx-auto px-4 py-20"    data-aos="zoom-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          {passes.map((pass, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-200"
            >
              <h3
                className="text-2xl font-semibold mb-4"
                style={{ color: "rgb(21, 164, 179)" }}
              >
                {pass.name}
              </h3>
              <div className="text-3xl font-bold mb-2">{pass.price}</div>
              {pass.validity && (
                <p className="text-gray-600 mb-4">{pass.validity}</p>
              )}
              {pass.savings && (
                <p className="text-green-600 font-semibold mb-6">
                  {pass.savings}
                </p>
              )}

              <ul className="space-y-3 mb-8">
                {pass.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2 mt-1"
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
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => navigate("/registration-form")}
                className="w-full text-white py-3 rounded font-semibold transition"
                style={{
                  backgroundColor: "rgb(21, 164, 179)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgb(17, 130, 142)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgb(21, 164, 179)")
                }
              >
                Register Now
              </button>
            </div>
          ))}
        </div>

        {/* Important Info */}
        <div className="bg-blue-50 p-8 rounded-lg mb-16"    data-aos="zoom-in">
          <h2
            className="text-2xl font-semibold text-center mb-6"
            style={{ color: "rgb(21, 164, 179)" }}
          >
            Important Information
          </h2>
          <ul className="list-disc pl-5 space-y-3 max-w-2xl mx-auto">
            <li>
              All passes include full conference access, exhibition entry,
              networking meals, awards gala, and networking reception
              invitation.
            </li>
            <li>
              Group discounts apply for 3 or more attendees from the same
              organization.
            </li>
            <li>
              Cancellation policy: Full refund until January 31, 2026; 50%
              refund until February 28, 2026; no refund after March 1, 2026.
            </li>
          </ul>
        </div>

        {/* Bottom Buttons */}
        <div className="text-center">
          <button
            onClick={() => navigate("/registration-form")}
            className="text-white px-8 py-3 rounded-lg font-semibold text-lg transition mr-4"
            style={{
              backgroundColor: "rgb(21, 164, 179)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgb(17, 130, 142)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgb(21, 164, 179)")
            }
          >
            Register Now
          </button>

          <button
            className="bg-white border px-8 py-3 rounded-lg font-semibold text-lg transition"
            style={{
              color: "rgb(21, 164, 179)",
              borderColor: "rgb(21, 164, 179)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgb(240, 250, 250)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "white";
            }}
            onClick={() => navigate("/contact")}
          >
            Contact for Group Booking
          </button>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        .animate-scale-in {
          animation: scaleIn 0.2s ease-out forwards;
        }
        @keyframes scaleIn {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Registration;
