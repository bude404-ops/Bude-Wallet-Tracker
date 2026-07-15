/**
 * BudE StoryBoard AI
 * Update v0074
 *
 * AI Story Memory Database Foundation
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
        "Installing AI Story Memory Database..."
    );


    createFolder(
        "memory/story"
    );


    createFolder(
        "memory/projects"
    );


    createFolder(
        "memory/search"
    );



    createFile(

        "src/services/storyMemoryService.ts",

`
export interface StoryMemory {

id:string;

project:string;

category:string;

content:string;

created:string;

}



export function createMemory(

project:string,

category:string,

content:string

):StoryMemory {


return {

id:
crypto.randomUUID(),

project,

category,

content,

created:
new Date().toISOString()

};


}



export function searchMemory(

memories:StoryMemory[],

query:string

){


return memories.filter(memory =>

memory.content
.toLowerCase()
.includes(
query.toLowerCase()
)

);


}
`

    );



    createFile(

        "src/components/StoryMemoryCenter.tsx",

`
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

`

    );



    console.log(
        "AI Story Memory Database installed."
    );

}



module.exports = {

run

};
