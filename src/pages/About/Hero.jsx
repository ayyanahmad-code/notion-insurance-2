import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";

import aboutImg from "../../images/About/about-us.webp";
import bannerImg from "../../images/About/office1.avif";

const Hero = () => {
  return (
    <>
      {/* Main About */}

      <section className="py-5">

        <div className="max-w-[1500px] mx-auto px-6">

          <div className="
          bg-white
          rounded-[30px]
          shadow-xl
          overflow-hidden
          border
          border-slate-100
          ">

            <div className="grid lg:grid-cols-2 gap-10 items-center p-6 lg:p-12">

              {/* left */}

              <motion.div
              initial={{opacity:0,x:-50}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              >

                <div className="flex items-center gap-2">

                  <FaShieldAlt className="text-blue-600"/>

                  <p className="uppercase text-blue-600 text-sm font-bold tracking-[2px]">

                    About Company

                  </p>

                </div>

                <h2 className="text-3xl lg:text-5xl font-black text-slate-800 mt-4 leading-tight">

                  Trusted Insurance Solutions For Everyone

                </h2>

                <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 mt-5"/>

                <p className="text-gray-600 mt-7 leading-8">

                  Notion Insurance Broker Pvt. Ltd. is a growing
                  insurance company officially licensed by IRDAI.
                  We provide affordable, secure and customized
                  insurance solutions helping people protect
                  their future with complete peace of mind.

                </p>

              </motion.div>


              {/* image */}

              <motion.div
              initial={{opacity:0,x:50}}
              whileInView={{opacity:1,x:0}}
              viewport={{once:true}}
              className="relative flex justify-center"
              >

                <div className="absolute w-[300px] h-[300px] bg-blue-200/30 blur-3xl rounded-full"/>

                <img
                src={aboutImg}
                alt=""
                className="
                relative
                z-10
                max-w-[420px]
                w-full
                drop-shadow-2xl
                "
                />
              </motion.div>

            </div>

          </div>

        </div>

      </section>

    </>
  );
};

export default Hero;