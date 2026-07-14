/**
 * BudE StoryBoard AI
 * Update v0018
 *
 * Package JSON Repair
 *
 * Fixes invalid JSON formatting.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");


function repairPackage(){

const packageFile =
path.join(ROOT,"package.json");


const packageJSON = {

  name:"bude-storyboard-ai",

  version:"0.4.1",

  private:true,


  scripts:{
    dev:"vite",
    build:"vite build",
    test:"echo No tests configured"
  },


  dependencies:{
    react:"^19.0.0",
    react-dom:"^19.0.0"
  },


  devDependencies:{
    "@vitejs/plugin-react":"^4.3.4",
    vite:"^6.0.0",
    typescript:"^5.7.0",
    "@types/react":"^19.0.0",
    "@types/react-dom":"^19.0.0"
  }

};


fs.writeFileSync(

packageFile,

JSON.stringify(
packageJSON,
null,
2
)

);


console.log(
"package.json repaired"
);

}



function updateVersion(){

const file =
path.join(ROOT,"versions.json");


if(fs.existsSync(file)){


let versions =
JSON.parse(
fs.readFileSync(file,"utf8")
);


versions.completedUpdates.push(
"update-v0018.js"
);


versions.currentVersion="0.47";


versions.installedModules.push(
"package-json-repair"
);


versions.systemHealth="healthy";


fs.writeFileSync(
file,
JSON.stringify(
versions,
null,
2
)
);


}

}



function run(){

console.log(
"Running package repair..."
);


repairPackage();

updateVersion();


console.log(
"Update v0018 complete"
);

}



module.exports={
run
};
