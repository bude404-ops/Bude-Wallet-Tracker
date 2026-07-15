/**
 * BudE StoryBoard AI
 * Update v0063
 *
 * Episode Manager Foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function createFolder(folder){

    const target =
        path.join(ROOT, folder);


    if(!fs.existsSync(target)){

        fs.mkdirSync(
            target,
            {
                recursive:true
            }
        );

        console.log(
            "Created:",
            folder
        );

    }

}



function createFile(file, content){

    const target =
        path.join(ROOT, file);


    const folder =
        path.dirname(target);


    if(!fs.existsSync(folder)){

        fs.mkdirSync(
            folder,
            {
                recursive:true
            }
        );

    }


    if(!fs.existsSync(target)){

        fs.writeFileSync(
            target,
            content
        );

        console.log(
            "Created:",
            file
        );

    }

}



function run(){

    console.log(
        "Installing Episode Manager..."
    );


    createFolder(
        "projects/series"
    );


    createFolder(
        "projects/episodes"
    );



    createFile(

        "src/services/episodeService.ts",

`
export interface Episode {

id:string;

title:string;

description:string;

duration:number;

format:string;

status:string;

}



export function createEpisode(

title:string,

duration:number

):Episode {


return {

id:
crypto.randomUUID(),

title,

description:"",

duration,

format:
duration <= 30
? "short"
: "episode",

status:
"planning"

};


}
`

    );



    createFile(

        "src/components/EpisodeManager.tsx",

`
import {useState} from "react";


export default function EpisodeManager(){


const [title,setTitle]=useState("");

const [episodes,setEpisodes]=useState<string[]>([]);



function createEpisode(){


if(!title) return;


setEpisodes([

...episodes,

title

]);


setTitle("");

}



return (

<div className="card">


<h2>
Episode Manager
</h2>


<input

placeholder="Episode title"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>


<button onClick={createEpisode}>

Create Episode

</button>


{

episodes.map((episode,index)=>(

<p key={index}>
🎞️ Episode {index+1}: {episode}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "Episode Manager installed."
    );

}



module.exports = {

run

};
