import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    badgeColor: "bg-blue-500",
    title: "Select insurance",
    icon: (
      <svg viewBox="0 0 48 48" className="w-16 h-16">
        <path fill="#455A64" d="M36,4H26c0,1.1-0.9,2-2,2s-2-0.9-2-2H12C9.8,4,8,5.8,8,8v32c0,2.2,1.8,4,4,4h24c2.2,0,4-1.8,4-4V8C40,5.8,38.2,4,36,4z" />
        <path fill="#fff" d="M36,41H12c-0.6,0-1-0.4-1-1V8c0-0.6,0.4-1,1-1h24c0.6,0,1,0.4,1,1v32C37,40.6,36.6,41,36,41z" />
        <rect x="21" y="20" width="12" height="2" fill="#CFD8DC" />
        <rect x="15" y="19" width="4" height="4" fill="#CFD8DC" />
        <rect x="21" y="29" width="12" height="2" fill="#03A9F4" />
        <rect x="15" y="28" width="4" height="4" fill="#03A9F4" />
      </svg>
    ),
  },
  {
    number: "2",
    badgeColor: "bg-blue-500",
    title: "Schedule meeting",
    icon: (
      <svg viewBox="0 0 48 48" className="w-16 h-16">
        <path fill="#1565C0" d="M25,22h13l6,6V11c0-2.2-1.8-4-4-4H25c-2.2,0-4,1.8-4,4v7C21,20.2,22.8,22,25,22z" />
        <path fill="#2196F3" d="M23,19H10l-6,6V8c0-2.2,1.8-4,4-4h15c2.2,0,4,1.8,4,4v7C27,17.2,25.2,19,23,19z" />
        <circle fill="#FFA726" cx="12" cy="31" r="5" />
        <circle fill="#FFA726" cx="36" cy="31" r="5" />
        <path fill="#607D8B" d="M20,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z" />
        <path fill="#607D8B" d="M44,42c0,0-2.2-4-8-4s-8,4-8,4v2h16V42z" />
      </svg>
    ),
  },
  {
    number: "3",
    badgeColor: "bg-blue-500",
    title: "Meet agent",
    icon: (
      <svg viewBox="0 0 48 48" className="w-16 h-16">
        <polygon fill="#FF9800" points="24,37 19,31 19,25 29,25 29,31" />
        <path fill="#FFB74D" d="M33,13c0-7.6-18-5-18,0v7c0,5,4,9,9,9s9-4,9-9V13z" />
        <path fill="#424242" d="M24,4c-6.1,0-10,4.9-10,11v2.3l2,1.7v-5l12-4l4,4v5l2-1.7V15c0-4-1-8-6-9l-1-2H24z" />
        <polygon fill="#D32F2F" points="23,35 22.3,39.5 24,43.5 25.7,39.5 25,35 26,34 24,32 22,34" />
        <path fill="#546E7A" d="M29,31l-5,12l-5-12c0,0-11,2-11,13h32C40,33,29,31,29,31z" />
      </svg>
    ),
  },
  {
    number: "4",
    badgeColor: "bg-blue-500",
    title: "Get insurance",
    icon: (
      <svg viewBox="0 0 48 48" className="w-16 h-16">
        <path fill="#FFB74D" d="M10,12c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,12,10,12z" />
        <path fill="#607D8B" d="M2,22v8l3,2l1,14h8l1-14l3-2v-8c0-4.4-3.6-8-8-8S2,17.6,2,22z" />
        <circle fill="#4CAF50" cx="36" cy="36" r="10" />
        <path fill="#fff" d="M35,34c0.1,0.2,0.3,0.5,1.6,1c2,0.8,3.2,1.5,3.2,3.6c0,1.7-1.1,2.9-2.9,3.2V43h-1.2v-1.3c-2-0.3-3.2-1.6-3.2-3.7h2.2c0,1.1,0.5,1.8,1.6,1.8c0.9,0,1.4-0.5,1.4-1.2c0-0.8-0.4-1.1-1.9-1.7c-1.8-0.7-3-1.5-3-3.5c0-1.6,1-2.8,2.8-3.1v-1.4h1.2v1.5c1.8,0.4,2.8,1.7,2.8,3.5h-2.2c0-1-0.4-1.6-1.2-1.6C35.4,32.3,34.9,33,35,34z" />
      </svg>
    ),
  },
];

const WorkProcess = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-white via-blue-50 to-white py-14 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_35%)]"></div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 font-semibold uppercase tracking-[3px] text-sm mb-2">
            Simple Process
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
            Our Easy Work Process in 4 Steps
          </h2>

          <p className="mt-3 text-gray-500 text-sm sm:text-base">
            Work process
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 45, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center group"
            >
              {index !== steps.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="hidden lg:block absolute top-[74px] left-[65%] w-[70%] h-[4px] bg-blue-500 group-hover:bg-green-500 rounded-full origin-left transition-all duration-300"
                />
              )}

              <motion.div
                whileHover={{ y: -8, scale: 1.04 }}
                transition={{ duration: 0.25 }}
                className="relative w-[150px] h-[150px] sm:w-[155px] sm:h-[155px] rounded-full bg-white border border-gray-200 group-hover:border-green-400 shadow-md group-hover:shadow-green-200 group-hover:shadow-xl flex items-center justify-center transition-all duration-300"
              >
                <div
                  className={`absolute -top-3 -left-3 w-12 h-12 rounded-full ${step.badgeColor} text-white flex items-center justify-center text-xl font-bold shadow-md group-hover:bg-green-500 transition-all duration-300`}
                >
                  {step.number}
                </div>

                <div className="absolute inset-0 rounded-full bg-green-100 opacity-0 group-hover:opacity-50 blur-xl transition duration-300"></div>

                <div className="relative group-hover:scale-110 transition duration-300">
                  {step.icon}
                </div>
              </motion.div>

              <h3 className="mt-8 text-xl sm:text-2xl font-extrabold text-black text-center group-hover:text-green-600 transition duration-300">
                {step.title}
              </h3>

              <div className="mt-4 w-0 h-[4px] bg-gradient-to-r from-green-500 to-emerald-400 rounded-full group-hover:w-24 transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;