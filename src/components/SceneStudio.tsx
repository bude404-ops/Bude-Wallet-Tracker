

import {useState} from "react";


export default function SceneStudio(){


const [episode,setEpisode]=useState("");

const [title,setTitle]=useState("");

const [description,setDescription]=useState("");

const [dialogue,setDialogue]=useState("");

const [scenes,setScenes]=useState<string[]>([]);



function createScene(){


setScenes([

...scenes,

episode+
" | "+
title+
" | "+
description

]);


setEpisode("");

setTitle("");

setDescription("");

setDialogue("");

}



return (

<div className="card">


<h2>
Scene & Script Studio
</h2>


<input

placeholder="Episode"

value={episode}

onChange={
e=>setEpisode(e.target.value)
}

/>


<input

placeholder="Scene Title"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>


<textarea

placeholder="Scene Description"

value={description}

onChange={
e=>setDescription(e.target.value)
}

/>


<textarea

placeholder="Dialogue"

value={dialogue}

onChange={
e=>setDialogue(e.target.value)
}

/>


<button onClick={createScene}>

Create Scene

</button>



<h3>
Scenes
</h3>


{

scenes.map((scene,i)=>(

<p key={i}>
🎬 {scene}
</p>

))

}


</div>

);


}

