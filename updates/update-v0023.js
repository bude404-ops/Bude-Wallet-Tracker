/**
 * BudE StoryBoard AI
 * Update v0023
 *
 * Project Database Core
 *
 * Adds:
 * - Project storage layer
 * - Project manager UI
 * - Local database foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function write(file,content){

const target =
path.join(ROOT,file);

const folder =
path.dirname(target);


if(!fs.existsSync(folder)){

fs.mkdirSync(folder,{
recursive:true
});

}


fs.writeFileSync(
target,
content
);


console.log(
"Created:",
file
);

}



function run(){


console.log(
"Installing Project Database Core..."
);



write(
"src/services/projectService.ts",

`

export interface Project {

id:string;

title:string;

description:string;

created:string;

status:string;

}



const KEY =
"bude_projects";



export function getProjects():Project[]{


const data =
localStorage.getItem(KEY);


return data
?
JSON.parse(data)
:
[];

}



export function createProject(
title:string,
description:string
){


const projects =
getProjects();



const project:Project={

id:
Date.now().toString(),

title,

description,

created:
new Date().toISOString(),

status:
"Development"

};



projects.push(project);



localStorage.setItem(
KEY,
JSON.stringify(projects)
);


return project;

}

`
);



write(
"src/components/ProjectCenter.tsx",

`

import {
useState
} from "react";


import {
createProject,
getProjects
}
from "../services/projectService";



export default function ProjectCenter(){


const [projects,setProjects]=
useState(getProjects());


function add(){


createProject(
"New Story Project",
"AI generated creative universe"
);


setProjects(
getProjects()
);

}



return (

<div className="card">


<h2>
Project Center
</h2>


<button onClick={add}>
Create Project
</button>



{

projects.map(project=>(

<div key={project.id}>

<h3>
{project.title}
</h3>


<p>
{project.description}
</p>


<p>
{project.status}
</p>


</div>

))

}



</div>

);

}

`
);



console.log(
"Project database foundation installed"
);



const versionFile =
path.join(ROOT,"versions.json");


if(fs.existsSync(versionFile)){


let v =
JSON.parse(
fs.readFileSync(
versionFile,
"utf8"
)
);


if(!v.completedUpdates){

v.completedUpdates=[];

}


if(!v.installedModules){

v.installedModules=[];

}


v.completedUpdates.push(
"update-v0023.js"
);


v.installedModules.push(
"project-database-core"
);


v.currentVersion="0.52";


v.systemHealth="healthy";


fs.writeFileSync(
versionFile,
JSON.stringify(v,null,2)
);


}


}



module.exports={
run
};
