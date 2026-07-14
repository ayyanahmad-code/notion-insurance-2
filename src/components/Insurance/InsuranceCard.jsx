import { FaCheck } from "react-icons/fa";

export default function InsuranceCard({
name,
price
}){

return(

<div className="
bg-white
rounded-2xl
p-6
shadow
flex
items-center
justify-between
">

<div>

<h3 className="
text-2xl
font-bold
mb-3
">

{name}

</h3>

<div className="
bg-green-50
text-green-700
px-3
py-2
rounded
inline-flex
gap-2
items-center
">

<FaCheck/>

RSA Included

</div>

</div>


<div className="text-right">

<button
className="
bg-blue-600
text-white
px-8
py-3
rounded-xl
font-bold
"
>

Buy now

</button>

<p className="
text-3xl
font-bold
mt-3
">

{price}

</p>

</div>

</div>

)

}