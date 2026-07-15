

import {useState} from "react";


export default function WorldBuilder(){


const [name,setName]=useState("");

const [description,setDescription]=useState("");

const [locations,setLocations]=useState("");

const [factions,setFactions]=useState("");

const [worlds,setWorlds]=useState<string[]>([]);



function createWorld(){


setWorlds([

...worlds,

name+" | "+locations+" | "+factions

]);


setName("");

setDescription("");

setLocations("");

setFactions("");

}



return (

<div className="card">


<h2>
World Builder
</h2>


<input

placeholder="World Name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<textarea

placeholder="World Description"

value={description}

onChange={
e=>setDescription(e.target.value)
}

/>


<input

placeholder="Locations"

value={locations}

onChange={
e=>setLocations(e.target.value)
}

/>


<input

placeholder="Factions"

value={factions}

onChange={
e=>setFactions(e.target.value)
}

/>


<button onClick={createWorld}>

Create World

</button>



<h3>
Created Worlds
</h3>


{

worlds.map((w,i)=>(

<p key={i}>
🌎 {w}
</p>

))

}


</div>

);


}

