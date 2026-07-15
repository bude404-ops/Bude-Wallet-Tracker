

import {useState} from "react";


export default function ProjectManager(){


const [name,setName]=useState("");

const [projects,setProjects]=useState<string[]>([]);



function create(){


setProjects([

...projects,

name+" - Story Development - 0%"

]);


setName("");

}



return (

<div className="card">


<h2>
Project Manager
</h2>


<input

placeholder="Project Name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<button onClick={create}>

Create Project

</button>


<h3>
Projects
</h3>


{

projects.map((p,i)=>(

<p key={i}>
📌 {p}
</p>

))

}


</div>

);


}

