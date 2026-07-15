/**
 * BudE StoryBoard AI
 * Update v0030
 *
 * Evolution System Upgrade
 *
 * Adds:
 * - Repository validator
 * - Backup engine
 * - Template engine
 * - Migration engine
 * - Safer evolution foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");
const UPDATES = __dirname;


function writeFile(file,content){

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
"Installing Evolution System Upgrade..."
);



/*
 Validator
*/

writeFile(

"updates/validator.js",

`

const fs=require("fs");
const path=require("path");

const ROOT=path.join(__dirname,"..");


function validate(){


const required=[

"package.json",
"index.html",
"src/main.tsx",
"src/App.tsx",
"vite.config.ts"

];


for(const file of required){

if(!fs.existsSync(
path.join(ROOT,file)
)){

throw new Error(
"Missing required file: "+file
);

}

}


console.log(
"Repository validation passed"
);


return true;

}


module.exports={
validate
};

`

);



/*
 Backup Engine
*/

writeFile(

"updates/backup-engine.js",

`

const fs=require("fs");
const path=require("path");


const ROOT=path.join(__dirname,"..");


function backup(file){


const source=
path.join(ROOT,file);


if(!fs.existsSync(source))
return;


const backupFolder=
path.join(ROOT,"backups");


if(!fs.existsSync(backupFolder)){

fs.mkdirSync(
backupFolder,
{recursive:true}
);

}


fs.copyFileSync(

source,

path.join(
backupFolder,
file.replaceAll("/","-")
)

);


console.log(
"Backup created:",
file
);


}


module.exports={
backup
};

`

);



/*
 Template Engine
*/

writeFile(

"updates/template-engine.js",

`

const fs=require("fs");
const path=require("path");


const ROOT=path.join(__dirname,"..");


function apply(template,target){


const source=
path.join(ROOT,"templates",template);


const destination=
path.join(ROOT,target);


if(!fs.existsSync(source)){

throw new Error(
"Template missing "+template
);

}


fs.copyFileSync(
source,
destination
);


console.log(
"Template applied"
);


}


module.exports={
apply
};

`

);



/*
 Migration Engine
*/

writeFile(

"updates/migration-engine.js",

`

function migrate(){

console.log(
"No migrations required"
);


}


module.exports={
migrate
};

`

);



/*
 Update versions
*/

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


if(!version.completedUpdates){

version.completedUpdates=[];

}


if(!version.installedModules){

version.installedModules=[];

}


version.completedUpdates.push(
"update-v0030.js"
);


version.installedModules.push(
"evolution-system-upgrade"
);


version.currentVersion="0.60";


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
"Evolution System Upgrade Complete"
);


}



module.exports={
run
};
