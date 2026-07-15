/**
 * BudE StoryBoard AI
 * Update v0045
 *
 * Asset & Media Pipeline Foundation
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
"Installing Media Pipeline..."
);



const folders=[

"media",
"media/images",
"media/video",
"media/audio",
"assets"

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

"src/services/mediaService.ts",

`

export interface MediaAsset {

id:string;

name:string;

type:string;

source:string;

}



export function createMediaAsset(

name:string,

type:string,

source:string

):MediaAsset{


return {

id:
crypto.randomUUID(),

name,

type,

source

};


}

`

);



write(

"src/components/MediaStudio.tsx",

`

import {useState} from "react";


export default function MediaStudio(){


const [name,setName]=useState("");

const [type,setType]=useState("");

const [assets,setAssets]=useState<string[]>([]);



function addAsset(){


setAssets([

...assets,

name+
" ("+
type+
")"

]);


setName("");

setType("");

}



return (

<div className="card">


<h2>
Media Studio
</h2>


<input

placeholder="Asset Name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<input

placeholder="Image / Video / Audio"

value={type}

onChange={
e=>setType(e.target.value)
}

/>


<button onClick={addAsset}>

Add Asset

</button>



<h3>
Assets
</h3>


{

assets.map((asset,i)=>(

<p key={i}>
📁 {asset}
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

'import StoryboardStudio from "./components/StoryboardStudio";',

'import StoryboardStudio from "./components/StoryboardStudio";\nimport MediaStudio from "./components/MediaStudio";'

);



code = code.replace(

"<StoryboardStudio />",

"<StoryboardStudio />\n\n<MediaStudio />"

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
"update-v0045.js"
);


version.installedModules.push(
"media-pipeline"
);


version.currentVersion="0.75";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Media Pipeline installed."
);


}


module.exports={
run
};
