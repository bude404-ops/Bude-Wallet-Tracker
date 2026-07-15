
import {useState} from "react";


export default function VisualGenerationCenter(){


const [prompt,setPrompt]=useState("");

const [queue,setQueue]=useState<string[]>([]);



function generate(){


if(!prompt) return;


setQueue([

...queue,

prompt

]);


setPrompt("");

}



return (

<div className="card">


<h2>
AI Visual Generation Center
</h2>


<textarea

placeholder="Describe image or video..."

value={prompt}

onChange={
e=>setPrompt(e.target.value)
}

/>


<button onClick={generate}>

Queue Generation

</button>


{

queue.map((item,index)=>(

<p key={index}>
🎨 {item}
</p>

))

}


</div>

);


}

