// import React, { useState } from "react";
// import {
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaChevronDown,
//   FaBars,
// } from "react-icons/fa";
// import { FaXmark } from "react-icons/fa6";
// import { Link, NavLink } from "react-router-dom";

// import logo from "../../images/Navbar/logo.webp";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const navLinkClass = ({ isActive }) =>
//     `relative px-4 py-2 rounded-xl transition-all duration-300 ${
//       isActive
//         ? "text-blue-600 bg-white shadow-sm"
//         : "text-gray-700 hover:text-blue-600 hover:bg-white/70"
//     }`;

//   return (
//     <>
//       {/* Top Header */}
//       <div className="hidden lg:block w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white">
//         <div className="max-w-[1500px] mx-auto px-5 py-2 flex items-center justify-center gap-7 flex-wrap text-[14px]">
//           <a
//             href="https://www.google.com/maps/search/?api=1&query=Plot No. 1, 3rd Floor Lalwani Complex, Above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026"
//             target="_blank"
//             rel="noreferrer"
//             className="flex items-center gap-2 hover:text-blue-100 transition"
//           >
//             <FaMapMarkerAlt />
//             <span>
//               Plot No. 1, 3rd Floor Lalwani Complex, Above Axis Bank, Vidya
//               Nagar, Bhopal
//             </span>
//           </a>

//           <a
//             href="mailto:info@notioninsurance.com"
//             className="flex items-center gap-2 hover:text-blue-100 transition"
//           >
//             <FaEnvelope />
//             <span>info@notioninsurance.com</span>
//           </a>

//           <a
//             href="tel:+919302182475"
//             className="flex items-center gap-2 hover:text-blue-100 transition"
//           >
//             <FaPhoneAlt />
//             <span>91-9302182475</span>
//           </a>

//           <a
//             href="tel:07554911343"
//             className="flex items-center gap-2 hover:text-blue-100 transition"
//           >
//             <FaPhoneAlt />
//             <span>0755-4911343</span>
//           </a>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl shadow-md border-b border-blue-100">
//         <div className="max-w-[1600px] mx-auto h-[86px] px-4 sm:px-6 flex items-center justify-between">
//           {/* Logo */}
//           <Link
//             to="/"
//             onClick={() => setOpen(false)}
//             className="flex items-center bg-white rounded-2xl px-2 sm:px-3 py-2 shadow-sm hover:shadow-md transition"
//           >
//             <img
//               src={logo}
//               alt="Notion Insurance Broker"
//               className="h-[56px] sm:h-[64px] object-contain"
//             />
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden lg:flex items-center gap-2 text-[18px] font-semibold bg-[#eef4fb] px-3 py-2 rounded-2xl">
//             <NavLink to="/" className={navLinkClass}>
//               Home
//             </NavLink>

//             <NavLink
//               to="/insurances"
//               className={({ isActive }) =>
//                 `${navLinkClass({ isActive })} flex items-center gap-2`
//               }
//             >
//               Insurances <FaChevronDown className="text-xs mt-1" />
//             </NavLink>

//             <NavLink to="/about" className={navLinkClass}>
//               About Us
//             </NavLink>

//             <NavLink to="/our-partners" className={navLinkClass}>
//               Our Partners
//             </NavLink>

//             <NavLink to="/claim" className={navLinkClass}>
//               Claim
//             </NavLink>

//             <NavLink to="/contact-us" className={navLinkClass}>
//               Contact Us
//             </NavLink>
//           </div>

//           {/* Desktop Buttons */}
//           <div className="hidden lg:flex items-center gap-3">
//             <Link
//               to="/login"
//               className="px-6 py-3 border border-blue-500 rounded-xl text-blue-600 font-bold hover:bg-blue-50 hover:-translate-y-1 transition"
//             >
//               LOG IN
//             </Link>

//             <Link
//               to="/become-posp"
//               className="px-6 py-3 bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 hover:-translate-y-1 transition"
//             >
//               BECOME A POSP
//             </Link>
//           </div>

//           {/* Mobile Button */}
//           <button
//             onClick={() => setOpen(!open)}
//             className="lg:hidden w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl"
//           >
//             {open ? <FaXmark /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`lg:hidden overflow-hidden transition-all duration-300 ${
//             open ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"
//           }`}
//         >
//           <div className="bg-white border-t border-blue-100 px-5 py-5 shadow-lg">
//             <div className="flex flex-col gap-3 text-[16px] font-semibold">
//               <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>
//                 Home
//               </NavLink>

//               <NavLink to="/insurances" onClick={() => setOpen(false)} className={navLinkClass}>
//                 Insurances
//               </NavLink>

//               <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>
//                 About Us
//               </NavLink>

//               <NavLink to="/our-partners" onClick={() => setOpen(false)} className={navLinkClass}>
//                 Our Partners
//               </NavLink>

//               <NavLink to="/claim" onClick={() => setOpen(false)} className={navLinkClass}>
//                 Claim
//               </NavLink>

//               <NavLink to="/contact-us" onClick={() => setOpen(false)} className={navLinkClass}>
//                 Contact Us
//               </NavLink>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
//                 <Link
//                   to="/login"
//                   onClick={() => setOpen(false)}
//                   className="text-center px-5 py-3 border border-blue-500 rounded-xl text-blue-600 font-bold"
//                 >
//                   LOG IN
//                 </Link>

//                 <Link
//                   to="/become-posp"
//                   onClick={() => setOpen(false)}
//                   className="text-center px-5 py-3 bg-blue-500 text-white rounded-xl font-bold"
//                 >
//                   BECOME A POSP
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React,{useState} from "react";
import {Link,NavLink} from "react-router-dom";
import {FaBars} from "react-icons/fa";
import {FaXmark} from "react-icons/fa6";

import logo from "../../images/Navbar/logo.webp";

const Navbar=()=>{

const[open,setOpen]=useState(false);

const navStyle=({isActive})=>
`px-5 py-3 rounded-full duration-300 font-medium
${isActive
?"bg-blue-600 text-white shadow-glow"
:"text-slate-700 hover:bg-slate-100"}
`;

return(

<header className="sticky top-0 z-50 bg-white">

<div className="glass border-b">

<div className="container-custom h-[75px] flex items-center justify-between">

<Link to="/">
<img
src={logo}
className="w-[170px]"
/>
</Link>

<div className="hidden lg:flex items-center gap-2 bg-white rounded-full p-2 shadow-card">

<NavLink to="/" className={navStyle}>
Home
</NavLink>

<NavLink
to="/insurances"
className={navStyle}
>
Insurance
</NavLink>

<NavLink
to="/about"
className={navStyle}
>
About
</NavLink>

<NavLink
to="/our-partners"
className={navStyle}
>
Partners
</NavLink>

<NavLink
to="/claim"
className={navStyle}
>
Claim
</NavLink>

<NavLink
to="/contact-us"
className={navStyle}
>
Contact
</NavLink>

</div>

<div className="hidden lg:flex gap-3">

<Link
to="/login"
className="px-5 py-3 rounded-full border border-blue-600 hover:bg-blue-50"
>
Login
</Link>

<Link
to="/become-posp"
className="px-6 py-3 rounded-full bg-blue-600 text-white shadow-glow"
>
Become POSP
</Link>

</div>

<button
className="lg:hidden text-2xl"
onClick={()=>setOpen(!open)}
>
{open?<FaXmark/>:<FaBars/>}
</button>

</div>

<div className={`lg:hidden bg-white transition-all overflow-hidden
${open?"max-h-[500px]":"max-h-0"}`}>

<div className="container-custom py-5 flex flex-col gap-4">

<NavLink to="/">Home</NavLink>
<NavLink to="/insurances">Insurance</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/our-partners">Partners</NavLink>
<NavLink to="/claim">Claim</NavLink>
<NavLink to="/contact-us">Contact</NavLink>

</div>

</div>

</div>

</header>

)

}

export default Navbar;