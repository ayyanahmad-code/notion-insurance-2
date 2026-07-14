import React,{useState} from "react";
import {motion,AnimatePresence} from "framer-motion";

function Target(){

const items=[

{
title:"Mission",
description:"Our endeavour is to formulate risk-based insurance programs and provide optimum insurance coverage."
},

{
title:"Vision",
description:"To become India's most trusted insurance partner through transparency and innovation."
},

{
title:"Goal",
description:"Deliver customer-first insurance services and long-term peace of mind."
}

];

const[active,setActive]=useState(0);

return(

<section className="py-2">

<div className="max-w-[1500px] mx-auto px-6">

<div className="bg-white rounded-[30px] shadow-xl p-6 lg:p-10">

<div className="flex justify-center gap-4 flex-wrap mb-8">

{items.map((item,index)=>(

<button
key={index}
onClick={()=>setActive(index)}
className={`
px-7
py-3
rounded-full
font-bold
duration-300

${active===index
?"bg-blue-600 text-white"
:"bg-slate-100"
}
`}
>

{item.title}

</button>

))}

</div>

<AnimatePresence mode="wait">

<motion.div
key={active}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
exit={{opacity:0}}
className="text-center"
>

<p className="text-gray-600 text-lg leading-9 max-w-[900px] mx-auto">

{items[active].description}

</p>

</motion.div>

</AnimatePresence>

</div>

</div>

</section>

)

}

export default Target;