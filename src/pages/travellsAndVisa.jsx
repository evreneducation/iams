import React from "react";

// Icons
const TravelIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const TimeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const TransportIcon = ({ type }) => {
  switch (type) {
    case "subway":
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      );
    case "taxi":
      return (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

// Travel options data
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

const TravelInfo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-6">
            Getting to New Delhi
          </h2>
          <p className="text-xl text-gray-600">From Indira Gandhi International Airport (DEL)</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Transport Options */}
          <div>
            <h3 className="text-3xl font-semibold text-[#003366] mb-8 flex items-center justify-center">
              <TravelIcon />
              <span className="ml-3">Transport Options</span>
            </h3>

            <div className="space-y-6">
              {travelOptions.map((option, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#f8fbff] to-[#f0f9ff] rounded-2xl p-6 border-2 border-[#21d6e0]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    <div className="text-blue-500 flex-shrink-0">
                      <TransportIcon type={option.icon} />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                        <h4 className="text-2xl font-semibold text-[#003366]">{option.mode}</h4>
                        <span className="bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          {option.cost}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3 text-lg flex items-center justify-center sm:justify-start">
                        <TimeIcon />
                        <span className="ml-2">{option.time}</span>
                      </p>
                      <p className="text-gray-700 text-base leading-relaxed">{option.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visa Information */}
          <div>
            <div className="bg-gradient-to-br from-[#e6f7ff] via-[#f0f9ff] to-[#e6f2ff] rounded-2xl p-10 border-2 border-[#0080ff]/30 shadow-xl mx-auto max-w-md">
              <div className="flex items-center mb-6 justify-center">
                <svg className="w-10 h-10 mr-4 text-[#0080ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
                <h3 className="text-3xl font-semibold text-[#003366]">Visa Information</h3>
              </div>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed text-center">
                India requires visas for most international visitors. We strongly recommend starting your application process at least 4-6 weeks before your travel date.
              </p>

              <div className="space-y-5 mb-8">
                <div className="flex items-start p-6 bg-white rounded-2xl border border-[#21d6e0]/30 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#21d6e0] to-[#0080ff] rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-white">
                    <CheckIcon />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#003366] mb-1">eVisa Available</h4>
                    <p className="text-gray-600">For citizens of 169 countries</p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-white rounded-2xl border border-[#21d6e0]/30 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#21d6e0] to-[#0080ff] rounded-xl flex items-center justify-center mr-4 flex-shrink-0 text-white">
                    <TimeIcon />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#003366] mb-1">Processing Time</h4>
                    <p className="text-gray-600">3-5 business days for eVisas</p>
                  </div>
                </div>
              </div>

              <a
                href="https://indianvisaonline.gov.in/evisa/tvoa.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white py-5 rounded-xl font-semibold text-lg hover:from-[#0080ff] hover:to-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl text-center"
              >
                Apply for Indian Visa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelInfo;
