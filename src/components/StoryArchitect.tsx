

import {useState} from "react";


export default function StoryArchitect(){


const [idea,setIdea]=useState("");

const [result,setResult]=useState("");



function generate(){


setResult(

"Story Blueprint Created: "+

idea+

" | Acts: Beginning, Conflict, Resolution"

);


}



return (

<div className="card">


<h2>
Story Architect AI
</h2>


<textarea

placeholder="Give the AI a story idea..."

value={idea}

onChange={
e=>setIdea(e.target.value)
}

/>


<button onClick={generate}>

Create Blueprint

</button>


<p>

{result}

</p>


</div>

);


}

