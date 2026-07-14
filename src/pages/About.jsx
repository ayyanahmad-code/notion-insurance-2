import React from "react";
import Hero from "../pages/About/Hero";
import OurExperts from "../pages/About/OurExperts";
import Target from "../pages/About/Target";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-slate-50 to-white overflow-hidden space-y-6 pb-8">

      <Hero />

      <Target />

      <OurExperts />

    </div>
  );
};

export default About;