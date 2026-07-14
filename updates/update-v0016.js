/**
 * BudE StoryBoard AI
 * Update v0016
 *
 * Docs Build Automation
 */

const fs = require("fs");
const path = require("path");

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



function createWorkflow(){

write(
".github/workflows/build-docs.yml",

`
name: BudE Build Docs


on:

  workflow_dispatch:

  push:

    branches:

      - main


permissions:

  contents: write



jobs:


  build:


    runs-on: ubuntu-latest


    steps:


    - name: Checkout

      uses: actions/checkout@v4



    - name: Setup Node

      uses: actions/setup-node@v4

      with:

        node-version: 20



    - name: Install

      run: npm install



    - name: Build Docs

      run: npm run build



    - name: Commit Docs

      run: |

        git config user.name "BudE Build Bot"

        git config user.email "actions@github.com"


        git add docs


        git commit -m "Update GitHub Pages build" || echo "No changes"


        git push
`
);

}



function updateVersion(){

const file =
path.join(ROOT,"versions.json");


if(fs.existsSync(file)){


let v =
JSON.parse(
fs.readFileSync(file,"utf8")
);


v.completedUpdates.push(
"update-v0016.js"
);


v.currentVersion="0.45";


v.installedModules.push(
"docs-build-automation"
);


fs.writeFileSync(
file,
JSON.stringify(v,null,2)
);


}

}



function run(){

console.log(
"Installing Docs Build Automation..."
);


createWorkflow();

updateVersion();


console.log(
"Update v0016 Complete"
);

}


module.exports={
run
};
