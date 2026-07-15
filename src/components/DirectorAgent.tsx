

import {useState} from "react";


export default function DirectorAgent(){


const [project,setProject]=useState("");

const [plan,setPlan]=useState("");



function direct(){


setPlan(

"Director Plan Created: "

+project+

" | Episodes Planned | Scenes Organized | Production Ready"

);


}



return (

<div className="card">


<h2>
Director AI
</h2>


<textarea

placeholder="Project information..."

value={project}

onChange={
e=>setProject(e.target.value)
}

/>


<button onClick={direct}>

Create Production Plan

</button>


<p>
{plan}
</p>


</div>

);


}

