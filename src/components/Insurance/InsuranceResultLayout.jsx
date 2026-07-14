import React, { useState } from "react";
import {
  FaEdit,
  FaChevronRight,
  FaCheckCircle
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const InsuranceResultLayout = ({
  vehicleType,
  vehicleName,
  regNo,
}) => {

  const navigate = useNavigate();

  const [showDetails, setShowDetails] = useState(false);

  const companies = [
    {
      name: "Digit Insurance",
      price: "₹1,366",
      features: [
        "Roadside Assistance",
        "Battery Problems"
      ]
    },
    {
      name: "ICICI Lombard",
      price: "₹1,540",
      features: [
        "Zero Dep",
        "Cashless Garage"
      ]
    },
    {
      name: "SBI General",
      price: "₹1,790",
      features: [
        "24x7 Support",
        "Quick Claim"
      ]
    },
    {
      name: "National Insurance",
      price: "₹1,880",
      features: [
        "Third Party",
        "Engine Cover"
      ]
    }
  ];

  return (

<div className="min-h-screen bg-[#f4f7fc] p-6">

<div className="max-w-[1500px] mx-auto">

<div className="grid lg:grid-cols-[320px_1fr] gap-7">


{/* LEFT SIDEBAR */}

<div className="space-y-5">


{/* VEHICLE DETAILS */}

<div className="bg-white rounded-2xl p-5 shadow-sm border">

<div className="flex items-center justify-between mb-5">

<h2 className="text-xl font-bold">

Vehicle Details

</h2>

<button
onClick={() => setShowDetails(!showDetails)}
className="
flex
items-center
gap-2
text-blue-600
font-medium
text-sm
"
>

<FaEdit/>

{showDetails ? "Close" : "Edit"}

</button>

</div>


<div className="space-y-4">

<Row
label="Vehicle Type"
value={vehicleType}
/>

<Row
label="Vehicle Number"
value={regNo}
/>

<Row
label="Vehicle Name"
value={vehicleName}
/>

</div>


{showDetails && (

<div
className="
mt-6
border-t
pt-5
space-y-4
"
>

<SelectRow
label="Registration Year"
options={[
"2025",
"2024",
"2023",
"2022",
"2021",
"2020",
"2019"
]}
/>


<SelectRow
label="Policy Type"
options={[
"Comprehensive",
"Third Party"
]}
/>


<SelectRow
label="Policy Expiry"
options={[
"Active",
"Expired < 90 days",
"Expired > 90 days"
]}
/>

<button
className="
w-full
bg-blue-600
text-white
rounded-xl
py-3
font-bold
"
>

Update Details

</button>

</div>

)}

</div>



{/* ADDONS */}

<div className="bg-white rounded-2xl p-5 shadow-sm border">

<h3 className="text-lg font-bold mb-5">

Addons

</h3>

<div className="space-y-4">

<label className="flex gap-3">

<input type="checkbox"/>

<span>
Personal Accident Cover
</span>

</label>


<label className="flex gap-3">

<input type="checkbox"/>

<span>
Passenger Cover
</span>

</label>


<label className="flex gap-3">

<input type="checkbox"/>

<span>
Zero Depreciation
</span>

</label>

</div>

</div>

</div>



{/* RIGHT SECTION */}

<div>

<h2 className="text-3xl font-bold mb-6">

Insurance Plans

</h2>

<div className="space-y-5">

{companies.map((item,index)=>(

<div
key={index}
className="
bg-white
rounded-2xl
p-6
border
shadow-sm
flex
flex-col
lg:flex-row
justify-between
items-start
lg:items-center
gap-5
"
>

<div>

<h3 className="text-2xl font-bold">

{item.name}

</h3>

<div className="mt-4 flex flex-wrap gap-4">

{item.features.map((feature,i)=>(

<div
key={i}
className="
flex
items-center
gap-2
text-sm
text-gray-600
"
>

<FaCheckCircle className="text-green-500"/>

{feature}

</div>

))}

</div>

</div>


<button
onClick={() =>
navigate("/proposal")
}
className="
bg-blue-600
text-white
px-8
py-4
rounded-xl
font-bold
flex
items-center
gap-4
hover:bg-blue-700
duration-300
"
>

<div className="flex flex-col items-start">

<span>

Buy Now

</span>

<span className="text-xl">

{item.price}

</span>

</div>

<FaChevronRight/>

</button>

</div>

))}

</div>

</div>

</div>

</div>

</div>

  );
};



const Row = ({
label,
value
}) => (

<div className="flex justify-between">

<p className="text-gray-500">

{label}

</p>

<p className="font-semibold">

{value}

</p>

</div>

);



const SelectRow = ({
label,
options
}) => (

<div>

<label
className="
block
mb-2
text-sm
text-gray-500
"
>

{label}

</label>

<select
className="
w-full
border
rounded-xl
px-4
py-3
outline-none
"
>

{options.map((item,index)=>(

<option
key={index}
>

{item}

</option>

))}

</select>

</div>

);


export default InsuranceResultLayout;