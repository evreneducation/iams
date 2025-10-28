import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p className="mb-3">
          We collect information that identifies, relates to, describes, or is capable of being associated with you ("Personal Information").
        </p>
        <h4 className="font-semibold text-[#003B4A] mb-2">A. Information You Provide Directly</h4>
        <ul className="list-disc ml-5 mb-4 space-y-1 text-gray-700">
          <li>Identity and Contact Data: Name, title, company, job function, email address, and phone number.</li>
          <li>Registration Data: Payment details (processed via a third-party gateway), ticket type, dietary requirements.</li>
          <li>Professional Data: Information about your professional background or industry focus.</li>
        </ul>
        <h4 className="font-semibold text-[#003B4A] mb-2">B. Information Collected Automatically</h4>
        <ul className="list-disc ml-5 space-y-1 text-gray-700">
          <li>Technical Data: IP address, browser type, OS, time zone, and device info.</li>
          <li>Usage Data: Pages visited, time on site, and referring site details.</li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <ul className="list-disc ml-5 space-y-1 text-gray-700">
        <li>Service Delivery: Registration, ticketing, networking, and event updates.</li>
        <li>Communication: Handling inquiries and sending essential event communications.</li>
        <li>Marketing: Sending newsletters and promotional materials with consent.</li>
        <li>Analysis: Improving website and event experience.</li>
      </ul>
    ),
  },
  {
    title: "3. How We Share Your Information (Disclosure to Third Parties)",
    content: (
      <>
        <h4 className="font-semibold text-[#003B4A] mb-2">A. Event Sponsors and Partners</h4>
        <p className="mb-2">
          Attendee details (name, job title, company, email) may be shared with IAMS 2026 sponsors for networking and B2B interactions.
        </p>
        <p className="mb-4 italic text-gray-600">
          Opt-out available by emailing <a href="mailto:info@iamsglobal.com" className="text-[#28bccf] hover:underline">info@iamsglobal.com</a>.
        </p>

        <h4 className="font-semibold text-[#003B4A] mb-2">B. Service Providers</h4>
        <ul className="list-disc ml-5 mb-4 space-y-1 text-gray-700">
          <li>Event management and badging systems</li>
          <li>IT and system administration</li>
          <li>Payment processors</li>
        </ul>

        <h4 className="font-semibold text-[#003B4A] mb-2">C. Legal Compliance and Protection</h4>
        <p>We may disclose information as required by law or to protect our rights and attendees’ safety.</p>
      </>
    ),
  },
  {
    title: "4. Data Security and Retention",
    content: (
      <ul className="list-disc ml-5 space-y-1 text-gray-700">
        <li>We employ strong security measures to protect data from unauthorized access.</li>
        <li>Data is retained only as long as necessary (usually up to three years after the event).</li>
      </ul>
    ),
  },
  {
    title: "5. Your Legal Rights",
    content: (
      <ul className="list-disc ml-5 space-y-1 text-gray-700">
        <li>Access, correction, or deletion of your Personal Information.</li>
        <li>Object to processing for direct marketing.</li>
        <li>Contact <a href="mailto:info@iamsglobal.com" className="text-[#28bccf] hover:underline">info@iamsglobal.com</a> to exercise your rights.</li>
      </ul>
    ),
  },
  {
    title: "6. International Data Transfers",
    content: (
      <p>Your data may be processed in India or other countries where our partners operate, ensuring equivalent protection worldwide.</p>
    ),
  },
  {
    title: "7. Changes to this Privacy Policy",
    content: (
      <p>We may update this Privacy Policy periodically. Updates will be posted with a new effective date.</p>
    ),
  },
  {
    title: "8. Contact Information",
    content: (
      <ul className="list-none space-y-1 text-gray-700">
        <li>Email: <a href="mailto:info@iamsglobal.com" className="text-[#28bccf] hover:underline">info@iamsglobal.com</a></li>
        <li>Phone: +91 8929290107</li>
        <li>Address: Traveon Ventures LLP, 128, D-Mall, NSP, Delhi-110034, India</li>
      </ul>
    ),
  },
];

export default function PrivacyPolicy() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12 transition-all">
        <h1 className="text-3xl font-bold text-[#003B4A] text-center mb-4">
          Privacy Policy
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Effective Date: October 28, 2025
        </p>

        <p className="text-gray-700 mb-8">
          Traveon Ventures LLP ("We" or "Our") is the official organizer of IAMS 2026. We are committed
          to protecting your privacy and ensuring that your personal data is handled responsibly.
        </p>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden transition-all bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-[#003B4A] hover:bg-gray-50 transition"
              >
                {section.title}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#28bccf]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#28bccf]" />
                )}
              </button>
              <div
                className={`px-5 pb-5 text-gray-700 leading-relaxed transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm mt-10 text-center">
          © {new Date().getFullYear()} Traveon Ventures LLP. All rights reserved.
        </p>
      </div>
    </section>
  );
}
