import speakers from "../speaker/data";
import SpeakerCard from "../components/SpeakerCard";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

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
      {/* <section className="bg-[#15A4B3] to-blue-700 text-white py-26 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Visionary Speakers</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Hear from the industry's most innovative minds as they share
            insights on the future of aviation marketing, technology, and
            customer experience.
          </p>
        </div>
      </section> */}


<section
data-aos="fade-down"
          className="relative overflow-x-hidden bg-cover bg-center bg-no-repeat"
          style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }}
        >
          <div className="absolute inset-0 "></div> {/* overlay */}
          <div className="relative container mx-auto text-center py-28 md:py-36">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fadeIn">
                    Visionary Speakers
              </h1>
               <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-white">
            Hear from the industry's most innovative minds as they share
            insights on the future of aviation marketing, technology, and
            customer experience.
          </p>
            </div>
          </div>
        </section>



      <div className="w-full px-4" data-aos="zoom-in">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 py-15">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto px-4 py-16" data-aos="fade-down">
        <div className="bg-white rounded-xl shadow-lg p-10 mb-16 text-center border border-blue-100">
          <h2 className="text-3xl font-semibold mb-6 text-[#15A4B3]">
            Call for Speakers
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-700">
            We're seeking visionary leaders to share groundbreaking insights at
            IAMS 2026. If you're redefining aviation marketing, technology, or
            customer experience, we want to hear from you.
          </p>
          <button className="bg-[#15A4B3] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition transform hover:-translate-y-1">
            Apply to Speak
          </button>
        </div>

        {/* Benefits Section */}
    {/* Benefits Section */}
<section
  className="relative overflow-x-hidden bg-cover bg-center bg-no-repeat"
  // style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }}
>
  <div className="absolute inset-0"></div>

  <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 text-center text-white">
    
     <h2 data-aos="fade-down" className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 text-center py-[20px]" style={{ color: "rgb(21, 164, 179)" }}>
             Speaker Benefits
          </h2>

    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-10"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      {/* Card 1 */}
      <div style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }} className="bg-white/15 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white/20 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="text-6xl font-extrabold text-white mb-4 ">
          1
        </div>                 
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Global Platform
        </h3>
        <p className="text-white/90 leading-relaxed">
          Share your expertise with international aviation leaders and media.
        </p>
      </div>

      {/* Card 2 */}
      <div style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }}  className="bg-white/15 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white/20 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
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
      <div style={{ background: "linear-gradient(135deg, #15A4B3 0%, #0E7785 100%)" }}  className="bg-white/15 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white/20 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
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
        <div className="bg-[#15A4B3] text-white rounded-xl p-10 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Speaker Application Deadline
          </h2>
          <p className="text-2xl mb-9 font-light">
            Submit your proposal by October 31 , 2025
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-100 transition">
            Submit Proposal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
