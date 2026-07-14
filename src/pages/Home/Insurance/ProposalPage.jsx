import React,{useState} from "react";
import {
FaLock,
FaMotorcycle
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const ProposalPage=()=>{

const navigate=useNavigate();

const [data,setData]=useState({

title:"Mr.",
ownerName:"Sunil Patel",
mobile:"9876543210",
email:"sunil@gmail.com",
expiry:"2026-05-27",
ownerChanged:"No",
claim:"No",
ncb:"20%"

});


const handleChange=(e)=>{

setData({
...data,
[e.target.name]:e.target.value
})

};


return(

<div className="min-h-screen bg-[#eef3fa] p-6">

<div className="max-w-[1400px] mx-auto">

<div className="grid lg:grid-cols-[1fr_350px] gap-6">


{/* LEFT SECTION */}

<div
className="
bg-white
rounded-3xl
p-8
shadow-sm
"
>

<h2 className="text-3xl font-bold">

Hi Sunil! Great Choice

</h2>

<p className="text-gray-500 mt-2 mb-8">

65% of stolen vehicles are never found.

</p>



<div className="grid md:grid-cols-[120px_1fr] gap-4">

<div>

<label className="text-sm">

Title

</label>

<select
name="title"
value={data.title}
onChange={handleChange}
className="
w-full
border
rounded-xl
p-3
mt-2
"
>

<option>Mr.</option>
<option>Mrs.</option>
<option>Miss</option>

</select>

</div>



<div>

<label className="text-sm">

Vehicle Owner Name

</label>

<input
name="ownerName"
value={data.ownerName}
onChange={handleChange}
className="
w-full
border
rounded-xl
p-3
mt-2
"
/>

</div>

</div>



<div className="mt-5">

<label>

Mobile Number

</label>

<input
name="mobile"
value={data.mobile}
onChange={handleChange}
className="
w-full
border
rounded-xl
p-3
mt-2
"
/>

</div>



<div className="mt-5">

<label>

Email Address

</label>

<input
name="email"
value={data.email}
onChange={handleChange}
className="
w-full
border
rounded-xl
p-3
mt-2
"
/>

</div>



<div className="mt-8">

<h3
className="
font-bold
text-lg
mb-5
"
>

Previous Policy Details

</h3>


<div className="space-y-6">


<div>

<label>

Policy Expiry Date

</label>

<input
type="date"
name="expiry"
value={data.expiry}
onChange={handleChange}
className="
w-full
border
rounded-xl
p-3
mt-2
"
/>

</div>



<div>

<p className="mb-3">

Has owner changed?

</p>

<div className="flex gap-8">

<label>

<input
type="radio"
name="ownerChanged"
value="No"
checked={data.ownerChanged==="No"}
onChange={handleChange}
/>

<span className="ml-2">

No

</span>

</label>


<label>

<input
type="radio"
name="ownerChanged"
value="Yes"
checked={data.ownerChanged==="Yes"}
onChange={handleChange}
/>

<span className="ml-2">

Yes

</span>

</label>

</div>

</div>




<div>

<p className="mb-3">

Claim last year?

</p>

<div className="flex gap-8">

<label>

<input
type="radio"
name="claim"
value="No"
checked={data.claim==="No"}
onChange={handleChange}
/>

<span className="ml-2">

No

</span>

</label>


<label>

<input
type="radio"
name="claim"
value="Yes"
checked={data.claim==="Yes"}
onChange={handleChange}
/>

<span className="ml-2">

Yes

</span>

</label>

</div>

</div>



<div>

<label>

NCB

</label>

<select
name="ncb"
value={data.ncb}
onChange={handleChange}
className="
w-full
border
rounded-xl
p-3
mt-2
"
>

<option>0%</option>
<option>20%</option>
<option>25%</option>
<option>35%</option>
<option>50%</option>

</select>

</div>

</div>

</div>

</div>




{/* RIGHT CARD */}

<div
className="
bg-white
rounded-3xl
shadow-sm
p-6
h-fit
sticky
top-5
"
>

<div className="flex justify-between items-center">

<div>

<h3 className="font-bold text-lg">

TVS Apache

</h3>

<p className="text-sm text-gray-500">

MP04ZZ8790

</p>

</div>

<FaMotorcycle className="text-4xl text-blue-600"/>

</div>



<div className="border-t my-5 pt-5">

<h4 className="font-bold">

United India Insurance

</h4>

<p className="text-sm text-gray-500">

1 Year Own Damage

</p>

</div>



<div className="space-y-4">

<Row
title="Net Premium"
value="₹1088"
/>

<Row
title="GST"
value="₹196"
/>

<hr/>

<Row
title="Final Premium"
value="₹1284"
bold
/>

</div>




<button
onClick={()=>navigate("/payment")}
className="
w-full
bg-blue-600
text-white
rounded-xl
py-4
mt-6
font-bold
flex
justify-center
items-center
gap-3
hover:bg-blue-700
duration-300
"
>

<FaLock/>

Pay Securely

</button>



<p className="text-xs text-center text-gray-500 mt-3">

By clicking Pay Securely you agree to our terms.

</p>

</div>


</div>

</div>

</div>

)

}



const Row=({
title,
value,
bold
})=>(

<div className="flex justify-between">

<p
className={
bold
?
"font-bold"
:
"text-gray-500"
}
>

{title}

</p>

<p
className={
bold
?
"font-bold text-blue-600"
:
""
}
>

{value}

</p>

</div>

);


export default ProposalPage;