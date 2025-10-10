import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

// SVG Icons
const LocationIcon = () => (
  <svg
    className="w-6 h-6"
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
);

const HotelIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const TravelIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const TourIcon = () => (
  <svg
    className="w-6 h-6"
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
);

const StarIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CheckIcon = () => (
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
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const TimeIcon = () => (
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
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const PostEventTours = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const delhiTourImages = [
    "/venue/5.jpeg",
    "/venue/6.jpeg",
    "/venue/7.jpg",
    "/venue/8.jpg",
    "/venue/9.jpg",
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

  const hotelPartners = [
    {
      name: "The Imperial New Delhi",
      distance: "2.5 km from venue",
      rating: "5",
      // price: "$250/night",
      features: ["Free WiFi", "Swimming Pool", "Spa", "3 Restaurants"],
      image: "/venue/1.jpg",
    },
    {
      name: "Taj Palace",
      distance: "3.1 km from venue",
      rating: "5",
      // price: "$280/night",
      features: [
        "Business Center",
        "Fitness Center",
        "4 Dining Options",
        "Airport Shuttle",
      ],
      image: "/venue/2.jpg",
    },
    {
      name: "The Lalit New Delhi",
      distance: "4.2 km from venue",
      // price: "$200/night",
      features: [
        "Conference Facilities",
        "Pool",
        "Multiple Cuisines",
        "24/7 Room Service",
      ],
      image: "/venue/3.jpg",
    },
  ];

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
      // price: "$75 per person",
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
      // price: "$150 per person",
      image: "/venue/4.jpeg",
      isCarousel: false,
    },
  ];

  // const navigationItems = [
  //   { id: "venue", label: "Venue Info", icon: <LocationIcon /> },
  //   { id: "accommodation", label: "Hotels", icon: <HotelIcon /> },
  //   { id: "travel", label: "Travel", icon: <TravelIcon /> },
  //   { id: "tours", label: "Post-Event Tours", icon: <TourIcon /> },
  // ];

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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Updated Colors and Height */}
      <section className="relative overflow-hidden">
        {/* Updated Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-cyan-600 to-blue-500"></div>
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -left-20 top-1/2 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <section className="relative overflow-x-hidden">
          <div className="relative py-32 md:py-40">
            {/* Increased height */}
            <div className="container mx-auto text-center">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#003366] animate-fadeIn">
                  Venue & Travel
                </h1>
                <p
                  className="text-2xl md:text-3xl text-white font-light mb-8 animate-fadeIn"
                  style={{ animationDelay: "0.2s" }}
                >
                  Welcome to New Delhi & The Yashobhoomi
                </p>
                <p
                  className="text-xl text-white max-w-3xl mx-auto animate-fadeIn"
                  style={{ animationDelay: "0.4s" }}
                >
                  India's Premier Convention Center - A Symbol of Global
                  Connection and Progress
                </p>
              </div>
            </div>
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
                    About Yashobhoomi
                  </h2>
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    Located in the heart of New Delhi, Yashobhoomi is a
                    state-of-the-art facility designed for world-class events.
                    Its modern architecture and cutting-edge technology provide
                    the perfect backdrop for innovation and collaboration in the
                    aviation industry.
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
                        "State-of-the-art conference facilities",
                        "High-speed WiFi throughout",
                        "Multiple breakout rooms",
                        "Exhibition hall capacity: 5,000+ attendees",
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
                  <div className="relative bg-gray-200 rounded-2xl h-96 overflow-hidden border-2 border-[#0080ff]/30 shadow-xl group hover:shadow-2xl transition-all duration-300">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224294.63237058575!2d76.74146629453124!3d28.55163130000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1a509578bb01%3A0xc4f9b6f167e3d164!2sYashoBhoomi%20Dwarka%20Sector-25!5e0!3m2!1sen!2sin!4v1759814488470!5m2!1sen!2sin"
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
                          Location Details
                        </h3>
                        <div className="space-y-2 text-gray-700">
                          <a
                            href="https://maps.app.goo.gl/FnFfspPfjwPjmhTs8"
                            target="_blank"
                            className="text-lg font-semibold hover:text-blue-600"
                          >
                            Yashobhoomi Convention Center
                            <p className="text-base">
                              Dwarka Sector 25, New Delhi
                            </p>
                          </a>

                          <p className="text-base">Delhi 110077, India</p>
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


<div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mt-16">
  <h2 className="text-2xl md:text-3xl font-bold font-bold text-[#003366] mb-6 text-center">Travel & Accommodation</h2>
  
  <div className="grid gap-6 md:grid-cols-3">
    {/* Hotel Partners */}
    <div className="bg-gradient-to-br from-blue-40 to-blue-100 border border-blue-200 rounded-2xl p-6 shadow-md transition-all transform hover:scale-[1.04] hover:shadow-lg duration-300 flex flex-col h-full">
      <div className="flex items-center mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M9 21V10m6 11V10M5 21h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v13a2 2 0 002 2z" />
        </svg>
        <h3 className="text-lg font-semibold text-blue-900">Hotel Partners</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow py-[30px]">
        We have secured exclusive rates with several 5-star hotels near the venue.
        Book through our portal to receive a discount.
      </p>
     <button className="mt-auto px-5 py-2 bg-blue-600 text-white font-medium rounded-lg border border-blue-500 hover:bg-blue-700 transition-colors duration-300"
      onClick={()=>{
         navigate("/hotelpartner")
      }}>
  Book Your Hotel
</button>
    </div>

    {/* Getting There */}
    <div className="bg-gradient-to-br from-blue-40 to-blue-100 border border-blue-200 rounded-2xl p-6 shadow-md transition-all transform hover:scale-[1.04] hover:shadow-lg duration-300 flex flex-col h-full">
      <div className="flex items-center mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.5 7.5l7.5 7.5m0 0L18 18m0-3l1.5 1.5M4.5 15l6-6m-6 0l6 6" />
        </svg>
        <h3 className="text-lg font-semibold text-blue-900">Getting There</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow py-[30px]">
        Yashobhoomi is easily accessible from Indira Gandhi International Airport (DEL).
        Find details on transport options.
      </p>
     <button className="mt-auto px-5 py-2 bg-blue-600 text-white font-medium rounded-lg border border-blue-500 hover:bg-blue-700 transition-colors duration-300"
      onClick={()=>{
         navigate("/travel-info")
      }}>
      View Transport Options
</button>
    </div>

    {/* Visa Information */}
    <div className="bg-gradient-to-br from-blue-40 to-blue-100 border border-blue-200 rounded-2xl p-6 shadow-md transition-all transform hover:scale-[1.04] hover:shadow-lg duration-300 flex flex-col h-full">
      <div className="flex items-center mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 .828-.895 1.5-2 1.5s-2-.672-2-1.5.895-1.5 2-1.5 2 .672 2 1.5zM17 7h2a2 2 0 012 2v8a2 2 0 01-2 2h-2m-2 0H9m0 0H7a2 2 0 01-2-2V9a2 2 0 012-2h2m2 0h4" />
        </svg>
        <h3 className="text-lg font-semibold text-blue-900">Visa Information</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow py-[30px]">
        India requires visas for most international visitors. We strongly recommend starting
        your application process early.
      </p>
      <button className="mt-auto px-5 py-2 bg-blue-600 text-white font-medium rounded-lg border border-blue-500 hover:bg-blue-700 transition-colors duration-300"
       onClick={()=>{
         window.location.href="https://indianvisaonline.gov.in/evisa/tvoa.html"
      }} target="_blank">
  Official India Visa Portal
  
</button>
    </div>
  </div>
</div>



      {/* Accommodation Section */}
      {/* {activeTab === "accommodation" && ( */}
        {/* <section
          className="py-20 bg-gradient-to-br from-[#f0f9ff] to-white"
          ref={(el) => (sectionRefs.current.accommodation = el)}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div
                className={`text-center mb-16 transition-all duration-1000 ${
                  isVisible.accommodation
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                  Hotel Partners
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  We have secured exclusive rates with several 5-star hotels
                  near the venue. Book through our portal to receive special
                  discounts.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {hotelPartners.map((hotel, index) => (
                  <div
                    key={index}
                    className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-[#21d6e0]/20 ${
                      isVisible.accommodation
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 0.2}s` }}
                  >
                    {/* Hotel Image */}
                    {/* <div className="h-56 bg-gray-200 relative overflow-hidden group">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <div className="flex items-center">
                          <StarIcon />
                          <span className="ml-1 text-sm font-semibold text-gray-800">
                            {hotel.rating}
                          </span>
                        </div>
                      </div>
                    </div> */}

                    {/* <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold text-[#003366]">
                          {hotel.name}
                        </h3>
                        <span className="text-2xl font-bold bg-gradient-to-r from-[#21d6e0] to-[#0080ff] bg-clip-text text-transparent">
                          {hotel.price}
                        </span>
                      </div>

                      <div className="flex items-center text-gray-600 mb-5">
                        <LocationIcon />
                        <span className="ml-2 text-sm">{hotel.distance}</span>
                      </div> */}

                      {/* <ul className="space-y-3 mb-6">
                        {hotel.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-700 text-sm"
                          >
                            <CheckIcon />
                            <span className="ml-2">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button className="w-full bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white py-4 rounded-xl font-semibold hover:from-[#0080ff] hover:to-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div> */}

              {/* <div className="text-center">
                <Link
                  to="/hotel-booking"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#003366] to-[#004080] text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-[#004080] hover:to-[#003366] transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl"
                >
                  View All Hotel Options
                  <svg
                    className="w-6 h-6 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div> */}
        {/* </section> */}
      {/* )} */}









      {/* Travel Information */}
      {/* {activeTab === "travel" && ( */}
        {/* <section
          className="py-20 bg-white"
          ref={(el) => (sectionRefs.current.travel = el)}
        > */}
          {/* <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div
                className={`text-center mb-16 transition-all duration-1000 ${
                  isVisible.travel
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                  Getting to New Delhi
                </h2>
                <p className="text-xl text-gray-600">
                  From Indira Gandhi International Airport (DEL)
                </p>
              </div> */}

              {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Travel Options */}
                {/* <div
                  className={`transition-all duration-1000 ${
                    isVisible.travel
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-20 opacity-0"
                  }`}
                >
                  <h3 className="text-3xl font-semibold text-[#003366] mb-8 flex items-center">
                    <TravelIcon />
                    <span className="ml-3">Transport Options</span>
                  </h3>

                  <div className="space-y-6">
                    {travelOptions.map((option, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-[#f8fbff] to-[#f0f9ff] rounded-2xl p-6 border-2 border-[#21d6e0]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-blue-500 flex-shrink-0">
                            <TransportIcon type={option.icon} />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                              <h4 className="text-2xl font-semibold text-[#003366]">
                                {option.mode}
                              </h4>
                              <span className="bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                                {option.cost}
                              </span>
                            </div>
                            <p className="text-gray-600 mb-3 text-lg flex items-center">
                              <TimeIcon />
                              <span className="ml-2">{option.time}</span>
                            </p>
                            <p className="text-gray-700 text-base leading-relaxed">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visa Information */}
                {/* <div
                  className={`transition-all duration-1000 ${
                    isVisible.travel
                      ? "translate-x-0 opacity-100"
                      : "translate-x-20 opacity-0"
                  }`}
                  style={{ transitionDelay: "0.3s" }}
                >
                  <div className="bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e6f2ff] rounded-2xl p-10 border-2 border-[#0080ff]/30 shadow-xl h-full">
                    <div className="flex items-center mb-6">
                      <svg
                        className="w-10 h-10 mr-4 text-[#0080ff]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        />
                      </svg>
                      <h3 className="text-3xl font-semibold text-[#003366]">
                        Visa Information
                      </h3>
                    </div>

                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      India requires visas for most international visitors. We
                      strongly recommend starting your application process at
                      least 4-6 weeks before your travel date.
                    </p>

                    <div className="space-y-5 mb-8">
                      <div className="flex items-start p-6 bg-white rounded-2xl border border-[#21d6e0]/30 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#21d6e0] to-[#0080ff] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                          <CheckIcon />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-[#003366] mb-1">
                            eVisa Available
                          </h4>
                          <p className="text-gray-600">
                            For citizens of 169 countries
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start p-6 bg-white rounded-2xl border border-[#21d6e0]/30 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#21d6e0] to-[#0080ff] rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                          <TimeIcon />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-[#003366] mb-1">
                            Processing Time
                          </h4>
                          <p className="text-gray-600">
                            3-5 business days for eVisas
                          </p>
                        </div>
                      </div>
                    </div> */}

                    {/* <a
                      href="https://indianvisaonline.gov.in/evisa/tvoa.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white py-5 rounded-xl font-semibold text-lg hover:from-[#0080ff] hover:to-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-center"
                    >
                      Apply for Indian Visa
                    </a>
                  </div>
                </div> */}
              {/* </div> */} 
            {/* // </div> */}
          {/* // </div> */} 
        {/* // </section> */}
      {/* )} */}





      {/* Post-Event Tours */}
      {/* {activeTab === "tours" && ( */}
        <section
          className="py-20 bg-gradient-to-br from-[#f0f9ff] to-white"
          ref={(el) => (sectionRefs.current.tours = el)}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div
                className={`text-center mb-16 transition-all duration-1000 ${
                  isVisible.tours
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-10 opacity-0"
                }`}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
                  Post-Event Packages
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Extend your journey and discover the timeless beauty of
                  India's cultural treasures
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
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
                          <img
                            src={tour.images[currentImageIndex]}
                            alt={`${tour.title} - Image ${
                              currentImageIndex + 1
                            }`}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />

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
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                        <h3 className="text-xl font-bold text-gray-800">
                          {tour.title}
                        </h3>
                        <p className="text-sm text-[#0080ff] font-semibold">
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

                      <button className="w-full bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white py-5 rounded-xl font-semibold text-lg hover:from-[#0080ff] hover:to-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                        Book This Tour
                      </button>
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
                <button className="bg-gradient-to-r from-[#003366] to-[#004080] text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-[#004080] hover:to-[#003366] transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl">
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
