import React from "react";
import {
  FaHeartPulse,
  FaPlane,
  FaFireFlameCurved,
  FaShip,
  FaTaxi,
  FaShop,
  FaUserTie,
  FaLaptopCode,
  FaBriefcaseMedical,
  FaRibbon,
  FaPiggyBank,
  FaBuilding,
  FaUsersGear,
  FaShieldHeart,
} from "react-icons/fa6";

const otherInsurance = [
  { title: "Life", sub: "Insurance", icon: <FaShieldHeart />, link: "/insurances" },
  { title: "Health", sub: "Insurance", icon: <FaHeartPulse />, link: "/insurances" },
  { title: "Investment Plans", sub: "Insurance", icon: <FaPiggyBank />, link: "/insurances" },
  { title: "Child", sub: "Savings Plans", icon: <FaUsersGear />, link: "/insurances" },
  { title: "Home", sub: "Insurance", icon: <FaShip />, link: "/insurances" },
  { title: "Marine", sub: "Insurance", icon: <FaShip />, link: "/insurances" },
  { title: "Taxi", sub: "Insurance", icon: <FaTaxi />, link: "/insurances" },
  { title: "Shop Owner", sub: "Insurance", icon: <FaShop />, link: "/insurances" },
  { title: "Travel", sub: "Insurance", icon: <FaPlane />, link: "/insurances" },
  { title: "Fire & Burglary", sub: "Insurance", icon: <FaFireFlameCurved />, link: "/insurances" },
  { title: "Professional Indemnity", sub: "For Doctors", icon: <FaUserTie />, link: "/insurances" },
  { title: "Professional Indemnity", sub: "For Companies", icon: <FaBuilding />, link: "/insurances" },
  { title: "Cyber", sub: "Insurance", icon: <FaLaptopCode />, link: "/insurances" },
  { title: "Critical Care", sub: "Health Plan", icon: <FaBriefcaseMedical />, link: "/insurances" },
  { title: "Cancer", sub: "Health Plan", icon: <FaRibbon />, link: "/insurances" },
];

const     OtherInsurance = () => {
  return (
    <section className="w-full bg-white py-14 overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 tracking-wide">
            OTHER INSURANCE
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Horizontal Scroll */}
        <div className="overflow-x-auto pb-5 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
          <div className="flex gap-6 min-w-max px-2">
            {otherInsurance.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="group w-[165px] h-[145px] bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl flex-shrink-0 flex flex-col items-center justify-center text-center transition duration-200 hover:-translate-y-2 hover:border-blue-300"
              >
                <div className="text-3xl text-blue-500 mb-4 group-hover:scale-110 transition duration-200">
                  {item.icon}
                </div>

                <h3 className="text-[17px] font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-[16px] text-gray-400 mt-1">
                  {item.sub}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherInsurance;