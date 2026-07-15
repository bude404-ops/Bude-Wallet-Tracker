/**
 * BudE StoryBoard AI
 * Update v0047
 *
 * AI Command Pipeline Foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function createFile(file, content){

    const target =
        path.join(ROOT, file);

    const folder =
        path.dirname(target);


    if(!fs.existsSync(folder)){

        fs.mkdirSync(
            folder,
            {
                recursive:true
            }
        );

    }


    fs.writeFileSync(
        target,
        content
    );


    console.log(
        "Created:",
        file
    );

}



function run(){

    console.log(
        "Installing AI Command Pipeline..."
    );


    // Create command folders

    [
        "commands",
        "commands/queue"
    ].forEach(folder=>{

        const location =
            path.join(
                ROOT,
                folder
            );


        if(!fs.existsSync(location)){

            fs.mkdirSync(
                location,
                {
                    recursive:true
                }
            );

        }

    });



    createFile(
        "src/services/commandService.ts",
`
export interface AICommand {

    id:string;

    prompt:string;

    status:string;

}


export function createCommand(
    prompt:string
):AICommand {

    return {

        id:
        crypto.randomUUID(),

        prompt,

        status:"queued"

    };

}
`
    );



    createFile(
        "src/components/AICommandCenter.tsx",
`
import {useState} from "react";


export default function AICommandCenter(){

const [prompt,setPrompt]=useState("");

const [tasks,setTasks]=useState<string[]>([]);



function submit(){

    if(!prompt) return;


    setTasks([

        ...tasks,

        "Processing: " + prompt

    ]);


    setPrompt("");

}



return (

<div className="card">

<h2>
AI Command Center
</h2>


<textarea

placeholder="Describe what you want BudE to create..."

value={prompt}

onChange={
e=>setPrompt(e.target.value)
}

/>


<button onClick={submit}>
Send Command
</button>


<h3>
Task Queue
</h3>


{

tasks.map((task,index)=>(

<p key={index}>
🤖 {task}
</p>

))

}


</div>

);

}
`
    );



    // Add dashboard component if dashboard exists

    const dashboard =
        path.join(
            ROOT,
            "src/Dashboard.tsx"
        );


    if(fs.existsSync(dashboard)){


        let code =
            fs.readFileSync(
                dashboard,
                "utf8"
            );


        if(!code.includes("AICommandCenter")){


            code =
            code.replace(

                'import AgentCenter from "./components/AgentCenter";',

                'import AgentCenter from "./components/AgentCenter";\nimport AICommandCenter from "./components/AICommandCenter";'

            );


            code =
            code.replace(

                "<AgentCenter />",

                "<AgentCenter />\n\n<AICommandCenter />"

            );


            fs.writeFileSync(
                dashboard,
                code
            );


            console.log(
                "Dashboard updated"
            );

        }

    }



    console.log(
        "AI Command Pipeline installed successfully."
    );

}



module.exports = {

    run

};
