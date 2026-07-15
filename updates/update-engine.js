

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

