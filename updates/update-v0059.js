/**
 * BudE StoryBoard AI
 * Update v0059
 *
 * Story Project Core Foundation
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
        "Installing Story Project Core..."
    );


    createFolder(
        "projects"
    );


    createFolder(
        "projects/stories"
    );


    createFolder(
        "projects/assets"
    );


    createFolder(
        "projects/episodes"
    );


    createFolder(
        "projects/scenes"
    );



    createFile(

        "src/services/storyProjectService.ts",

`
export interface StoryProject {

id:string;

title:string;

description:string;

created:string;

}


export function createStoryProject(

title:string,

description:string

):StoryProject{


return {

id:
crypto.randomUUID(),

title,

description,

created:
new Date().toISOString()

};


}
`

    );



    createFile(

        "src/components/StoryProjectCenter.tsx",

`
import {useState} from "react";


export default function StoryProjectCenter(){


const [title,setTitle]=useState("");

const [projects,setProjects]=useState<string[]>([]);



function create(){


if(!title) return;


setProjects([

...projects,

title

]);


setTitle("");

}



return (

<div className="card">


<h2>
Story Projects
</h2>


<input

placeholder="Story title"

value={title}

onChange={
e=>setTitle(e.target.value)
}

/>


<button onClick={create}>
Create Story
</button>


{

projects.map((p,i)=>(

<p key={i}>
📖 {p}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "Story Project Core installed."
    );

}



module.exports = {

run

};
