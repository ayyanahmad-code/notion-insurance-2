import React from "react";

// IMPORT YOUR IMAGES HERE
import claimImg from "../../images/Unique/claim.jpg";
import securityImg from "../../images/Unique/security.avif";
import priceImg from "../../images/Unique/best.avif";
import supportImg from "../../images/Unique/service24.avif";

const strengths = [
  {
    image: claimImg,
    title: "Claims Assistance",
    sub: "Easy & Reliable",
  },
  {
    image: securityImg,
    title: "Data Security",
    sub: "Guaranteed",
  },
  {
    image: priceImg,
    title: "Best Prices",
    sub: "in the market",
  },
  {
    image: supportImg,
    title: "24/7 Support",
    sub: "Every day of the week",
  },
];

const UniqueStrengths = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white via-blue-50 to-white py-14">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Our Unique Strengths
          </h2>

          <p className="mt-3 text-gray-600 text-base md:text-lg">
            Experience excellence with our tailored solutions and commitment to
            customer satisfaction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 px-5 py-7 text-center"
            >
              {/* IMAGE */}
              <div className="mb-6 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[170px] h-[120px] object-contain group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-[28px] font-bold text-gray-800 mb-2">
                {item.title}
              </h3>

              {/* SUBTITLE */}
              <p className="text-gray-500 text-[20px]">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniqueStrengths;