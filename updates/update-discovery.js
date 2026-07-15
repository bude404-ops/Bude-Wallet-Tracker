

const fs=require("fs");
const path=require("path");


const ROOT=
path.join(__dirname,"..");


const UPDATES=
__dirname;


const PENDING=
path.join(
UPDATES,
"pending"
);



function discover(){


if(!fs.existsSync(PENDING)){

fs.mkdirSync(
PENDING,
{
recursive:true
}
);

}



const files =
fs.readdirSync(UPDATES)
.filter(
file=>

file.startsWith("update-v") &&

file.endsWith(".js")

);



for(const file of files){


if(
file==="update-engine.js"
||
file==="update-discovery.js"
){

continue;

}



const source =
path.join(
UPDATES,
file
);


const target =
path.join(
PENDING,
file
);



if(!fs.existsSync(target)){


fs.copyFileSync(
source,
target
);


console.log(
"Queued:",
file
);


}


}


}



module.exports={
discover
};

