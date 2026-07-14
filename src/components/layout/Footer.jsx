// Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // Add this import
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

import logo from "../../images/Navbar/logo.webp";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#eef7ff] via-white to-[#dff2ff] border-t-4 border-blue-600">
      <div className="max-w-[1500px] mx-auto px-5 lg:px-10 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-[180px] mb-4" />
            </Link>
            <p className="text-gray-700 text-[15px] leading-[1.5] max-w-[260px]">
              Notion Insurance Broker Pvt. Ltd. delivers customized insurance
              solutions for businesses and individuals.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-4">
              Licence
            </h3>
            <ul className="space-y-2 text-[14px] text-gray-700">
              <li>Licence No. 619</li>
              <li>IRDA Code: IRDA/ DB 693/17</li>
              <li>Valid till: 02/10/2026</li>
              <li>CIN: U66010MP2016PTC041677</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-4">
              Our Links
            </h3>
            <ul className="space-y-2 text-[14px] text-gray-700">
              <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
              <li><Link to="/our-partners" className="hover:text-blue-600 transition">Our Partners</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-600 transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-extrabold text-gray-900 mb-4">
              Policies
            </h3>
            <ul className="space-y-2 text-[14px] text-gray-700">
              <li><Link to="/privacy-policy" className="hover:text-blue-600 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition">Terms & Conditions</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600 transition">FAQ's</Link></li>
              <li><Link to="/career" className="hover:text-blue-600 transition">Career</Link></li>
            </ul>
          </div>

         <div>
  <h3 className="text-lg font-extrabold text-gray-900 mb-4">
    Get In Touch
  </h3>

  <div className="flex items-center gap-3 text-lg">

    {[
      {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/company/notion-insurance-broker-pvt-ltd/"
      },
      {
        icon: FaInstagram,
        link: "https://www.instagram.com/notioninsurance"
      },
      {
        icon: FaTwitter,
        link: "https://x.com/notioninsurance?t=p-h_nrvLBRe6HwVi5gJsKQ&s=08"
      },
      {
        icon: FaYoutube,
        link: "https://www.youtube.com/@NotionInsuranceBroker"
      },
      {
        icon: FaFacebook,
        link: "https://www.facebook.com/notioninsurance"
      }
    ].map((item, index) => {

      const Icon = item.icon;

      return (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
          className="
          w-9
          h-9
          rounded-full
          bg-white
          shadow-sm
          border
          border-blue-100
          flex
          items-center
          justify-center
          text-gray-600
          hover:bg-blue-500
          hover:text-white
          transition
          "
        >
          <Icon />
        </a>
      );
    })}

  </div>
</div>
        </div>
      </div>

      <div className="w-full bg-[#26384f] text-white">
        <div className="max-w-[1500px] mx-auto px-5 lg:px-10 py-3 flex flex-col md:flex-row justify-between gap-2 text-[14px]">
          <p>© 2026 Notion Insurance Broker. All Rights Reserved.</p>
          <p>
            Developed by{" "}
            <a href="https://www.technovani.com/" className="text-blue-300 hover:text-blue-200">
              TechnoVani Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;