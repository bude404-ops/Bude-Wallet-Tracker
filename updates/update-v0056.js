/**
 * BudE StoryBoard AI
 * Update v0056
 *
 * Evolution Version Repair
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const VERSION_FILE =
    path.join(ROOT, "versions.json");


function run(){

    console.log(
        "Running v0056 Version Repair..."
    );


    const version =
        JSON.parse(
            fs.readFileSync(
                VERSION_FILE,
                "utf8"
            )
        );


    if(!version.completedUpdates){

        version.completedUpdates = [];

    }


    // Find highest completed update number

    let highest = 0;


    version.completedUpdates.forEach(file => {

        const match =
            file.match(/update-v0*(\d+)/);


        if(match){

            const num =
                parseInt(match[1]);


            if(num > highest){

                highest = num;

            }

        }

    });


    version.currentVersion =
        `0.${highest}`;


    if(!version.installedModules){

        version.installedModules = [];

    }


    version.systemHealth =
        "healthy";


    version.lastUpdate =
        new Date().toISOString();



    fs.writeFileSync(

        VERSION_FILE,

        JSON.stringify(
            version,
            null,
            2
        )

    );


    console.log(
        "Version repaired to:",
        version.currentVersion
    );

}



module.exports = {
    run
};
