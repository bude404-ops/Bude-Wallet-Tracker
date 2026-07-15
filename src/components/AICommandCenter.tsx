

import {useState} from "react";


export default function AICommandCenter(){


const [prompt,setPrompt]=useState("");

const [tasks,setTasks]=useState<string[]>([]);



function submit(){


setTasks([

...tasks,

"Processing: "+prompt

]);


setPrompt("");

}



return (

<div className="card">


<h2>
AI Command Center
</h2>


<textarea

placeholder="Describe what you want BudE to create..."

value={prompt}

onChange={
e=>setPrompt(e.target.value)
}

/>


<button onClick={submit}>

Send Command

</button>



<h3>
Task Queue
</h3>


{

tasks.map((task,i)=>(

<p key={i}>
🤖 {task}
</p>

))

}


</div>

);


}

