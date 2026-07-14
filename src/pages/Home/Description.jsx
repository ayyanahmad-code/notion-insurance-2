import React from "react";
import { FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import companyLogo from "../../images/Navbar/logo.webp";

const Description = () => {
  return (
    <section className="px-6 lg:px-10 py-4 bg-white">

      <div className="max-w-[1500px] mx-auto">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          viewport={{
            once: true,
          }}
          className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-gray-100
          bg-white
          shadow-lg
          px-6
          lg:px-12
          py-8
          "
        >

          {/* background circles */}

          <div className="absolute -top-8 -left-8 w-40 h-40 bg-blue-100/20 rounded-full blur-3xl"></div>

          <div className="absolute bottom-0 right-0 w-52 h-52 bg-orange-100/20 rounded-full blur-3xl"></div>


          {/* logo background */}

          <img
            src={companyLogo}
            alt=""
            className="
            absolute
            inset-0
            m-auto
            w-[400px]
            lg:w-[650px]
            opacity-[0.04]
            object-contain
            pointer-events-none
            select-none
            "
          />

          <div className="relative z-10">

           {/* Heading with icon */}

            <div className="text-center">

                <div className="flex items-center justify-center gap-3">

                    <div
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-blue-700
                    flex
                    items-center
                    justify-center
                    shadow-md
                    "
                    >
                    <FaShieldAlt className="text-white text-sm" />
                    </div>

                    <h2
                    className="
                    text-2xl
                    lg:text-4xl
                    font-black
                    "
                    >

                    <span
                        className="
                        bg-gradient-to-r
                        from-blue-700
                        to-orange-500
                        bg-clip-text
                        text-transparent
                        "
                    >
                        Why Choose Our Company?
                    </span>

                    </h2>

                </div>

            <motion.div
                initial={{
                width: 0
                }}
                whileInView={{
                width: "90px"
                }}
                transition={{
                duration: .7
                }}
                className="
                h-1
                bg-gradient-to-r
                from-blue-600
                to-orange-500
                rounded-full
                mx-auto
                mt-4
                "
            />

                </div>

            {/* description */}

            <motion.p
              initial={{
                opacity:0
              }}
              whileInView={{
                opacity:1
              }}
              transition={{
                delay:.4
              }}
              className="
              text-gray-600
              text-[15px]
              lg:text-[17px]
              leading-8
              text-center
              max-w-[1100px]
              mx-auto
              mt-6
              "
            >
              We are a professional organization with a dedicated team of qualified insurance professionals, 
              committed to meeting the diverse insurance and risk management needs of clients nationwide.

              <br /><br />

              Our team specializes in providing customized solutions for individuals and businesses across various sectors, 
              including life, health, home, and business insurance.

              <br /><br />

              We understand that every client has unique requirements, and we work closely with them to identify the best 
              strategies to mitigate risks and protect their assets.

              <br /><br />
              With a focus on integrity, transparency, and customer satisfaction, we offer expert guidance and support, 
              ensuring that our clients receive comprehensive coverage tailored to their specific needs.
            </motion.p>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Description;