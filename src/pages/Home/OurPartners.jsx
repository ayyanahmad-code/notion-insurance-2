import React, { useState, useEffect, useRef } from "react";
import { FaHandshake } from "react-icons/fa";

import future from "../../images/partner/Future generali.webp";
import hdfcErgo from "../../images/partner/HDFC.webp";
import iciciPrudential from "../../images/partner/ICICI Prudential.webp";
import liberty from "../../images/partner/liberty.webp";
import maxLife from "../../images/partner/Max Life.webp";
import national from "../../images/partner/National insurance.webp";
import niva from "../../images/partner/Niva Bupa Health in.webp";
import oriental from "../../images/partner/oriental.webp";
import shriram from "../../images/partner/shriram.avif";
import hdfcLife from "../../images/partner/HDFC life.avif";
import United from "../../images/partner/United India.avif";
import SBI from "../../images/partner/SBI General.avif";
import raheja from "../../images/partner/raheja.avif";
import Star from "../../images/partner/Star personal & caring.avif";
import NewIndia from "../../images/partner/The new india assurance co.ltd.avif";


const partners = [
  {name:"Future Generali",logo:future},
  {name:"HDFC ERGO",logo:hdfcErgo},
  {name:"HDFC Life",logo:hdfcLife},
  {name:"ICICI Prudential",logo:iciciPrudential},
  {name:"Liberty",logo:liberty},
  {name:"Max Life",logo:maxLife},
  {name:"National Insurance",logo:national},
  {name:"Niva Bupa",logo:niva},
  {name:"Oriental Insurance",logo:oriental},
  {name:"Shriram Insurance",logo:shriram},
  {name:"SBI General",logo:SBI},
  {name:"Raheja QBE",logo:raheja},
  {name:"Star Health",logo:Star},
  {name:"New India Assurance",logo:NewIndia},
  {name:"United India",logo:United},
];

const OurPartners=()=>{

const [hovered,setHovered]=useState(null);

const [mousePos,setMousePos]=useState({
x:0,
y:0
});

const sliderRef=useRef(null);

const duplicated=[...partners,...partners];

const handleMouseMove=(e)=>{
setMousePos({
x:e.clientX,
y:e.clientY
});
};

return(

<section
className="py-20 bg-white overflow-hidden"
onMouseMove={handleMouseMove}
>

<div className="max-w-[1500px] mx-auto px-6">

{/* heading */}

<div className="text-center mb-16">

<div className="
inline-flex
items-center
gap-2
text-blue-700
font-semibold
mb-5
">

<FaHandshake/>

Trusted Partners

</div>

<h1 className="
text-3xl
md:text-5xl
font-black
text-slate-800
">

Our Insurance Partners

</h1>

<p className="
max-w-[700px]
mx-auto
text-gray-500
leading-8
mt-4
">

We collaborate with India's most trusted
insurance companies for secure and reliable
coverage.

</p>

<div className="
w-24
h-1
bg-blue-600
rounded-full
mx-auto
mt-5
"/>

</div>


{/* slider */}

<div
className="overflow-hidden relative"
ref={sliderRef}
>

<div
className="flex gap-4 items-center"
style={{
width:"max-content",
animation:"scroll 35s linear infinite",
animationPlayState:hovered?"paused":"running"
}}
>

{duplicated.map((partner,index)=>{

const active=
hovered?.name===partner.name;

return(

<div
key={index}
className="flex-shrink-0"

onMouseEnter={()=>
setHovered(partner)
}

onMouseLeave={()=>
setHovered(null)
}
>

<div

className={`
w-[210px]
h-[110px]
flex
items-center
justify-center
transition-all
duration-500

${active
?
"scale-125 z-20"
:
"hover:scale-110"
}

`}

style={{
transform:active
?
`translate(
${(mousePos.x%20-10)/4}px,
${(mousePos.y%20-10)/4}px
)`
:"none"
}}
>

<img
src={partner.logo}
alt={partner.name}
className="
max-w-full
max-h-[100px]
object-contain
"
/>

</div>

</div>

)

})}

</div>

</div>


{/* popup */}

{hovered && (

<div

className="
fixed
z-50
pointer-events-none
"

style={{

left:Math.min(
mousePos.x+25,
window.innerWidth-420
),

top:Math.max(
mousePos.y-230,
20
)

}}
>

<div

className="
group
w-[400px]
h-[240px]
rounded-[30px]
p-5

bg-white/70
backdrop-blur-xl

border
border-white

shadow-[0_20px_60px_rgba(0,0,0,.18)]

animate-popup
"

style={{

transform:
`perspective(900px)
rotateX(${(mousePos.y%30-15)/6}deg)
rotateY(${(mousePos.x%30-15)/-6}deg)`

}}
>

<div className="
h-[70%]
flex
items-center
justify-center
rounded-2xl
overflow-hidden
">

<img
src={hovered.logo}
alt=""
className="
w-full
h-full
object-contain
group-hover:scale-110
duration-700
"
/>

</div>


<div className="
h-[30%]
flex
items-center
justify-center
">

<h3 className="
text-xl
font-bold
text-slate-800
">

{hovered.name}

</h3>

</div>

</div>

</div>

)}

<style>

{`

@keyframes scroll{

0%{
transform:translateX(0)
}

100%{
transform:translateX(-50%)
}

}

@keyframes popup{

0%{
opacity:0;
transform:
translateY(20px)
scale(.9)
}

100%{
opacity:1;
transform:
translateY(0)
scale(1)
}

}

.animate-popup{

animation:
popup .35s
cubic-bezier(
0.22,
1,
0.36,
1
)

}

`}

</style>

</div>

</section>

)

}

export default OurPartners;