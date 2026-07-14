import React,{useState} from "react";
import {
FaCreditCard,
FaQrcode,
FaUniversity
} from "react-icons/fa";

const PaymentPage=()=>{

const [method,setMethod]=useState("qr");

return(

<div className="min-h-screen bg-[#eef3fa] p-6">

<div className="max-w-[1400px] mx-auto">

<h1 className="text-4xl font-bold mb-8">

Complete Payment

</h1>

<div className="grid lg:grid-cols-[1fr_350px] gap-6">

{/* LEFT */}

<div className="bg-white rounded-3xl p-8 shadow">

<div className="flex gap-4 mb-8 flex-wrap">

<button
onClick={()=>setMethod("qr")}
className={`
px-5 py-3 rounded-xl font-bold
${method==="qr"
?"bg-blue-600 text-white"
:"bg-gray-100"}
`}
>

<FaQrcode className="inline mr-2"/>

QR Payment

</button>

<button
onClick={()=>setMethod("card")}
className={`
px-5 py-3 rounded-xl font-bold
${method==="card"
?"bg-blue-600 text-white"
:"bg-gray-100"}
`}
>

<FaCreditCard className="inline mr-2"/>

Debit Card

</button>

<button
onClick={()=>setMethod("bank")}
className={`
px-5 py-3 rounded-xl font-bold
${method==="bank"
?"bg-blue-600 text-white"
:"bg-gray-100"}
`}
>

<FaUniversity className="inline mr-2"/>

Net Banking

</button>

</div>


{method==="qr" &&(

<div className="text-center">

<img
src="https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=NotionInsurancePayment"
className="mx-auto rounded-xl"
/>

<p className="mt-5 text-gray-600">

Scan QR using any UPI app

</p>

</div>

)}


{method==="card" &&(

<div className="space-y-5">

<input
placeholder="Card Number"
className="
w-full
border
rounded-xl
p-4
"
/>

<div className="grid grid-cols-2 gap-4">

<input
placeholder="MM/YY"
className="
border
rounded-xl
p-4
"
/>

<input
placeholder="CVV"
className="
border
rounded-xl
p-4
"
/>

</div>

<input
placeholder="Card Holder Name"
className="
w-full
border
rounded-xl
p-4
"
/>

<button
className="
w-full
bg-blue-600
text-white
rounded-xl
py-4
font-bold
"
>

Pay ₹1,284

</button>

</div>

)}



{method==="bank" &&(

<div className="space-y-4">

<select
className="
w-full
border
rounded-xl
p-4
"
>

<option>SBI</option>
<option>HDFC</option>
<option>ICICI</option>
<option>Axis Bank</option>

</select>

<button
className="
w-full
bg-blue-600
text-white
rounded-xl
py-4
font-bold
"
>

Continue

</button>

</div>

)}

</div>


{/* RIGHT */}

<div className="bg-white rounded-3xl p-6 shadow h-fit">

<h2 className="text-xl font-bold mb-6">

Payment Summary

</h2>

<div className="space-y-4">

<Row
title="Vehicle"
value="TVS Apache"
/>

<Row
title="Insurance"
value="United India"
/>

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
title="Final Amount"
value="₹1284"
bold
/>

</div>

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

<p className={bold?"font-bold":"text-gray-500"}>

{title}

</p>

<p className={bold?"font-bold text-blue-600":""}>

{value}

</p>

</div>

)

export default PaymentPage;