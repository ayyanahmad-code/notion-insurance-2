import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";

const Enquiry = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-[#1d3557] via-[#21406b] to-[#1d3557] py-10 sm:py-12 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-10 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-5"
        >
          For any Enquiry Regarding
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-medium mb-7"
        >
          At Notion Insurance Broker Pvt Ltd, we understand that choosing the
          right insurance can be overwhelming. That's why we make it easy for
          you to connect with experienced insurance agents who are committed to
          finding the best coverage tailored to your needs.
        </motion.p>

        {/* Button */}
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          href="/contact-us"
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-7 py-3 rounded-xl text-sm sm:text-base font-semibold shadow-lg shadow-blue-900/30 transition-all duration-300"
        >
          Contact Now
          <FaArrowRight />
        </motion.a>
      </div>
    </section>
  );
};

export default Enquiry;