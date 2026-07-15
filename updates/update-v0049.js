/**
 * BudE StoryBoard AI
 * Update v0049
 *
 * Character Agent Foundation
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
"Installing Character Agent..."
);



const folders=[

"characters/generated"

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

"src/services/characterAgentService.ts",

`

export interface CharacterProfile {

name:string;

role:string;

personality:string;

motivation:string;

}



export function generateCharacter(

story:string

):CharacterProfile{


return {

name:
"Generated Hero",

role:
"Main Character",

personality:
"Brave and determined",

motivation:
story

};


}

`

);



write(

"src/components/CharacterAgent.tsx",

`

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

'import StoryArchitect from "./components/StoryArchitect";',

'import StoryArchitect from "./components/StoryArchitect";\nimport CharacterAgent from "./components/CharacterAgent";'

);



code = code.replace(

"<StoryArchitect />",

"<StoryArchitect />\n\n<CharacterAgent />"

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
"update-v0049.js"
);


version.installedModules.push(
"character-agent"
);


version.currentVersion="0.79";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Character Agent installed."
);


}


module.exports={
run
};
