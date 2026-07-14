const fs = require("fs");
const path = require("path");

const VERSION = "3.0.0-alpha";

const ROOT = "docs";


function ensureFolder(folder){

    if(!fs.existsSync(folder)){
        fs.mkdirSync(folder,{recursive:true});
    }

}


function writeFile(file,content){

    const location = path.join(ROOT,file);

    ensureFolder(path.dirname(location));

    if(!fs.existsSync(location)){

        fs.writeFileSync(
            location,
            content
        );

        console.log("Created:",location);

    }
    else{

        console.log("Exists:",location);

    }

}



function buildBudE(){


console.log("Starting BudE Builder");
console.log("Version:",VERSION);



ensureFolder(ROOT);



writeFile(
"index.html",
`
<!DOCTYPE html>

<html>

<head>

<title>BudE StoryBoard AI</title>

<meta name="viewport" content="width=device-width,initial-scale=1">

<link rel="stylesheet" href="styles.css">

</head>


<body>

<div id="app"></div>


<script src="app.js"></script>


</body>

</html>
`
);



writeFile(
"styles.css",
`

body{

background:#08111f;
color:white;
font-family:Arial;
margin:0;

}


.container{

padding:20px;
max-width:600px;
margin:auto;

}


.card{

background:#16253b;
padding:20px;
border-radius:15px;
margin:15px 0;

}


button{

width:100%;
padding:18px;
border-radius:15px;
font-size:18px;

}

`
);



writeFile(
"app.js",
`

const version="3.0.0-alpha";


document.getElementById("app").innerHTML=`

<div class="container">

<h1>🤖 BudE</h1>

<h2>StoryBoard AI Studio</h2>


<div class="card">

System Online

<br>

Version:
${version}

</div>


<button onclick="newProject()">

Create Project

</button>


</div>

`;



function newProject(){

alert("Project system loading");

}


`
);



console.log("BudE Build Complete");

}



buildBudE();
