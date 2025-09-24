// components/ArchitectsSection.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InfiniteMovingCards } from "../components/MovingCard.jsx";

const items = [
  {
    name: "Commercial Visionaries",
    title: "Airline C-Suite",
    quote: "C-level executives from leading airlines and airports driving business development, flight scheduling, alliances and unlocking growth frontiers. These strategic leaders shape the future of aviation commerce through innovative partnerships and market expansion.",
  },
  {
    name: "Revenue & E-Commerce Strategists",
    title: "Pricing & Digital Marketing",
    quote: "Game-changers in revenue optimization, pricing, holidays, e-commerce, and digital marketing fuelling profitability. They leverage data analytics and digital transformation to maximize airline revenue streams and customer acquisition.",
  },
  {
    name: "Tech Pioneers",
    title: "AI, ML, Data & Cyber Security",
    quote: "Minds behind disruptive innovations in AI, ML, PSS, NDC, data analysis and cyber security. These innovators are building the technological backbone that will power next-generation aviation operations and customer experiences.",
  },
  {
    name: "CX, CRM & Loyalty Executives",
    title: "Customer Experience",
    quote: "Heads of loyalty, CRM and customer service focused on building lasting relationships and seamless passenger experiences. They transform customer journeys through personalized services and innovative loyalty programs that drive retention.",
  },
  {
    name: "IT & Infrastructure Chiefs",
    title: "Modern Airline Ops",
    quote: "IT professionals implementing cutting-edge technologies to modernize airline operations. From cloud migration to IoT integration, they ensure operational excellence and digital resilience across aviation ecosystems.",
  },
  {
    name: "Market Catalysts",
    title: "Ancillary Services & OTAs",
    quote: "Leaders in ancillary services, fintech, OTAs, hotels, and ground transport—driving new revenue streams and partnerships that are redefining the travel ecosystem. They create integrated solutions that enhance passenger value and airline profitability.",
  },
];

export default function ArchitectsSection() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#f7fbfb] to-[#e6f2f2]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--primary-teal)]">
              An Assembly of Aviation's Architects
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              IAMS 2026 is a carefully curated gathering of the individuals shaping the fabric of modern aviation. You will be seated alongside:
            </p>
          </div>

          {/* Infinite Moving Cards */}
          <div className="relative">
            <InfiniteMovingCards items={items} speed={40} />
            
            {/* Gradient overlays for better UX */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f7fbfb] to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f7fbfb] to-transparent z-10"></div>
          </div>

          <div className="text-center mt-16">
            <Link
              to="/sponsorship"
              className="inline-block bg-gradient-to-r from-[var(--primary-teal)] to-[var(--secondary-teal)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-[var(--secondary-teal)] hover:to-[var(--accent-teal)] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}