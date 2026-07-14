// BudE StoryBoard Genesis Seed v1.0
// One-time project foundation builder

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();

function createFolder(folder) {
    const location = path.join(ROOT, folder);

    if (!fs.existsSync(location)) {
        fs.mkdirSync(location, { recursive: true });
        console.log("Created:", folder);
    }
}

function createFile(file, content) {
    const location = path.join(ROOT, file);

    if (!fs.existsSync(location)) {
        fs.writeFileSync(location, content);
        console.log("Created:", file);
    }
}

console.log("🚀 BudE StoryBoard Genesis Starting...");

const folders = [

    ".bude",

    "app",
    "app/core",
    "app/ai",
    "app/ai/agents",
    "app/ai/memory",
    "app/ai/pipeline",

    "app/story",
    "app/story/characters",
    "app/story/worlds",
    "app/story/scripts",
    "app/story/storyboards",

    "app/media",
    "app/media/images",
    "app/media/video",
    "app/media/audio",

    "app/plugins",

    "projects",

    "assets",
    "exports",

    "docs",

    "tests"

];


folders.forEach(createFolder);


// System files

createFile(
".bude/version.json",
JSON.stringify({
    name:"BudE StoryBoard",
    version:"1.0.0",
    initialized:true,
    created:new Date().toISOString()
},null,2)
);


createFile(
".bude/initialized.json",
JSON.stringify({
    initialized:true,
    seedCompleted:true,
    nextSystem:"update.js"
},null,2)
);


// AI Registry

createFile(
"app/ai/agents/registry.json",
JSON.stringify({

agents:[

"ExecutiveAI",
"StoryArchitect",
"WorldBuilder",
"CharacterCreator",
"ScriptWriter",
"StoryboardDirector",
"MediaGenerator",
"VoiceDirector",
"MusicComposer",
"VideoEditor",
"QualityController"

]

},null,2)
);


// Story pipeline

createFile(
"app/story/pipeline.json",
JSON.stringify({

pipeline:[

"Idea",
"Concept",
"Characters",
"World",
"Script",
"Storyboard",
"Scenes",
"Media",
"Editing",
"Export"

]

},null,2)
);


// README

createFile(
"README.md",

`
# BudE StoryBoard

AI powered original storytelling platform.

Current Version:
Genesis 1.0

Purpose:
Create original stories, characters, worlds, episodes,
visuals, voices, music, and video content.

Architecture:
Seed → Update Engine → AI Creative Platform
`

);


console.log("");
console.log("✅ Genesis Complete");
console.log("Seed is now retired.");
console.log("Future changes use update.js");
