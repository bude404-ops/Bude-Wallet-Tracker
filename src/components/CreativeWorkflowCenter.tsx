
import {useState} from "react";


export default function CreativeWorkflowCenter(){


const [idea,setIdea]=useState("");

const [workflow,setWorkflow]=useState<string[]>([]);



function start(){

if(!idea) return;


setWorkflow([

...workflow,

"Workflow started: " + idea

]);


setIdea("");

}



return (

<div className="card">


<h2>
BudE Creative Workflow
</h2>


<textarea

placeholder="Start a complete story production..."

value={idea}

onChange={
e=>setIdea(e.target.value)
}

/>


<button onClick={start}>

Start Production

</button>


{

workflow.map((item,index)=>(

<p key={index}>
🚀 {item}
</p>

))

}


</div>

);


}

