

import {useState} from "react";


export default function WorldAgent(){


const [idea,setIdea]=useState("");

const [world,setWorld]=useState("");



function generate(){


setWorld(

"World Created: "+idea+

" | Locations | Factions | Lore Generated"

);


}



return (

<div className="card">


<h2>
World Builder AI
</h2>


<textarea

placeholder="Describe the world..."

value={idea}

onChange={
e=>setIdea(e.target.value)
}

/>


<button onClick={generate}>

Generate World

</button>


<p>
{world}
</p>


</div>

);


}

