
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is IAMS 2026?",
    answer: `IAMS 2026 is the premier global B2B forum dedicated to the commercial transformation of aviation. The summit brings together C-suite leaders and senior decision-makers from airlines, airports, and technology innovators to explore the future of marketing, e-commerce, revenue management, loyalty, distribution, and customer experience in aviation.`,
  },
  {
    question: "Who should attend IAMS 2026?",
    answer: `IAMS 2026 is designed for senior executives and professionals from across the aviation ecosystem, including:
• CEOs, CCOs, COOs, VPs and top decision makers from airlines and airports
• Leaders from travel technology, GDS, and digital distribution platforms
• Heads of e-commerce, alliance, loyalty and digital transformation
• Aviation solution providers, consultants, data science and AI experts`,
  },
  {
    question: "What are the key highlights of IAMS 2026?",
    answer: `• Visionary Keynotes & Panels: Deep insights from global aviation and tech leaders.
• Innovation Showcase: Exhibitions and demos by leading technology providers.
• Awards Gala: Recognizing excellence and innovation across 25 commercial categories.
• Strategic Connect Lounge: Curated B2B networking sessions with decision-makers.
• Masterclass Series: Pre-conference workshops focused on applied innovation and strategy.`,
  },
  {
    question: "What topics will be covered during the summit?",
    answer: `IAMS 2026 will explore the strategic and technological drivers shaping modern aviation commerce, including:
• Airline marketing and e-commerce in the era of personalization
• Dynamic pricing and revenue optimization
• AI, ML, and predictive analytics for business transformation
• Next-gen loyalty, CRM and merchandising strategies
• Distribution modernization: GDS, NDC, and payment ecosystems
• Passenger experience innovation and digital customer engagement
• Sustainability, ESG, and data-driven decision-making`,
  },
  {
    question: "How can I register for the summit?",
    answer: `Registration can be completed online through the official IAMS 2026 website (www.iamsglobal.com).
You can choose between:
• Instant Online Payment (immediate seat confirmation), or
• Provisional Confirmation (15-day hold) — ideal for corporate participants awaiting internal approval.
Early registration is encouraged, as delegate seats and exhibition spaces are limited.`,
  },
  {
    question: "Are there sponsorship or exhibition opportunities?",
    answer: `Yes. IAMS 2026 offers tiered sponsorships (Platinum, Gold, Silver) and à la carte branding options such as Gala Dinner and Lanyard Sponsorships.
Each package is designed to maximize brand visibility, lead generation, and executive access.
Interested organizations can email sponsorship@iamsglobal.com for a customized proposal.`,
  },
  {
    question: "How do I become a speaker or panelist?",
    answer: `Industry experts and senior executives are welcome to express interest by emailing speakers@iamsglobal.com with a short bio and topic preference.
The agenda is curated to balance thought leadership, innovation showcases, and case-based insights across all commercial disciplines.`,
  },
  {
    question: "What are the award categories at IAMS 2026?",
    answer: `The IAMS Awards Gala celebrates 25 categories across marketing, loyalty, e-commerce, technology, and sustainability — recognizing individuals and teams driving aviation’s commercial excellence.
Award nominations will open in December 2025 via the official website.`,
  },
  {
    question: "What is included in the registration fee?",
    answer: `Your delegate pass includes:
• Full access to all conference sessions and panels
• Entry to the Innovation Showcase and Exhibition
• Invitations to networking events and the Awards Gala
• Access to the B2B Connect digital platform for pre-scheduled meetings
• Daily refreshments and lunch during the summit`,
  },
  {
    question: "What are the accommodation options?",
    answer: `Special, preferential rates are reserved for IAMS 2026 delegates at Holiday Inn New Delhi Aerocity, the official host hotel. Bookings can be made through our exclusive delegate portal to access these rates.`,
  },
  {
    question: "Can international participants receive visa support?",
    answer: `Yes, confirmed delegates can request an official visa support letter after completing registration and payment. The IAMS Secretariat will assist with documentation required for Indian business visa applications.`,
  },
  {
    question: "How can I contact the IAMS Secretariat?",
    answer: `For any queries, please reach out to:
📧 info@iamsglobal.com
🌐 www.iamsglobal.com
📍 Traveon Ventures LLP, Delhi, India`,
  },
  {
    question: "Is there a cancellation or refund policy?",
    answer: `Yes. Cancellations received 60 days before the event are eligible for a 75% refund. After this period, substitutions may be made, but refunds will not apply. For provisional confirmations, bookings automatically expire if payment is not completed within 15 days of invoice issuance.`,
  },
  {
    question: "When should I plan to arrive in New Delhi?",
    answer: `Delegates are encouraged to arrive by April 8, 2026, to attend the Pre-Conference Masterclass Series and Welcome Networking Reception in the evening. The main conference runs on April 9–10, 2026.`,
  },
  {
    question: "What is the official dress code for the event?",
    answer: `Business formal or business smart attire is recommended throughout the conference and the Awards Gala evening.`,
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-20 mt-[50px] px-6 bg-gradient-to-b from-[#E9F9FB] via-[#F7FFFF] to-[#E9F9FB]">
      {/* ===== Heading ===== */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent">
          Frequently Asked Questions (FAQs)
        </h2>
        <p className="text-lg md:text-xl font-semibold text-[#003366] mt-2">
          International Aviation Marketing Summit (IAMS 2026)
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-[#0E7785] to-[#15A4B3] rounded-full mx-auto mt-6"></div>
      </div>

      {/* ===== Accordion ===== */}
      <div className="max-w-4xl mx-auto space-y-5">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white/90 backdrop-blur-lg border border-[#15A4B3]/20 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center px-6 py-5 text-left"
            >
              <h3 className="text-lg md:text-xl font-semibold text-[#003366] leading-snug">
                {faq.question}
              </h3>
              {openIndex === i ? (
                <ChevronUp className="w-6 h-6 text-[#0E7785]" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#15A4B3]" />
              )}
            </button>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                openIndex === i ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-700 whitespace-pre-line leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Footer Note ===== */}
     
    </section>
  );
}
