import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHandshake, FaShieldAlt } from "react-icons/fa";

/* logos */
import future from "../images/partner/Future generali.webp";
import hdfcErgo from "../images/partner/HDFC.webp";
import iciciPrudential from "../images/partner/ICICI Prudential.webp";
import liberty from "../images/partner/liberty.webp";
import maxLife from "../images/partner/Max life.webp";
import national from "../images/partner/National insurance.webp";
import niva from "../images/partner/Niva Bupa Health in.webp";
import oriental from "../images/partner/oriental.webp";
import shriram from "../images/partner/shriram.avif";
import hdfcLife from "../images/partner/HDFC life.avif";
import United from "../images/partner/United India.avif";
import SBI from "../images/partner/SBI General.avif";
import raheja from "../images/partner/raheja.avif";
import Star from "../images/partner/Star personal & caring.avif";
import NewIndia from "../images/partner/The new india assurance co.ltd.avif";

const Partners = () => {
  const [hoveredPartner, setHoveredPartner] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const partnersList = [
    { name: "Future Generali", logo: future },
    { name: "HDFC ERGO", logo: hdfcErgo },
    { name: "HDFC Life", logo: hdfcLife },
    { name: "ICICI Prudential", logo: iciciPrudential },
    { name: "Liberty", logo: liberty },
    { name: "Max Life", logo: maxLife },
    { name: "National Insurance", logo: national },
    { name: "Niva Bupa", logo: niva },
    { name: "Oriental Insurance", logo: oriental },
    { name: "Shriram Insurance", logo: shriram },
    { name: "SBI General", logo: SBI },
    { name: "Raheja QBE", logo: raheja },
    { name: "Star Health", logo: Star },
    { name: "New India Assurance", logo: NewIndia },
    { name: "United India", logo: United },
  ];

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section 
      className="relative py-20 bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-blue-700 font-semibold text-sm mb-5">
            <FaHandshake />
            Trusted Partners
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-800"
          >
            Our Insurance Partners
          </motion.h1>

          <p className="text-gray-500 max-w-[700px] mx-auto mt-5 leading-8">
            We collaborate with India's most trusted insurance
            companies to provide secure, reliable and affordable
            protection solutions.
          </p>

          <div className="w-20 h-[3px] rounded-full bg-blue-600 mx-auto mt-5" />
        </div>

        {/* logos grid section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
          {partnersList.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredPartner(partner)}
              onMouseLeave={() => setHoveredPartner(null)}
              className="relative flex justify-center items-center cursor-pointer group"
            >
              {/* Logo container with hover effect */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3 }}
                className="w-full flex justify-center items-center p-4"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] h-[70px] object-contain"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* footer */}
        <div className="flex justify-center mt-20">
          <div className="flex items-center gap-3 text-blue-700 font-semibold">
            <FaShieldAlt />
            18+ Trusted Insurance Companies
          </div>
        </div>
      </div>

      {/* Popup - shows logo and name on hover */}
      <AnimatePresence>
        {hoveredPartner && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 25,
              duration: 0.3
            }}
            className="fixed z-50 pointer-events-none"
            style={{
              left: Math.min(mousePos.x + 20, window.innerWidth - 320),
              top: Math.max(mousePos.y - 200, 20),
            }}
          >
            <div className="relative">
              {/* Popup Card */}
              <div className="
                w-[280px]
                bg-gradient-to-br from-white to-blue-50
                rounded-2xl
                shadow-2xl
                overflow-hidden
                border border-gray-100
              ">
                {/* Logo Section */}
                <div className="
                  relative
                  h-[180px]
                  flex items-center justify-center
                  bg-gradient-to-br from-gray-50 to-white
                  p-6
                ">
                  {/* Animated background glow */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="absolute inset-0 bg-blue-500/5 rounded-2xl"
                  />
                  
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: 0.1
                    }}
                    src={hoveredPartner.logo}
                    alt={hoveredPartner.name}
                    className="
                      w-full
                      h-full
                      object-contain
                      relative
                      z-10
                    "
                  />
                </div>

                {/* Name Section */}
                <div className="
                  p-5
                  text-center
                  bg-white/90
                  backdrop-blur-sm
                ">
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="
                      text-lg
                      font-bold
                      text-slate-800
                      mb-1
                    "
                  >
                    {hoveredPartner.name}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.25 }}
                    className="
                      w-12
                      h-0.5
                      bg-blue-600
                      mx-auto
                      rounded-full
                    "
                  />
                  
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="
                      text-xs
                      text-gray-500
                      mt-2
                    "
                  >
                    Trusted Insurance Partner
                  </motion.p>
                </div>

                {/* Decorative arrow */}
                <div
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    transform
                    -translate-x-1/2
                    w-4
                    h-4
                    bg-white
                    rotate-45
                    border-r
                    border-b
                    border-gray-100
                  "
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Partners;