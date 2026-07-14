import React from "react";
import {motion} from "framer-motion";

import ceoImg from "../../images/About/Bharat.jpg";
import directorImg from "../../images/About/img4.png";
import managingDirectorImg from "../../images/About/img2.jpg";
import directorSupportImg from "../../images/About/img1.jpg";
import cooImg from "../../images/About/img5.png";

function OurExperts(){

const experts=[

{
name:"Bharat Srivastava",
position:"Principal Officer & C.E.O",
image:ceoImg
},

{
name:"Suresh G Malviya",
position:"Director",
image:directorImg
},

{
name:"Arun Gupta",
position:"Managing Director",
image:managingDirectorImg
},

{
name:"Kanchan S Malviya",
position:"Director",
image:directorSupportImg
},

{
name:"Avinash Gupta",
position:"Chief Operating Officer",
image:cooImg
}

]

return(

<section className="py-2">

<div className="max-w-[1500px] mx-auto px-6">

<div className="bg-white rounded-[30px] shadow-xl p-6 lg:p-10">

<div className="text-center mb-10">

<p className="text-blue-600 font-bold uppercase tracking-[3px]">

Our Team

</p>

<h2 className="text-3xl lg:text-5xl font-black mt-2">

Meet Our Experts

</h2>

<div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded-full"/>

</div>


<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">

{experts.map((item,index)=>(

<motion.div
key={index}
whileHover={{
y:-8
}}
className="
bg-slate-50
rounded-3xl
p-5
text-center
hover:shadow-xl
duration-500
"
>

<img
src={item.image}
className="
w-24
h-24
rounded-full
mx-auto
object-cover
border-4
border-white
shadow-xl
"
/>

<h3 className="font-bold mt-5">

{item.name}

</h3>

<p className="text-blue-600 text-sm mt-2">

{item.position}

</p>

</motion.div>

))}

</div>

</div>

</div>

</section>

)

}

export default OurExperts;