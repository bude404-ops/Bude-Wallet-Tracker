/**
 * BudE StoryBoard AI
 * Update v0048
 *
 * Story Architect Agent
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
"Installing Story Architect Agent..."
);



const folders=[

"stories",
"stories/blueprints"

];


folders.forEach(folder=>{

const dir =
path.join(ROOT,folder);

if(!fs.existsSync(dir)){
fs.mkdirSync(dir,{recursive:true});
}

});



write(

"src/services/storyAgentService.ts",

`

export interface StoryBlueprint {

title:string;

premise:string;

theme:string;

acts:string[];

}



export function createBlueprint(

idea:string

):StoryBlueprint{


return {

title:
"Generated Story",

premise:
idea,

theme:
"Adventure",

acts:[

"Beginning",

"Conflict",

"Resolution"

]

};


}

`

);



write(

"src/components/StoryArchitect.tsx",

`

import {useState} from "react";


export default function StoryArchitect(){


const [idea,setIdea]=useState("");

const [result,setResult]=useState("");



function generate(){


setResult(

"Story Blueprint Created: "+

idea+

" | Acts: Beginning, Conflict, Resolution"

);


}



return (

<div className="card">


<h2>
Story Architect AI
</h2>


<textarea

placeholder="Give the AI a story idea..."

value={idea}

onChange={
e=>setIdea(e.target.value)
}

/>


<button onClick={generate}>

Create Blueprint

</button>


<p>

{result}

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

'import AICommandCenter from "./components/AICommandCenter";',

'import AICommandCenter from "./components/AICommandCenter";\nimport StoryArchitect from "./components/StoryArchitect";'

);



code = code.replace(

"<AICommandCenter />",

"<AICommandCenter />\n\n<StoryArchitect />"

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
"update-v0048.js"
);


version.installedModules.push(
"story-architect-agent"
);


version.currentVersion="0.78";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Story Architect installed."
);


}


module.exports={
run
};
