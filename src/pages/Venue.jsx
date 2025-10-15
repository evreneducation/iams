import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import venueimage from "../../public/venue/venuefront.jpg";
// SVG Icons
import AOS from "aos";
import "aos/dist/aos.css";


const PostEventTours = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const delhiTourImages = [
    "/venue/redfortdelhi.jpg",
    "/venue/indiagate.jpg",
    "/venue/lotustample.jpg",
    "/venue/qutubminar.jpg",
    "/venue/akshardham.jpg",
  ];

  // Auto-rotate images every 2 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === delhiTourImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, delhiTourImages.length]);

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextImage = () => {
    setCurrentImageIndex((current) =>
      current === delhiTourImages.length - 1 ? 0 : current + 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevImage = () => {
    setCurrentImageIndex((current) =>
      current === 0 ? delhiTourImages.length - 1 : current - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return {
    currentImageIndex,
    goToImage,
    nextImage,
    prevImage,
    delhiTourImages,
  };
};

const Venue = () => {

  useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        easing: "ease-in-out", // easing function
        once: true, // animation happens only once
      });
    }, []);
  

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("venue");
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible((prev) => ({ ...prev, [key]: true }));
              }
            });
          },
          { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, [activeTab]);

  const travelOptions = [
    {
      mode: "Metro",
      time: "25 minutes",
      cost: "$2-3",
      description: "Direct metro line from airport to venue station",
      icon: "subway",
    },
    {
      mode: "Taxi",
      time: "35-50 minutes",
      cost: "$15-25",
      description: "Pre-paid taxis available at airport arrivals",
      icon: "taxi",
    },
    {
      mode: "Hotel Shuttle",
      time: "40 minutes",
      cost: "Complimentary",
      description: "Available for guests of partner hotels",
      icon: "shuttle",
    },
  ];

  // Use PostEventTours logic
  const {
    currentImageIndex,
    goToImage,
    nextImage,
    prevImage,
    delhiTourImages,
  } = PostEventTours();

  const postEventPackages = [
    {
      title: "Delhi: The Majestic Capital",
      duration: "6-Hour City Tour",
      highlights: [
        "Red Fort & Chandni Chowk",
        "India Gate & Rajpath",
        "Qutub Minar",
        "Lotus Temple",
        "Local Market Experience",
      ],
      images: delhiTourImages,
      isCarousel: true,
    },
    {
      title: "Taj Mahal: Eternal Wonder",
      duration: "12 Hours Day Tour",
      highlights: [
        "Sunrise at Taj Mahal",
        "Agra Fort",
        "Local Craft Demonstrations",
        "Traditional Lunch",
        "Professional Guide",
      ],
      images: [
        // <-- use an array of images
        "/venue/taj4.jpg",
        "/venue/taj1.jpg",
        "/venue/taj2.jpg",
        "/venue/agra1.jpg",
        "/venue/taj3.jpg",
      ],
      isCarousel: true, // <-- set to true
    },
  ];

  const TransportIcon = ({ type }) => {
    switch (type) {
      case "subway":
        return (
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        );
      case "taxi":
        return (
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
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-4 4m4-4l-4-4m4 4H4"
            />
          </svg>
        );
      case "shuttle":
        return (
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
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-51">
      {/* Hero Section with Updated Colors and Height */}
    <section className="relative overflow-hidden" data-aos="fade-down">
  <div className="absolute inset-0 bg-gradient-to-br from-[#0F7F8A] via-[#1AA6B5] to-[#94E0E5]"></div>

<section
  className="relative flex items-center justify-center text-center text-white overflow-hidden"
  style={{
   background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
 // warm sunset to bluish tone
  }}
>
  <div
    className="w-[75%] h-[500px] md:h-[550px] lg:h-[600px] bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${venueimage})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}
  ></div>

  {/* Overlay for smooth transition & readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#00000033] via-transparent to-transparent"></div>

  {/* Text content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Venue & Travel</h1>
    <p className="text-lg md:text-2xl font-light">
      Welcome to New Delhi & Holiday Inn New Delhi Aerocity
    </p>
  </div>
</section>

</section>

      {/* Venue Information */}
      {/* {activeTab === "venue" && ( */}
      <section
        className="py-20 bg-white"
        ref={(el) => (sectionRefs.current.venue = el)}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div
                className={`transition-all duration-1000 ${
                  isVisible.venue
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-8">
                  About the Venue
                </h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Located minutes from IGI Airport and steps from the Aerocity
                  Metro, the Holiday Inn New Delhi Aerocity, ensures delegates
                  seamless global and local connectivity. Experience 5-star
                  comfort, featuring exquisite multi-cuisine dining and 8,000
                  sq. ft. of dedicated MICE space for collaboration. With 265
                  elegantly designed rooms and suites, every delegate is assured
                  a peaceful and luxurious stay.
                </p>

                <div className="bg-gradient-to-br from-[#e6f7ff] to-[#f0f9ff] p-8 rounded-2xl border border-[#21d6e0]/30 shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#003366] mb-6 flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 text-[#21d6e0]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Venue Highlights
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "2-minute from IGI Airport and Aerocity Metro",
                      "Premier 5-star venue with dedicated event spaces.",
                      "265 elegantly designed rooms and suites.",
                      "Exquisite dining & networking experiences.",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-lg text-gray-700 animate-fadeIn"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-br from-[#21d6e0] to-[#0080ff] rounded-full mr-4 animate-pulse"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Map and Address */}
              <div
                className={`space-y-6 transition-all duration-1000 ${
                  isVisible.venue
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
                style={{ transitionDelay: "0.3s" }}
              >
                {/* Venue Image */}
                <div className="relative mt-[200px] bg-gray-200 rounded-2xl h-96 overflow-hidden border-2 border-[#0080ff]/30 shadow-xl group hover:shadow-2xl transition-all duration-300 p-[5px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.655320252194!2d77.1228015!3d28.550078199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c6a3301b9a3%3A0x49055efdcccb35d9!2sHoliday%20Inn%20New%20Delhi%20Int&#39;L%20Airport%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sin!4v1760416843948!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transform group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300 pointer-events-none"></div>
                </div>

                {/* Address Card */}
                <div className="bg-white border-2 border-[#21d6e0]/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-start mb-4">
                    <svg
                      className="w-8 h-8 mr-4 text-[#21d6e0] mt-1"
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
                    <div>
                      <h3 className="text-2xl font-semibold text-[#003366] mb-4">
                        Holiday Inn New Delhi Aerocity
                      </h3>
                      <div className="space-y-2 text-gray-700">
                        <a
                          href="https://maps.app.goo.gl/FnFfspPfjwPjmhTs8"
                          target="_blank"
                          className="text-lg font-semibold hover:text-blue-600"
                        >
                          Asset Area 12 Hospitality District Aero City,
                          <p className="text-base">New Delhi 110037 India</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* )} */}

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mt-5 mb-25"  data-aos="fade-down">
        <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6 text-center py-[20px]">
          Travel & Accommodation
        </h2>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Hotel Partners */}
          <div className="bg-gradient-to-br from-blue-40 to-blue-100 border border-blue-200 rounded-2xl p-3 shadow-md transition-all transform hover:scale-[1.04] hover:shadow-lg duration-300 flex flex-col">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M9 21V10m6 11V10M5 21h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v13a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-blue-900">
                Hotel Stay
              </h3>
            </div>
            <p className="text-gray-600 mb-2 pt-1">
              We have secured a preferential rate with Holiday Inn New Delhi
              Aerocity exclusively reserved for IAMS 2026 delegates. Book
              through our official portal to avail this exclusive offer.
            </p>
          </div>

          {/* Getting There */}
          <div className="bg-gradient-to-br from-blue-40 to-blue-100 border border-blue-200 rounded-2xl p-3 shadow-md transition-all transform hover:scale-[1.04] hover:shadow-lg duration-300 flex flex-col">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.5 7.5l7.5 7.5m0 0L18 18m0-3l1.5 1.5M4.5 15l6-6m-6 0l6 6"
                />
              </svg>
              <h3 className="text-lg font-semibold text-blue-900">
                Getting There
              </h3>
            </div>
            <p className="text-gray-600 mb-2 pt-1">
              Holiday Inn New Delhi Aerocity is minutes from Delhi International
              (IGI) Airport and seamlessly connected to all major business hubs
              by the Aerocity Metro.
            </p>
          </div>

          {/* Visa Information */}
          <div className="bg-gradient-to-br from-blue-40 to-blue-100 border border-blue-200 rounded-2xl p-3 shadow-md transition-all transform hover:scale-[1.04] hover:shadow-lg duration-300 flex flex-col">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 text-blue-600 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 11c0 .828-.895 1.5-2 1.5s-2-.672-2-1.5.895-1.5 2-1.5 2 .672 2 1.5zM17 7h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m-2 0H9m0 0H7a2 2 0 01-2-2V9a2 2 0 012-2h2m2 0h4"
                />
              </svg>
              <h3 className="text-lg font-semibold text-blue-900">
                Visa Information
              </h3>
            </div>
            <p className="text-gray-600 mb-2 pt-1">
              Entry into India requires a Visa for most international delegates.
              To guarantee timely processing, we strongly advise initiating your
              application earlier and consulting the official guidelines.
            </p>
          </div>
        </div>
      </div>

      {/* Post-Event Tours */}
      {/* {activeTab === "tours" && ( */}
      <section
        className="py-20 bg-gradient-to-br from-[#f0f9ff] to-white"
        ref={(el) => (sectionRefs.current.tours = el)}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div
              className="text-center mb-16 transition-all duration-1000"
              
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                Post-Event Packages
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Extend your stay and discover the timeless beauty of India’s
                cultural treasures. Our curated excursions are exclusive and
                stress-free, designed to deliver exceptional luxury and comfort
                for a perfect, memorable conclusion to your time in New Delhi.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16"   data-aos="zoom-in">
              {postEventPackages.map((tour, index) => (
                <div
                  key={index}
                
                  className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-[#21d6e0]/30"
                >
                  {/* Tour Image Section */}
                  <div className="h-80 bg-gray-200 relative overflow-hidden group">
                    {tour.isCarousel ? (
                      // Carousel for Delhi Tour
                      <div className="relative w-full h-full">
                        <div className="w-full h-full overflow-hidden">
                          <img
                            src={tour.images[currentImageIndex]}
                            alt={`${tour.title} - Image ${
                              currentImageIndex + 1
                            }`}
                            className="w-full h-full object-cover bg-black transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        {/* Navigation Arrows */}
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 hover:scale-110 shadow-lg"
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
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-all duration-200 hover:scale-110 shadow-lg"
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
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                          {tour.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => goToImage(idx)}
                              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                idx === currentImageIndex
                                  ? "bg-white scale-125"
                                  : "bg-white/60 hover:bg-white/80"
                              }`}
                            />
                          ))}
                        </div>

                        {/* Image Counter */}
                        <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs">
                          {currentImageIndex + 1} / {tour.images.length}
                        </div>
                      </div>
                    ) : (
                      // Single Image for Taj Mahal Tour
                      <img
                        src={tour.image}
                        alt={tour.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg px-5 py-3 rounded-xl">
  <h3 className="text-xl font-bold text-white drop-shadow-sm">
    {tour.title}
  </h3>
  <p className="text-sm text-[#b8e0ff] font-semibold">
    {tour.duration}
  </p>
</div>

                  </div>

                  {/* Tour Details (same as before) */}
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-4xl font-bold bg-gradient-to-r from-[#21d6e0] to-[#0080ff] bg-clip-text text-transparent">
                        {tour.price}
                      </span>
                      <span className="bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {tour.duration}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold text-[#003366] mb-5 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-[#21d6e0]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Tour Highlights:
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {tour.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-700 text-base"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-[#21d6e0] to-[#0080ff] rounded-full mr-4 mt-2 flex-shrink-0 animate-pulse"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* <button className="w-full bg-gradient-to-r from-[#8ed0d8] to-[#15A4B3] text-white py-5 rounded-xl font-semibold text-lg hover:from-[#0080ff] hover:to-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                      Book This Tour
                    </button> */}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-[#e6f7ff] to-[#f0f9ff] rounded-2xl p-8 border border-[#21d6e0]/30">
              <p className="text-gray-700 text-lg mb-6 flex items-center justify-center">
                <svg
                  className="w-6 h-6 mr-2 text-[#21d6e0]"
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
                All tours include professional guides, transportation, and
                entrance fees
              </p>
              <button
                className="bg-gradient-to-r from-[#8ed0d8] to-[#15A4B3] text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-[#15A4B3] hover:to-[#8ed0d8] transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl"
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Contact Tour Coordinator
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* )} */}
    </div>
  );
};

export default Venue;
