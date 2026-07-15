/**
 * BudE StoryBoard AI
 * Update v0037
 *
 * Evolution Catch-Up Engine Fix
 *
 * Purpose:
 * Automatically run all missed updates
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");

const UPDATE_DIR = path.join(ROOT,"updates");

const VERSION_FILE = path.join(ROOT,"versions.json");


function loadVersion(){

if(!fs.existsSync(VERSION_FILE)){

return {

seedComplete:true,

completedUpdates:[],

installedModules:[],

currentVersion:"0.36"

};

}

return JSON.parse(
fs.readFileSync(
VERSION_FILE,
"utf8"
)
);

}



function saveVersion(version){

fs.writeFileSync(
VERSION_FILE,
JSON.stringify(
version,
null,
2
)
);

}



function findUpdates(version){

return fs.readdirSync(UPDATE_DIR)

.filter(file =>

file.startsWith("update-v") &&

file.endsWith(".js")

)

.sort()

.filter(file =>

!version.completedUpdates.includes(file)

);

}



function run(){

console.log(
"BudE Evolution Catch-Up Starting..."
);


let version =
loadVersion();


let updates =
findUpdates(version);



console.log(
"Found updates:",
updates.length
);



for(const file of updates){


if(file==="update-v0037.js")
continue;



try{


console.log(
"Running:",
file
);



const update =
require(
path.join(
UPDATE_DIR,
file
)
);



if(typeof update.run==="function"){


update.run();


}



version.completedUpdates.push(
file
);



saveVersion(version);


console.log(
"Completed:",
file
);


}

catch(error){


console.error(
"FAILED:",
file
);

console.error(
error.message
);

break;

}


}



version.currentVersion =
"0."+(
36+
version.completedUpdates.length
);



version.systemHealth =
"healthy";


version.lastUpdate =
new Date().toISOString();



saveVersion(version);



console.log(
"Evolution Catch-Up Complete"
);


}



module.exports={
run
};
