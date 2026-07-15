

import {useState} from "react";


export default function CharacterStudio(){


const [name,setName]=useState("");

const [role,setRole]=useState("");

const [traits,setTraits]=useState("");

const [saved,setSaved]=useState<string[]>([]);



function create(){


setSaved([

...saved,

name+" - "+role+" - "+traits

]);


setName("");

setRole("");

setTraits("");

}



return (

<div className="card">


<h2>
Character Studio
</h2>


<input

placeholder="Character Name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<input

placeholder="Role"

value={role}

onChange={
e=>setRole(e.target.value)
}

/>


<input

placeholder="Traits"

value={traits}

onChange={
e=>setTraits(e.target.value)
}

/>


<button onClick={create}>

Create Character

</button>



<h3>
Characters
</h3>


{

saved.map((c,i)=>(

<p key={i}>
🧬 {c}
</p>

))

}


</div>

);


}

