import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="bg-[#f7f8fa] overflow-hidden">

      {/* HERO */}
      <section className="pt-5 pb-4">

        <div className="max-w-[1400px] mx-auto px-5 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="
            text-3xl
            md:text-5xl
            font-black
            text-slate-800
            mb-2
            "
          >
            We're Here To Help
          </motion.h1>

          <p
            className="
            max-w-[700px]
            mx-auto
            text-gray-600
            text-base
            leading-7
            "
          >
            Whether you have questions about our services,
            need technical assistance or guidance choosing
            the right insurance plan.
          </p>

        </div>

      </section>


      {/* MAIN */}
      <section className="max-w-[1450px] mx-auto px-5 pb-10">

        <div
          className="
          grid
          lg:grid-cols-[1fr_1fr]
          gap-6
          items-start
          "
        >

          {/* LEFT SIDE */}
          <div className="pt-18 lg:mt-0">

            {/* BRANCHES */}
            <div className="grid md:grid-cols-2 gap-4">

              {/* BHOPAL */}
              <motion.div
                whileHover={{ y: -5 }}
                className="
                bg-white
                rounded-2xl
                p-6
                border
                shadow-sm
                "
              >

                <h3 className="text-2xl font-bold mb-6">
                  Bhopal (Main Branch)
                </h3>

                <div className="space-y-5">

                  <Info
                    icon={<FaPhoneAlt />}
                    text="+91 9302182475 | +91 7554911343"
                  />

                  <Info
                    icon={<FaEnvelope />}
                    text="info@notioninsurance.com"
                    breakText
                  />

                  <Info
                    icon={<FaMapMarkerAlt />}
                    text="Lalwani Complex, Above Axis Bank, Vidya Nagar, Bhopal"
                  />

                  <Info
                    icon={<FaClock />}
                    text="Mon - Sat : 10AM - 6PM"
                  />

                </div>

              </motion.div>



              {/* JABALPUR */}
              <motion.div
                whileHover={{ y: -5 }}
                className="
                bg-white
                rounded-2xl
                p-6
                border
                shadow-sm
                "
              >

                <h3 className="text-2xl font-bold mb-6">
                  Jabalpur Branch
                </h3>

                <div className="space-y-5">

                  <Info
                    icon={<FaPhoneAlt />}
                    text="+91 9827220353"
                  />

                  <Info
                    icon={<FaEnvelope />}
                    text="mkrathod@notioninsurance.com"
                    breakText
                  />

                  <Info
                    icon={<FaMapMarkerAlt />}
                    text="33, JK Complex, 2nd Floor, Gorakhpur, Jabalpur"
                  />

                  <Info
                    icon={<FaClock />}
                    text="Mon - Sat : 10AM - 6PM"
                  />

                </div>

              </motion.div>

            </div>


            {/* SUPPORT BOXES */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">

              <SupportCard
                title="For Information Support"
                email="info@notioninsurance.com"
              />

              <SupportCard
                title="Become A POSP Support"
                email="pospsupports@notioninsurance.com"
              />

              <SupportCard
                title="For Claim Support"
                email="claims@notioninsurance.com"
              />

            </div>

          </div>


          {/* FORM */}
          <div className="pt-18 lg:mt-0">
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            className="
            bg-white
            rounded-2xl
            p-7
            border
            shadow-sm
            "
          >

            <h2
              className="
              text-5xl
              font-bold
              text-center
              mb-8
              "
            >
              Fill Up The Form
            </h2>


            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-4">

                <Input
                  label="Full Name"
                  placeholder="Enter Full Name"
                />

                <Input
                  label="Mobile No"
                  placeholder="Enter Mobile Number"
                />

                <Input
                  label="Your Email"
                  placeholder="Enter Your Email"
                />

                <Input
                  label="Your Subject"
                  placeholder="Enter Subject"
                />

              </div>


              <div>

                <label className="block mb-2">
                  Your message
                </label>

                <textarea
                  rows="6"
                  placeholder="Enter Your Message"
                  className="
                  w-full
                  border
                  rounded-lg
                  px-4
                  py-3
                  resize-none
                  outline-none
                  focus:border-blue-600
                  "
                />

              </div>


              <button
                className="
                w-full
                bg-blue-600
                text-white
                py-4
                rounded-lg
                font-bold
                flex
                items-center
                justify-center
                gap-3
                hover:bg-blue-700
                duration-300
                "
              >
                <FaPaperPlane />
                SUBMIT
              </button>

            </form>

          </motion.div>
</div>
        </div>


        {/* MAP SECTION */}

       {/* MAP SECTION */}
<div className="mt-8">

  <div
    className="
    bg-white
    rounded-2xl
    overflow-hidden
    shadow-sm
    border
    max-w-[1200px]
    mx-auto
    "
  >

    <div className="py-4">

      <h2 className="text-2xl font-bold text-center">
        Our Location
      </h2>

      <p className="text-center text-gray-500 text-sm mt-1">
        Visit our office or find us on Google Maps
      </p>

    </div>

    <iframe
      title="location"
      src="https://maps.google.com/maps?q=Notion%20Insurance%20Broker%20Bhopal&t=&z=15&ie=UTF8&iwloc=&output=embed"
      className="
      w-full
      h-[280px]
      border-0
      "
      loading="lazy"
    />

  </div>

</div>

      </section>

    </div>
  );
};



const Info = ({
  icon,
  text,
  breakText
}) => (

<div className="flex gap-4 items-start">

<div
className="
w-12
h-12
rounded-full
bg-gray-100
text-blue-600
flex
items-center
justify-center
shadow
shrink-0
"
>
{icon}
</div>

<p
className={`
text-gray-700
leading-7
min-w-0
${breakText ? "break-all" : "break-words"}
`}
>
{text}
</p>

</div>

);



const Input = ({
label,
placeholder
}) => (

<div>

<label className="block mb-2">
{label}
</label>

<input
placeholder={placeholder}
className="
w-full
border
rounded-lg
px-4
py-3
outline-none
focus:border-blue-600
"
/>

</div>
);



const SupportCard = ({
title,
email
}) => (

<div
className="
bg-white
border
rounded-xl
p-5
text-center
shadow-sm
hover:shadow-md
duration-300
"
>

<h3 className="text-lg font-bold mb-4 leading-7">
{title}
</h3>

<div
className="
w-12
h-12
rounded-full
bg-gray-100
mx-auto
flex
items-center
justify-center
text-blue-600
shadow
mb-4
"
>
<FaEnvelope />
</div>

<p className="text-gray-700 text-sm break-all">
{email}
</p>

</div>

);

export default ContactUs;