/**
 * BudE StoryBoard AI
 * Update v0037
 *
 * Build Validator + Safety Gate
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname,"..");


function write(file,content){

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

console.log("Created:",file);

}



function run(){

console.log(
"Installing Build Safety Gate..."
);



write(

"updates/build-validator.js",

`

const fs=require("fs");
const path=require("path");

const {execSync}=require(
"child_process"
);


const ROOT=path.join(
__dirname,
".."
);



function checkFiles(){


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
"Missing file: "+file
);

}

}


}



function checkBuild(){


execSync(
"npm run build",
{
cwd:ROOT,
stdio:"inherit"
}
);


}



function validate(){


console.log(
"Checking project files..."
);


checkFiles();


console.log(
"Running production build..."
);


checkBuild();


console.log(
"Build validation passed"
);


return true;


}



module.exports={
validate
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


if(!version.completedUpdates)
version.completedUpdates=[];


if(!version.installedModules)
version.installedModules=[];


version.completedUpdates.push(
"update-v0037.js"
);


version.installedModules.push(
"build-safety-gate"
);


version.currentVersion="0.67";


version.systemHealth="healthy";


version.lastUpdate =
new Date().toISOString();



fs.writeFileSync(
versionFile,
JSON.stringify(version,null,2)
);


}


console.log(
"Build Safety Gate installed."
);


}



module.exports={
run
};
