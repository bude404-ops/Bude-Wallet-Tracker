/**
 * BudE StoryBoard AI
 * Update v0066
 *
 * AI World Builder Foundation
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
        "Installing AI World Builder..."
    );


    createFolder(
        "worlds"
    );


    createFolder(
        "worlds/lore"
    );


    createFolder(
        "worlds/locations"
    );



    createFile(

        "src/services/worldBuilderService.ts",

`
export interface WorldEntry {

id:string;

name:string;

type:string;

description:string;

rules:string[];

}



export function createWorldEntry(

name:string,

type:string

):WorldEntry {


return {

id:
crypto.randomUUID(),

name,

type,

description:"",

rules:[]

};


}
`

    );



    createFile(

        "src/components/WorldBuilder.tsx",

`
import {useState} from "react";


export default function WorldBuilder(){


const [name,setName]=useState("");

const [worlds,setWorlds]=useState<string[]>([]);



function createWorld(){


if(!name) return;


setWorlds([

...worlds,

name

]);


setName("");

}



return (

<div className="card">


<h2>
AI World Builder
</h2>


<input

placeholder="World or location name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<button onClick={createWorld}>

Create World

</button>


{

worlds.map((world,index)=>(

<p key={index}>
🌎 {world}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "AI World Builder installed."
    );

}



module.exports = {

run

};
