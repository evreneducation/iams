// src/pages/Awards.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Awards = () => {
  const navigate = useNavigate();
  const categories = [
    "Airline Marketing & Brand Leadership",
    "Digital Commerce & Revenue Innovation",
    "Technology, Data & Transformation Excellence",
    "Customer Experience & Operational Excellence",
    "Sustainability & Global Impact",
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
        className="relative overflow-x-hidden bg-cover bg-center bg-no-repeat"
        style={{
          background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)",
        }}
      >
        <div className="absolute inset-0 "></div> {/* overlay */}
        <div className="relative container mx-auto text-center py-28 md:py-36">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fadeIn">
              IAMS 2026 Awards
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white">
              The IAMS Awards Gala is the industry's premier evening of
              recognition, honoring teams and innovations redefining passenger
              experience and driving commercial success.
            </p>
          </div>
          s
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#E6F7F9]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-gray-700">
            Where achievement meets prestige — the IAMS Awards Gala celebrates
            visionary teams and groundbreaking innovations transforming global
            aviation’s commercial landscape.
          </p>
           <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-center py-3
               bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent"
          >
            Why Participate in IAMS Awards?
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
                    background: "linear-gradient(to right, #15A4B3, #0E7785)",
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

      {/* Benefits + Gala Info */}
      {/* Benefits + Gala Info */}
<section className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Benefits Box */}
  <div className="flex flex-col bg-white rounded-2xl shadow-xl p-10 border border-gray-100 h-full">
    <h2
      className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center py-3
         bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent"
    >
      Benefits of Participation
    </h2>

    <div className="flex-1 space-y-6">
      {benefits.map((b, i) => (
        <div
          key={i}
          className="flex items-start p-5 rounded-2xl bg-white shadow-lg border-l-4 transform transition-all duration-500 hover:scale-105 hover:shadow-xl"
          style={{ borderColor: "#15A4B3" }}
        >
          <div
            className="p-4 rounded-full mr-5 flex items-center justify-center text-2xl"
            style={{
              backgroundColor: "rgba(21,164,179,0.15)",
              color: "#15A4B3",
            }}
          >
            {b.icon}
          </div>
          <p className="text-gray-700 text-lg">{b.text}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Gala Information Box */}
  <div className="flex flex-col bg-white rounded-2xl shadow-xl p-10 border border-gray-100 h-full">
    <h2
      className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight text-center py-3
         bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent"
    >
      Gala Information
    </h2>

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

    {/* Optional Button */}
    {/* <button
      className="w-full mt-6 text-white py-4 rounded-2xl font-bold text-lg hover:scale-105 transition transform shadow-lg"
      style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }}
    >
      Book Gala Tickets
    </button> */}
  </div>
</section>

      {/* Categories */}
      <section
        className="py-16 px-6 md:px-12 text-white"
        id="awards-categories"
        style={{
          background: "linear-gradient(135deg, #f4f8f9ff 0%, #f8fbfbff 100%)",
        }}
      >
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight 
               bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent"
          >
            IAMS 2026 Awards — Categories
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="group relative bg-white/10 hover:bg-white/20 transition-all duration-300 rounded-2xl p-6 flex items-center justify-center text-center shadow-lg cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #0E7785 0%, #15A4B3 100%)",
              }}
            >
              <h3 className="text-lg md:text-xl font-semibold leading-snug group-hover:text-[#15A4B3] transition-colors duration-300">
                {cat}
              </h3>
              <span className="absolute inset-x-0 bottom-0 h-1 bg-[#15A4B3] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full"></span>
            </div>
          ))}
        </div>
      </section>

      {/* nominate catagory is herew  */}
      <section className="py-16 px-6 md:px-12 bg-white text-white">
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
              1 December 2025 – 15 February 2026.
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
            className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight 
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
