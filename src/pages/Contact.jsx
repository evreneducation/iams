import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMail } from "react-icons/fi";
import contact from "../../public/contact/contact.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      easing: "ease-in-out", // easing function
      once: true, // animation happens only once
    });
  }, []);

  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    inquiry: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false); // loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    setIsLoading(true); // start loading
    try {
      const response = await axios.post(
        "https://iamsbackend.onrender.com/api/iams/sendemail",
        {
          name: data.name,
          email: data.email,
          company: data.company,
          inquiry: data.inquiry, // match backend field
          message: data.message,
        }
      );

      toast.success("Email Sent SucessFully");
      setData({ name: "", email: "", company: "", inquiry: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send email!");
    } finally {
      setIsLoading(false); // stop loading
    }
  };

  useEffect(() => {
    gsap.from(".contact-banner", {
      backgroundPosition: "0% 50%",
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.from(".form-element", {
      y: 30,
      stagger: 0.15,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".contact-banner",
        start: "top center",
      },
    });

    gsap.to(".contact-item", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      stagger: 0.2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      <section
        data-aos="fade-down"
        className="relative my-[80px] overflow-x-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contact})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 "></div> {/* overlay */}
        <div className="relative container mx-auto text-center py-32 md:py-40">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fadeIn">
              Contact Us
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Connect with our team to explore participation, sponsorship,
              exhibition, or award opportunities. We’re here to help you
              maximize your presence and impact at{" "}
              <span className="text-white text-2xl">IAMS 2026.</span>
            </p>
          </div>
        </div>
      </section>

      <section
        className="contact-banner relative min-h-[90vh] flex items-center py-30 px-4 md:px-12 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #ffffffff 0%, #ffffffff 100%)",
        }}
      >
        {/* Radial Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.12) 0%, transparent 50%)",
          }}
        ></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-2xl font-semibold mb-2 opacity-90">
                Ready to Transform
              </h2>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight bg-clip-text">
                Get In Touch
              </h1>
              <p className="text-lg opacity-80 max-w-md">
                We're here to help. Please reach out to the appropriate
                department below, and a member of our team will get back to you
                shortly.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <FiMail />,
                  title: "General Inquiries",
                  text: "info@iamsglobal.com",
                },
                {
                  icon: <FiMail />,
                  title: "Sponsorship & Exhibition",
                  text: "sponsorship@iamsglobal.com",
                },
                {
                  icon: <FiMail />,
                  title: "Speaker Opportunities",
                  text: "speakers@iamsglobal.com",
                },
                {
                  icon: <FiMail />,
                  title: "Media & Press",
                  text: "media@iamsglobal.com",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="contact-item flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/30 shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:bg-white/20"
                >
                  <div className="flex items-center justify-center min-w-[50px] h-[50px] rounded-full bg-white/25 text-2xl p-2">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block text-lg font-semibold mb-1">
                      {item.title}
                    </span>
                    <p className="opacity-90">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div
            data-aos="fade-left"
            className="form-wrapper p-6 md:p-8 rounded-3xl bg-white/15 backdrop-blur-[20px] border border-white/40 shadow-[0_0_25px_rgba(0,0,0,0.3)]"
          >
            <h3
              className="text-3xl font-bold mb-6 text-center form-element"
              style={{ color: "#000" }}
            >
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full py-3 bg-white/10 border-b border-white/40 text-black placeholder-black/50 focus:outline-none rounded-md px-3 form-element"
              />
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full py-3 bg-white/10 border-b border-white/40 text-black placeholder-black/50 focus:outline-none rounded-md px-3 form-element"
              />
              <input
                type="text"
                name="company"
                value={data.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full py-3 bg-white/10 border-b border-white/40 text-black placeholder-black/50 focus:outline-none rounded-md px-3 form-element"
              />
              <select
                name="inquiry"
                value={data.inquiry}
                onChange={handleChange}
                required
                className="w-full py-3 px-3 rounded-md bg-white/10 text-black border-b border-white/40 focus:outline-none form-element"
              >
                <option value="" disabled>
                  Select Inquiry Type
                </option>
                <option value="General">General</option>
                <option value="Sponsorship & exhibition">
                  Sponsorship & exhibition
                </option>
                <option value="Awards">Awards</option>
                <option value="Speaker">Speaker</option>
                <option value="Social media & Press">
                  Social media & Press
                </option>
              </select>
              <textarea
                name="message"
                value={data.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="4"
                className="w-full py-3 bg-white/10 border-b border-white/40 text-black placeholder-black/50 focus:outline-none rounded-md px-3 resize-none form-element"
              ></textarea>

              <button
                type="submit"
                className="py-3 px-8 rounded-full font-bold uppercase tracking-wide overflow-hidden text-white transition-all duration-300 hover:scale-105 flex justify-center items-center gap-2"
                style={{
                  background: "linear-gradient(to right, #00f2fe, #4facfe)",
                  boxShadow: "0 0 15px rgba(0, 242, 254, 0.4)",
                }}
                disabled={isLoading} // disable button while loading
              >
                {isLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <>
        {/* existing code */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </>
    </>
  );
};

export default Contact;
