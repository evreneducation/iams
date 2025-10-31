
import { Link } from "react-router-dom";
import { Plane, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PageNotFound() {
  return (
    <section className="min-h-screen mt-[50px] flex flex-col items-center justify-center bg-gradient-to-b from-[#E9F9FB] via-[#F7FFFF] to-[#E9F9FB] text-center px-6">

      {/* === 404 Heading === */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-[90px] md:text-[120px] font-extrabold bg-gradient-to-r from-[#0E7785] to-[#15A4B3] bg-clip-text text-transparent leading-none"
      >
        404
      </motion.h1>

      {/* === Subtitle === */}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[#003366]">
        Page Not Found
      </h2>
      <p className="mt-3 text-gray-600 text-base md:text-lg max-w-md mx-auto">
        Looks like the page you’re trying to reach has flown away.
        <br /> Let’s get you back on track.
      </p>

      {/* === Gradient Divider === */}
      <div className="w-24 h-1 bg-gradient-to-r from-[#0E7785] to-[#15A4B3] rounded-full mt-6"></div>

      {/* === Back to Home Button === */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#21d6e0] to-[#0080ff] text-white px-8 py-3 rounded-lg font-semibold hover:from-[#0080ff] hover:to-[#21d6e0] transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </motion.div>

      {/* === Footer Branding === */}
      <div className="mt-16 text-gray-500 text-sm">
        International Aviation Marketing Summit (IAMS 2026)
      </div>
    </section>
  );
}
