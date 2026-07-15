/**
 * BudE StoryBoard AI
 * Update v0035
 *
 * Evolution Queue System
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");
const UPDATES = __dirname;


function createFolder(folder){

const dir =
path.join(ROOT,folder);

if(!fs.existsSync(dir)){

fs.mkdirSync(dir,{
recursive:true
});

}

}



function write(file,data){

fs.writeFileSync(
path.join(ROOT,file),
data
);

}



function run(){

console.log(
"Installing Evolution Queue System..."
);



createFolder(
"updates/pending"
);

createFolder(
"updates/completed"
);

createFolder(
"updates/failed"
);



write(

"updates/queue-manager.js",

`

const fs=require("fs");
const path=require("path");


const ROOT=path.join(__dirname,"..");


function getPending(){


const folder =
path.join(
ROOT,
"updates/pending"
);


if(!fs.existsSync(folder))
return [];


return fs.readdirSync(folder)
.filter(
f=>f.endsWith(".js")
);


}



function complete(file){


const source =
path.join(
ROOT,
"updates/pending",
file
);


const destination =
path.join(
ROOT,
"updates/completed",
file
);


fs.renameSync(
source,
destination
);


}



function fail(file){


const source =
path.join(
ROOT,
"updates/pending",
file
);


const destination =
path.join(
ROOT,
"updates/failed",
file
);


fs.renameSync(
source,
destination
);


}


module.exports={

getPending,

complete,

fail

};

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
"update-v0035.js"
);


version.installedModules.push(
"evolution-queue-system"
);


version.currentVersion="0.65";


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
"Evolution Queue installed."
);


}



module.exports={
run
};
