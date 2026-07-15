/**
 * BudE StoryBoard AI
 * Update v0041
 *
 * World Builder Foundation
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
"Installing World Builder..."
);



const folders=[

"worlds",
"worlds/data"

];


folders.forEach(folder=>{

const dir =
path.join(ROOT,folder);

if(!fs.existsSync(dir)){
fs.mkdirSync(dir,{recursive:true});
}

});



write(

"src/services/worldService.ts",

`

export interface World {

id:string;

name:string;

description:string;

locations:string;

factions:string;

}



export function createWorld(

name:string,

description:string,

locations:string,

factions:string

):World{


return {

id:
crypto.randomUUID(),

name,

description,

locations,

factions

};


}

`

);



write(

"src/components/WorldBuilder.tsx",

`

import {useState} from "react";


export default function WorldBuilder(){


const [name,setName]=useState("");

const [description,setDescription]=useState("");

const [locations,setLocations]=useState("");

const [factions,setFactions]=useState("");

const [worlds,setWorlds]=useState<string[]>([]);



function createWorld(){


setWorlds([

...worlds,

name+" | "+locations+" | "+factions

]);


setName("");

setDescription("");

setLocations("");

setFactions("");

}



return (

<div className="card">


<h2>
World Builder
</h2>


<input

placeholder="World Name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<textarea

placeholder="World Description"

value={description}

onChange={
e=>setDescription(e.target.value)
}

/>


<input

placeholder="Locations"

value={locations}

onChange={
e=>setLocations(e.target.value)
}

/>


<input

placeholder="Factions"

value={factions}

onChange={
e=>setFactions(e.target.value)
}

/>


<button onClick={createWorld}>

Create World

</button>



<h3>
Created Worlds
</h3>


{

worlds.map((w,i)=>(

<p key={i}>
🌎 {w}
</p>

))

}


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

'import CharacterStudio from "./components/CharacterStudio";',

'import CharacterStudio from "./components/CharacterStudio";\nimport WorldBuilder from "./components/WorldBuilder";'

);



code = code.replace(

"<CharacterStudio />",

"<CharacterStudio />\n\n<WorldBuilder />"

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
"update-v0041.js"
);


version.installedModules.push(
"world-builder"
);


version.currentVersion="0.71";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"World Builder installed."
);


}



module.exports={
run
};
