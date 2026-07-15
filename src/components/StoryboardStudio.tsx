

import {useState} from "react";


export default function StoryboardStudio(){


const [scene,setScene]=useState("");

const [camera,setCamera]=useState("");

const [description,setDescription]=useState("");

const [shots,setShots]=useState<string[]>([]);



function createShot(){


setShots([

...shots,

scene+
" | "+
camera+
" | "+
description

]);


setScene("");

setCamera("");

setDescription("");

}



return (

<div className="card">


<h2>
Storyboard Studio
</h2>


<input

placeholder="Scene"

value={scene}

onChange={
e=>setScene(e.target.value)
}

/>


<input

placeholder="Camera Angle"

value={camera}

onChange={
e=>setCamera(e.target.value)
}

/>


<textarea

placeholder="Shot Description"

value={description}

onChange={
e=>setDescription(e.target.value)
}

/>


<button onClick={createShot}>

Create Shot

</button>



<h3>
Storyboard Shots
</h3>


{

shots.map((shot,i)=>(

<p key={i}>
🎥 {shot}
</p>

))

}


</div>

);


}

