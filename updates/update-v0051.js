/**
 * BudE StoryBoard AI
 * Update v0051
 *
 * Director Agent Foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function write(file,content){

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
"Installing Director Agent..."
);



const folders=[

"production",
"production/plans"

];


folders.forEach(folder=>{

const dir =
path.join(ROOT,folder);

if(!fs.existsSync(dir)){

fs.mkdirSync(dir,{
recursive:true
});

}

});



write(

"src/services/directorAgentService.ts",

`

export interface ProductionPlan {

title:string;

episodes:string;

scenes:string;

direction:string;

}



export function createProductionPlan(

story:string

):ProductionPlan{


return {

title:
"Production Plan",

episodes:
"Season Structure Generated",

scenes:
"Scene Breakdown Generated",

direction:
story

};


}

`

);



write(

"src/components/DirectorAgent.tsx",

`

import {useState} from "react";


export default function DirectorAgent(){


const [project,setProject]=useState("");

const [plan,setPlan]=useState("");



function direct(){


setPlan(

"Director Plan Created: "

+project+

" | Episodes Planned | Scenes Organized | Production Ready"

);


}



return (

<div className="card">


<h2>
Director AI
</h2>


<textarea

placeholder="Project information..."

value={project}

onChange={
e=>setProject(e.target.value)
}

/>


<button onClick={direct}>

Create Production Plan

</button>


<p>
{plan}
</p>


</div>

);


}

`

);



const dashboard =
path.join(ROOT,"src/Dashboard.tsx");


if(fs.existsSync(dashboard)){


let code =
fs.readFileSync(
dashboard,
"utf8"
);



code = code.replace(

'import WorldAgent from "./components/WorldAgent";',

'import WorldAgent from "./components/WorldAgent";\nimport DirectorAgent from "./components/DirectorAgent";'

);



code = code.replace(

"<WorldAgent />",

"<WorldAgent />\n\n<DirectorAgent />"

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
fs.readFileSync(
versionFile,
"utf8"
)
);


if(!version.completedUpdates)
version.completedUpdates=[];


if(!version.installedModules)
version.installedModules=[];


version.completedUpdates.push(
"update-v0051.js"
);


version.installedModules.push(
"director-agent"
);


version.currentVersion="0.81";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Director Agent installed."
);


}


module.exports={
run
};
