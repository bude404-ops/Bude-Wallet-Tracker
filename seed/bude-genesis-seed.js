/**
 * BudE StoryBoard AI
 * Genesis Seed System v0.1
 *
 * Purpose:
 * Create the initial AI Creative Studio foundation.
 *
 * After successful execution:
 * Seed retires permanently.
 * Future changes happen through /updates/
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function createFolder(folder) {
    const location = path.join(ROOT, folder);

    if (!fs.existsSync(location)) {
        fs.mkdirSync(location, { recursive: true });
        console.log(`Created folder: ${folder}`);
    }
}

function createFile(file, content = "") {
    const location = path.join(ROOT, file);

    if (!fs.existsSync(location)) {
        fs.writeFileSync(location, content);
        console.log(`Created file: ${file}`);
    }
}

function buildStructure() {

    const folders = [

        "src/ai/agents",
        "src/ai/memory",
        "src/ai/prompts",
        "src/ai/pipelines",
        "src/ai/models",

        "src/story/characters",
        "src/story/worlds",
        "src/story/lore",
        "src/story/scripts",
        "src/story/episodes",

        "src/media/images",
        "src/media/video",
        "src/media/audio",

        "src/dashboard/components",

        "src/services",
        "src/plugins",
        "src/config",
        "src/database",
        "src/migrations",
        "src/utils",
        "src/tests",

        "updates",

        ".github/workflows",

        "docs"
    ];


    folders.forEach(createFolder);
}


function createFoundationFiles(){

    createFile(
        "src/config/system.json",
        JSON.stringify({
            name:"BudE StoryBoard AI",
            version:"0.1",
            mode:"foundation"
        },null,2)
    );


    createFile(
        "src/ai/agents/agent-registry.js",
`
/**
 * AI Agent Registry
 * Future agents register here.
 */

module.exports = {
 agents:[]
};
`
    );


    createFile(
        "src/ai/pipelines/story-pipeline.js",
`
/**
 * Creative Pipeline Foundation
 */

module.exports = {

 stages:[
  "concept",
  "world",
  "characters",
  "script",
  "storyboard",
  "media",
  "audio",
  "editing",
  "export"
 ]

};
`
    );


    createFile(
        "src/plugins/plugin-registry.js",
`
/**
 * Plugin System Foundation
 */

module.exports = {
 plugins:[]
};
`
    );


    createFile(
        "README.md",
`
# BudE StoryBoard AI

AI-powered creative production platform.

Genesis Seed initialized.

Future evolution occurs through:

/updates/

`
    );


    createFile(
        "docs/seed-system.md",
`
# Genesis Seed System

The Genesis Seed creates the first foundation.

After completion:

Seed retires.

Updates evolve the system.
`
    );
}


function createVersion(){

    const version = {

        seedComplete:true,
        seedRetired:true,

        currentVersion:"0.1",

        installedModules:[],

        completedUpdates:[],

        systemHealth:"healthy",

        created:new Date().toISOString()

    };


    fs.writeFileSync(
        path.join(ROOT,"versions.json"),
        JSON.stringify(version,null,2)
    );

    console.log("Version system created.");

}


function runGenesis(){

    console.log(
        "Starting BudE StoryBoard AI Genesis..."
    );


    buildStructure();

    createFoundationFiles();

    createVersion();


    console.log(
`
=================================

BudE StoryBoard AI Genesis Complete

Version: 0.1

Seed Status:
RETIRED

Future Development:
Use /updates/

=================================
`
    );
}


runGenesis();
