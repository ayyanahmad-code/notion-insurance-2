// Homepage.jsx

import React from "react";

import HeroSection from "../pages/home/HeroSection";
import Description from "./Home/Description";

import InsuranceType from "../pages/home/InsuranceType";
import OtherInsurance from "../pages/home/OtherInsurance";
import OurPartners from "./Home/OurPartners";
import UniqueStrengths from "../pages/home/UniqueStrengths";
import WorkProcess from "../pages/home/WorkProcess";
import Enquiry from "./Home/Enquiry";

import {
  FaTag,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <HeroSection />

      {/* Reduced gap from Hero to Description */}
      <div className="-mt-8 lg:-mt-12">

        <Description />

      </div>

      {/* Reduced spacing between sections */}
      <div className="space-y-8 lg:space-y-10">

        <InsuranceType />

        <OtherInsurance />

        <OurPartners />

        <UniqueStrengths />

        <WorkProcess />

        <Enquiry />

      </div>

      {/* Latest Offers Banner */}

      <div className="
      container
      mx-auto
      px-4
      sm:px-6
      lg:px-8
      max-w-7xl
      py-6
      "
      >
      </div>

    </div>
  );
};

export default Home;