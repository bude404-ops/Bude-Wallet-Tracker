/**
 * BudE StoryBoard AI
 * Update Evolution Engine v1
 *
 * Genesis is retired.
 * Updates evolve the system.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const VERSION_FILE = path.join(
    ROOT,
    "versions.json"
);

const UPDATE_FOLDER = __dirname;


function loadVersion(){

    if(!fs.existsSync(VERSION_FILE)){

        throw new Error(
            "No versions.json found. Genesis must run first."
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



function executeUpdate(updateFile, version){

    console.log(
        `Running ${updateFile}`
    );


    const update = require(
        path.join(
            UPDATE_FOLDER,
            updateFile
        )
    );


    if(typeof update.run !== "function"){

        throw new Error(
            `${updateFile} missing run()`
        );

    }


    update.run();


    version.completedUpdates.push(
        updateFile
    );


}



function run(){

    console.log(
        "BudE Update Engine Starting..."
    );


    const version = loadVersion();


    if(!version.seedComplete){

        throw new Error(
            "Genesis not completed."
        );

    }



    const updates = findUpdates();


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
`
==============================

Update Complete

Current Version:
${version.currentVersion}

System:
Healthy

==============================
`
    );

}



run();
