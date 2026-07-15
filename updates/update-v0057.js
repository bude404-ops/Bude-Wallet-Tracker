/**
 * BudE StoryBoard AI
 * Update v0057
 *
 * Evolution State Synchronizer
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

const VERSION_FILE =
    path.join(ROOT, "versions.json");


function run(){

    console.log(
        "Running Evolution State Synchronizer..."
    );


    if(!fs.existsSync(VERSION_FILE)){

        throw new Error(
            "versions.json not found"
        );

    }


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


    if(!version.installedModules){

        version.installedModules = [];

    }



    let highest = 0;



    version.completedUpdates.forEach(file => {


        const match =
            file.match(/update-v0*(\d+)/);


        if(match){


            const number =
                parseInt(match[1]);


            if(number > highest){

                highest = number;

            }

        }


    });



    // Sync installed modules

    const moduleMap = {

        "0047":
        "ai-command-pipeline"

    };



    Object.keys(moduleMap).forEach(key=>{


        const update =
            `update-v0${key}.js`;


        const completed =
            version.completedUpdates.includes(
                update
            );


        if(
            completed &&
            !version.installedModules.includes(
                moduleMap[key]
            )
        ){

            version.installedModules.push(
                moduleMap[key]
            );

        }


    });



    version.currentVersion =
        `0.${highest}`;


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
        "Evolution state synchronized."
    );


    console.log(
        "Current version:",
        version.currentVersion
    );

}



module.exports = {

    run

};
