// BudE StoryBoard Update Engine v1.0

console.log("🧠 BudE Update Engine Running");

const fs = require("fs");

if(!fs.existsSync(".bude/initialized.json")){

console.log("Genesis has not completed.");
process.exit();

}


console.log("System initialized.");
console.log("Ready for module upgrades.");


// Future updates will be added here.
