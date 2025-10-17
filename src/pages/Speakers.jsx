import speakers from "../speaker/data";
import SpeakerCard from "../components/SpeakerCard";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import speakerimage from "../../public/speakers/speaker.jpg";

const Speakers = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // animation happens only once
    });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}

      <section
        data-aos="fade-down"
        className="relative mt-[80px] overflow-hidden bg-cover bg-center bg-no-repeat h-[380px] md:h-[480px]"
        style={{
          backgroundImage: `url(${speakerimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* very light overlay for balance */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/5 to-black/15"></div>

        {/* center text vertically and horizontally */}
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto">
            {/* ultra-subtle glass blur behind text */}
            <div className="bg-white/1 backdrop-blur-[2px] rounded-3xl px-6 py-8 inline-block md:px-10 md:py-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-sm">
                Visionary Speakers
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-2 text-white/90 drop-shadow-sm">
                Hear from the industry's most innovative minds as they share
                insights on the future of aviation marketing, technology, and
                customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center mb-16 mt-[40px]" data-aos="fade-down">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight py-3
             bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent text-center"
        >
          Learn from the Leaders
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          This section is currently being updated as speaker confirmations are
          underway
        </p>
      </div>

      <div className="w-full px-4" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 py-16" data-aos="fade-down">
        <div className="bg-white rounded-xl shadow-lg p-10 mb-16 text-center border border-blue-100">
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight py-3
             bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent text-center"
          >
            Call for Speakers
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700">
            We're seeking visionary leaders to share groundbreaking insights at
            IAMS 2026. If you're redefining aviation marketing, technology, or
            customer experience, we want to hear from you.
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
            Apply to Speak
          </Link>
        </div>

        {/* Benefits Section */}
        {/* Benefits Section */}
        <section
          className="relative overflow-x-hidden bg-cover bg-center bg-no-repeat"
          // style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }}
        >
          <div className="absolute inset-0"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center text-white">
            <h2
              data-aos="fade-down"
              className="text-4xl md:text-5xl font-extrabold mb-12 tracking-tight py-3
             bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent text-center"
              // style={{ color: "rgb(21, 164, 179)" }}
            >
              Speaker Benefits
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Card 1 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)",
                }}
                className="bg-white/15 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white/20 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-6xl font-extrabold text-white mb-4 ">
                  1
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Global Platform
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Share your expertise with international aviation leaders and
                  media.
                </p>
              </div>

              {/* Card 2 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)",
                }}
                className="bg-white/15 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white/20 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-6xl font-extrabold text-white mb-4 ">
                  2
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Networking Access
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Connect with C-level executives and industry innovators.
                </p>
              </div>

              {/* Card 3 */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)",
                }}
                className="bg-white/15 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white/20 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-6xl font-extrabold text-white mb-4 ">
                  3
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Complimentary Pass
                </h3>
                <p className="text-white/90 leading-relaxed">
                  Full access to all summit sessions and networking events.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deadline Section */}
      </div>
    </div>
  );
};

export default Speakers;
