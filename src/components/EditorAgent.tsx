

import {useState} from "react";


export default function EditorAgent(){


const [notes,setNotes]=useState("");

const [result,setResult]=useState("");



function review(){


setResult(

"Continuity Review Complete: "+

notes

);


}



return (

<div className="card">


<h2>
Editor AI
</h2>


<textarea

placeholder="Story notes or changes..."

value={notes}

onChange={
e=>setNotes(e.target.value)
}

/>


<button onClick={review}>

Review Continuity

</button>


<p>
{result}
</p>


</div>

);


}

