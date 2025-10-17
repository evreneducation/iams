import React from "react";
import { Link } from "react-router-dom";

// Icons
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

// HotelPartners Component
const HotelPartners = ({ hotels }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f0f9ff] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
              Hotel Partners
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We have secured exclusive rates with several 5-star hotels near
              the venue. Book through our portal to receive special discounts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-[#21d6e0]/20"
              >
                {/* Hotel Image */}
                <div className="h-56 bg-gray-200 relative overflow-hidden group">
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
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-[#003366]">
                      {hotel.name}
                    </h3>
                    {hotel.price && (
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#21d6e0] to-[#0080ff] bg-clip-text text-transparent">
                        {hotel.price}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center text-gray-600 mb-5">
                    <svg
                      className="w-6 h-6 text-blue-500"
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
                    <span className="ml-2 text-sm">{hotel.distance}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
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
          </div>

          <div className="text-center">
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
      </div>
    </section>
  );
};

export default HotelPartners;
