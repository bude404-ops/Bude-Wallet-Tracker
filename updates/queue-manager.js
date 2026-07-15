

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

