

import {useState} from "react";


export default function ProductionWorkflow(){


const [prompt,setPrompt]=useState("");

const [status,setStatus]=useState("");



function start(){


setStatus(

"Production Started: "

+prompt+

" → Story → Characters → World → Episodes"

);


}



return (

<div className="card">


<h2>
Prompt To Production
</h2>


<textarea

placeholder="Describe your movie, episode, or series idea..."

value={prompt}

onChange={
e=>setPrompt(e.target.value)
}

/>


<button onClick={start}>

Start Production

</button>


<p>
{status}
</p>


</div>

);


}

