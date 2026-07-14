/**
 * BudE StoryBoard AI
 * Update Evolution Engine v2
 *
 * Genesis creates.
 * Updates evolve.
 *
 * Safe execution system.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname,"..");

const VERSION_FILE =
path.join(ROOT,"versions.json");

const UPDATE_FOLDER = __dirname;



function loadVersion(){

    if(!fs.existsSync(VERSION_FILE)){

        throw new Error(
            "versions.json missing. Run Genesis first."
        );

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



function findUpdates(){

    return fs.readdirSync(UPDATE_FOLDER)

    .filter(file =>
        file.startsWith("update-v") &&
        file.endsWith(".js")
    )

    .sort();

}



function executeUpdate(file,version){

    console.log(
        `Running ${file}`
    );


    try{


        const update =
        require(
            path.join(
                UPDATE_FOLDER,
                file
            )
        );


        if(typeof update.run !== "function"){

            throw new Error(
                "Missing run() function"
            );

        }


        update.run();


        version.completedUpdates.push(file);


        console.log(
            `${file} complete`
        );


    }

    catch(error){

        console.error(
            `FAILED: ${file}`
        );


        console.error(
            error.message
        );


        version.systemHealth =
        "degraded";


        saveVersion(version);


        process.exit(1);

    }

}



function run(){

console.log(
"BudE Update Engine Starting..."
);


const version =
loadVersion();



if(!version.completedUpdates){

version.completedUpdates=[];

}



const updates =
findUpdates();



for(const update of updates){


if(
!version.completedUpdates.includes(update)
){


executeUpdate(
update,
version
);


}

}



version.currentVersion =
`0.${version.completedUpdates.length + 1}`;


version.systemHealth =
"healthy";


version.lastUpdate =
new Date().toISOString();


saveVersion(version);


console.log(
"Update Evolution Complete"
);


}



run();
