

import {useState} from "react";


export default function CharacterAgent(){


const [story,setStory]=useState("");

const [character,setCharacter]=useState("");



function generate(){


setCharacter(

"Character Created: Hero | Role: Main Character | Motivation: "

+story

);


}



return (

<div className="card">


<h2>
Character Agent AI
</h2>


<textarea

placeholder="Connect story blueprint..."

value={story}

onChange={
e=>setStory(e.target.value)
}

/>


<button onClick={generate}>

Generate Character

</button>


<p>
{character}
</p>


</div>

);


}

