

import {useState} from "react";


export default function EpisodePlanner(){


const [title,setTitle]=useState("");

const [season,setSeason]=useState("1");

const [summary,setSummary]=useState("");

const [episodes,setEpisodes]=useState<string[]>([]);



function createEpisode(){


setEpisodes([

...episodes,

"Season "+season+
" - "+
title+
" : "+
summary

]);


setTitle("");

setSummary("");

}



return (

<div className="card">


<h2>
Episode Planner
</h2>


<input

placeholder="Episode Title"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>


<input

placeholder="Season"

value={season}

onChange={
e=>setSeason(e.target.value)
}

/>


<textarea

placeholder="Episode Summary"

value={summary}

onChange={
e=>setSummary(e.target.value)
}

/>


<button onClick={createEpisode}>

Create Episode

</button>



<h3>
Episodes
</h3>


{

episodes.map((ep,i)=>(

<p key={i}>
🎬 {ep}
</p>

))

}


</div>

);


}

