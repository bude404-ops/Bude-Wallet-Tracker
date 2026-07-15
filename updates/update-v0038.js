/**
 * BudE StoryBoard AI
 * Update v0038
 *
 * Safety Gate Integration
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function write(file,content){

const target =
path.join(ROOT,file);

fs.writeFileSync(
target,
content
);

console.log(
"Updated:",
file
);

}



function run(){

console.log(
"Connecting Safety Gate..."
);



write(

"updates/update-engine.js",

`

const fs=require("fs");
const path=require("path");


const ROOT=
path.join(__dirname,"..");


const VERSION=
path.join(ROOT,"versions.json");


const PENDING=
path.join(ROOT,"updates/pending");


const COMPLETED=
path.join(ROOT,"updates/completed");


const FAILED=
path.join(ROOT,"updates/failed");


const validator =
require(
"./build-validator"
);



function loadVersion(){

return JSON.parse(
fs.readFileSync(
VERSION,
"utf8"
)
);

}



function saveVersion(v){

fs.writeFileSync(
VERSION,
JSON.stringify(
v,
null,
2
)
);

}



function move(file,target){

fs.renameSync(

path.join(PENDING,file),

path.join(target,file)

);

}



function run(){

console.log(
"BudE Evolution Engine"
);



let version =
loadVersion();



if(!fs.existsSync(PENDING)){

console.log(
"No pending updates"
);

return;

}



const updates =
fs.readdirSync(PENDING)
.filter(
file=>file.endsWith(".js")
);



for(const file of updates){


try{


console.log(
"Running:",
file
);



const update =
require(
path.join(PENDING,file)
);



update.run();



console.log(
"Validating build..."
);



validator.validate();



version.completedUpdates.push(
file
);



move(
file,
COMPLETED
);



console.log(
"SUCCESS:",
file
);



}

catch(error){


console.error(
"FAILED:",
error.message
);



move(
file,
FAILED
);



}



}



version.currentVersion="0.68";

version.systemHealth="healthy";

version.lastUpdate =
new Date().toISOString();



saveVersion(version);



}



run();

`

);



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


version.completedUpdates.push(
"update-v0038.js"
);


version.installedModules.push(
"safety-gate-integration"
);


version.currentVersion="0.68";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(
version,
null,
2
)
);


}



console.log(
"Safety Gate Connected."
);


}


module.exports={
run
};
