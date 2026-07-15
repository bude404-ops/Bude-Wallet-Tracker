
import {useState} from "react";


export default function StoryMemoryCenter(){


const [memory,setMemory]=useState("");

const [items,setItems]=useState<string[]>([]);



function saveMemory(){


if(!memory) return;


setItems([

...items,

memory

]);


setMemory("");

}



return (

<div className="card">


<h2>
AI Story Memory
</h2>


<textarea

placeholder="Save story knowledge..."

value={memory}

onChange={
e=>setMemory(e.target.value)
}

/>


<button onClick={saveMemory}>

Save Memory

</button>


{

items.map((item,index)=>(

<p key={index}>
🧠 {item}
</p>

))

}


</div>

);


}

