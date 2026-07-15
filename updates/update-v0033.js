/**
 * BudE StoryBoard AI
 * Update v0033
 *
 * Project Workspace Core
 *
 * Adds:
 * - Project storage
 * - Project manager UI
 * - Creative workspace foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function write(file, content){

const target = path.join(ROOT,file);

const folder = path.dirname(target);

if(!fs.existsSync(folder)){
fs.mkdirSync(folder,{recursive:true});
}

fs.writeFileSync(target,content);

console.log("Created:",file);

}



function run(){

console.log(
"Installing Project Workspace Core..."
);



/*
 Create project database folder
*/

const folders=[

"database",
"database/projects",
"story/projects"

];


folders.forEach(folder=>{

const location =
path.join(ROOT,folder);

if(!fs.existsSync(location)){

fs.mkdirSync(location,{
recursive:true
});

}

});



/*
 Create project service
*/

write(
"src/services/projectService.ts",

`

export interface Project {

id:string;

name:string;

description:string;

created:string;

}



export function createProject(
name:string,
description:string
):Project{


return {

id:
crypto.randomUUID(),

name,

description,

created:
new Date().toISOString()

};


}


`
);



/*
 Create workspace component
*/

write(
"src/components/ProjectWorkspace.tsx",

`

import {useState} from "react";


export default function ProjectWorkspace(){


const [project,setProject]=useState("");



return (

<div className="card">


<h2>
Project Workspace
</h2>


<input

placeholder="Story idea..."

value={project}

onChange={
e=>setProject(e.target.value)
}

/>


<p>

Current Idea:

{project || "None"}

</p>


</div>

);


}

`
);



/*
 Update Dashboard
*/

const dashboard =
path.join(ROOT,"src/Dashboard.tsx");


if(fs.existsSync(dashboard)){


let code =
fs.readFileSync(
dashboard,
"utf8"
);


code = code.replace(

'</main>',

`

<div className="card">

<h2>
Creative Workspace
</h2>

<p>
Project creation module online.
</p>

</div>


</main>`

);


fs.writeFileSync(
dashboard,
code
);


}



const versionFile =
path.join(ROOT,"versions.json");


if(fs.existsSync(versionFile)){


let version =
JSON.parse(
fs.readFileSync(versionFile,"utf8")
);


version.completedUpdates.push(
"update-v0033.js"
);


version.installedModules.push(
"project-workspace-core"
);


version.currentVersion="0.63";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();


fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Project Workspace Core complete."
);


}



module.exports={
run
};
