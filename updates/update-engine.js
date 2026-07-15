/**
 * BudE StoryBoard AI
 * Evolution Update Engine
 *
 * Genesis retired.
 * Updates evolve the system.
 */

const fs = require("fs");
const path = require("path");


const ROOT = path.join(__dirname, "..");

const VERSION_FILE =
    path.join(ROOT, "versions.json");

const UPDATE_FOLDER =
    __dirname;



function loadVersion(){

    if(!fs.existsSync(VERSION_FILE)){

        throw new Error(
            "versions.json missing"
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



function findUpdates(version){

    return fs.readdirSync(UPDATE_FOLDER)

        .filter(file =>
            file.startsWith("update-v") &&
            file.endsWith(".js") &&
            file !== "update-engine.js"
        )

        .sort()

        .filter(file =>
            !version.completedUpdates.includes(file)
        );

}



function executeUpdate(file){

    console.log(
        `Running ${file}`
    );


    const update =
        require(
            path.join(
                UPDATE_FOLDER,
                file
            )
        );


    if(typeof update.run !== "function"){

        throw new Error(
            `${file} missing run()`
        );

    }


    update.run();

}



function run(){

    console.log(
        "BudE Evolution Engine Starting..."
    );


    const version =
        loadVersion();



    if(!version.completedUpdates){

        version.completedUpdates = [];

    }



    const updates =
        findUpdates(version);



    console.log(
        `Found ${updates.length} pending updates`
    );



    for(const file of updates){


        try{


            executeUpdate(file);



            version.completedUpdates.push(
                file
            );


            saveVersion(version);



            console.log(
                `Completed ${file}`
            );


        }

        catch(error){


            console.error(
                `FAILED ${file}`
            );


            console.error(
                error.message
            );


            break;

        }

    }



    version.currentVersion =
        `0.${version.completedUpdates.length}`;


    version.systemHealth =
        "healthy";


    version.lastUpdate =
        new Date().toISOString();



    saveVersion(version);



    console.log(
`
=========================

BudE Evolution Complete

Version:
${version.currentVersion}

Completed Updates:
${version.completedUpdates.length}

=========================
`
    );

}



run();
