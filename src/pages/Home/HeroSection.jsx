import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCar,
  FaMotorcycle,
  FaArrowRight,
  FaTruck,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import VideoSlider from "./VideoSlider";

const words = ["Simple Way", "Simple and Easy"];

const HeroSection = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [selectedInsurance, setSelectedInsurance] =
    useState("Private Car");

  const [registrationNumber, setRegistrationNumber] =
    useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(
          currentWord.substring(
            0,
            text.length + 1
          )
        );

        if (text === currentWord) {
          setTimeout(
            () => setIsDeleting(true),
            1200
          );
        }
      } else {
        setText(
          currentWord.substring(
            0,
            text.length - 1
          )
        );

        if (text === "") {
          setIsDeleting(false);

          setWordIndex(
            (prev) =>
              (prev + 1) %
              words.length
          );
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);



  const insuranceTypes = [
    {
      name: "Private Car",
      icon: FaCar,
      route: "/car-insurance",
    },

    {
      name: "Bike",
      icon: FaMotorcycle,
      route: "/bike-insurance",
    },

    {
      name: "Commercial",
      icon: FaTruck,
      route: "/commercial-insurance",
    },
  ];


  const handleViewPrices = () => {
    const selected =
      insuranceTypes.find(
        (item) =>
          item.name === selectedInsurance
      );

    navigate(selected.route, {
      state: {
        vehicleNumber:
          registrationNumber,
      },
    });
  };



  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-b
      from-blue-50
      via-white
      to-white
      px-6
      lg:px-10
      pt-2
      pb-12
      "
    >
      {/* background */}

      <div
        className="
        absolute
        top-0
        left-0
        w-[400px]
        h-[400px]
        bg-blue-200/30
        rounded-full
        blur-3xl
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-purple-200/20
        rounded-full
        blur-3xl
      "
      />

      <div
        className="
        max-w-[1500px]
        mx-auto
        relative
        z-10
      "
      >
        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-[650px_1fr]
          gap-5
          items-center
        "
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .6,
            }}
            className="
            w-full
            max-w-[650px]
          "
          >
            {/* title */}

            <div className="mb-4">

              <h1
                className="
                text-4xl
                lg:text-[58px]
                font-black
                leading-none
                text-gray-900
              "
              >
                Buy Insurance
              </h1>

              <h2
                className="
                text-3xl
                lg:text-[46px]
                font-bold
                min-h-[50px]
                mt-2
              "
              >
                <span
                  className="
                  bg-gradient-to-r
                  from-orange-500
                  to-red-500
                  bg-clip-text
                  text-transparent
                "
                >
                  {text}
                </span>

                <span className="text-orange-500">
                  |
                </span>

              </h2>

            </div>



            {/* CARD */}

            <div
              className="
              bg-white
              rounded-3xl
              shadow-2xl
              border
              overflow-hidden
            "
            >
              {/* header */}

              <div
                className="
                bg-gradient-to-r
                from-blue-600
                to-blue-700
                px-5
                py-5
              "
              >
                <h3
                  className="
                  text-white
                  text-lg
                  font-bold
                  text-center
                  mb-5
                "
                >
                  Start Your {selectedInsurance} Insurance
                </h3>


                <div
                  className="
                  grid
                  grid-cols-3
                  gap-3
                "
                >
                  {insuranceTypes.map(
                    (type, index) => {

                      const Icon =
                        type.icon;

                      return (

                        <motion.div
                          key={index}
                          whileHover={{
                            scale: 1.05,
                          }}

                          whileTap={{
                            scale: .95,
                          }}

                          onClick={() =>
                            setSelectedInsurance(
                              type.name
                            )
                          }

                          className={`
                          rounded-xl
                          py-4
                          px-2
                          flex
                          flex-col
                          items-center
                          justify-center
                          cursor-pointer
                          duration-300

                          ${
                            selectedInsurance ===
                            type.name
                              ? "bg-white text-blue-600"
                              : "bg-white/10 text-white"
                          }
                          `}
                        >
                          <div
                            className="
                            w-12
                            h-12
                            rounded-full
                            bg-white/20
                            flex
                            items-center
                            justify-center
                            mb-2
                          "
                          >
                            <Icon />
                          </div>

                          <p
                            className="
                            text-xs
                            font-semibold
                            text-center
                          "
                          >
                            {type.name}
                          </p>

                        </motion.div>

                      );
                    }
                  )}
                </div>
              </div>


              {/* FORM */}

              <div className="p-6">

                <p
                  className="
                  text-sm
                  text-gray-500
                  mb-2
                "
                >
                  Enter vehicle number
                </p>

                <input
                  type="text"
                  value={
                    registrationNumber
                  }

                  onChange={(e) =>
                    setRegistrationNumber(
                      e.target.value
                    )
                  }

                  placeholder={
                    selectedInsurance ===
                    "Bike"
                      ? "MH12AB1234"
                      : "UP15AB1234"
                  }

                  className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-4
                  outline-none
                  focus:ring-2
                  focus:ring-blue-500
                "
                />


                <button
                  onClick={
                    handleViewPrices
                  }

                  className="
                  mt-5
                  w-full
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  py-4
                  rounded-xl
                  font-bold
                  flex
                  items-center
                  justify-center
                  gap-3
                  duration-300
                "
                >
                  View Prices

                  <FaArrowRight />
                </button>


                <div
                  className="
                  flex
                  justify-between
                  mt-4
                  text-sm
                  text-blue-600
                "
                >
                  <span>
                    Don't have number?
                  </span>

                  <span>
                    Buying new vehicle?
                  </span>

                </div>

              </div>

            </div>

          </motion.div>



          {/* RIGHT */}

          <motion.div
            initial={{
              opacity:0,
              x:60
            }}

            animate={{
              opacity:1,
              x:0
            }}

            transition={{
              duration:.6
            }}

            className="
            flex
            justify-center
            lg:justify-end
            "
          >
            <div
              className="
              w-full
              max-w-[760px]
            "
            >
              <VideoSlider />
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default HeroSection;