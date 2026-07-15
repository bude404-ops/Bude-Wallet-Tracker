/**
 * BudE StoryBoard AI
 * Update v0047
 *
 * AI Command Pipeline Foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function write(file, content){

    const target =
        path.join(ROOT, file);

    const folder =
        path.dirname(target);


    if(!fs.existsSync(folder)){

        fs.mkdirSync(
            folder,
            { recursive:true }
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


    const folders = [

        "commands",
        "commands/queue"

    ];


    folders.forEach(folder=>{

        const dir =
            path.join(ROOT, folder);


        if(!fs.existsSync(dir)){

            fs.mkdirSync(
                dir,
                {recursive:true}
            );

        }

    });



    write(
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



    write(
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

tasks.map((task,i)=>(

<p key={i}>
🤖 {task}
</p>

))

}


</div>

);


}
`
    );




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


        if(
            !code.includes(
                "AICommandCenter"
            )
        ){


            code = code.replace(

                'import AgentCenter from "./components/AgentCenter";',

                'import AgentCenter from "./components/AgentCenter";\nimport AICommandCenter from "./components/AICommandCenter";'

            );


            code = code.replace(

                "<AgentCenter />",

                "<AgentCenter />\n\n<AICommandCenter />"

            );


            fs.writeFileSync(
                dashboard,
                code
            );


            console.log(
                "Updated Dashboard"
            );

        }

    }




    const versionFile =
        path.join(
            ROOT,
            "versions.json"
        );


    if(fs.existsSync(versionFile)){


        let version =
            JSON.parse(
                fs.readFileSync(
                    versionFile,
                    "utf8"
                )
            );


        if(!version.installedModules){

            version.installedModules=[];

        }



        if(
            !version.installedModules.includes(
                "ai-command-pipeline"
            )
        ){

            version.installedModules.push(
                "ai-command-pipeline"
            );

        }



        version.systemHealth =
            "healthy";


        version.lastUpdate =
            new Date().toISOString();



        fs.writeFileSync(

            versionFile,

            JSON.stringify(
                version,
                null,
                2
            )

        );

    }



    console.log(
        "AI Command Pipeline installed."
    );

}



module.exports = {

    run

};
