/**
 * BudE StoryBoard AI
 * Update v0018
 *
 * Repair package.json
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function run(){

    console.log("Repairing package.json");


    const packageJson = {
        name: "bude-storyboard-ai",
        version: "0.4.1",
        private: true,

        scripts: {
            dev: "vite",
            build: "vite build",
            test: "echo No tests configured"
        },

        dependencies: {
            "react": "^19.0.0",
            "react-dom": "^19.0.0"
        },

        devDependencies: {
            "@vitejs/plugin-react": "^4.3.4",
            "@types/react": "^19.0.0",
            "@types/react-dom": "^19.0.0",
            "typescript": "^5.7.0",
            "vite": "^6.0.0"
        }
    };


    fs.writeFileSync(

        path.join(
            ROOT,
            "package.json"
        ),

        JSON.stringify(
            packageJson,
            null,
            2
        )

    );


    console.log(
        "package.json repaired"
    );

}



module.exports = {
    run
};
