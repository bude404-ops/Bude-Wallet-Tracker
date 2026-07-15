/**
 * BudE StoryBoard AI
 * Update v0067
 *
 * AI Scene Director Foundation
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");


function createFolder(folder){

    const target =
        path.join(ROOT, folder);


    if(!fs.existsSync(target)){

        fs.mkdirSync(
            target,
            {
                recursive:true
            }
        );

        console.log(
            "Created:",
            folder
        );

    }

}



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


    if(!fs.existsSync(target)){

        fs.writeFileSync(
            target,
            content
        );

        console.log(
            "Created:",
            file
        );

    }

}



function run(){

    console.log(
        "Installing AI Scene Director..."
    );


    createFolder(
        "production/director"
    );


    createFolder(
        "production/scenes"
    );



    createFile(

        "src/services/sceneDirectorService.ts",

`
export interface SceneDirection {

id:string;

scene:string;

mood:string;

lighting:string;

camera:string;

notes:string;

}



export function createSceneDirection(

scene:string

):SceneDirection {


return {

id:
crypto.randomUUID(),

scene,

mood:"",

lighting:"",

camera:"",

notes:""

};


}
`

    );



    createFile(

        "src/components/SceneDirector.tsx",

`
import {useState} from "react";


export default function SceneDirector(){


const [scene,setScene]=useState("");

const [plans,setPlans]=useState<string[]>([]);



function directScene(){


if(!scene) return;


setPlans([

...plans,

scene

]);


setScene("");

}



return (

<div className="card">


<h2>
AI Scene Director
</h2>


<textarea

placeholder="Describe a scene..."

value={scene}

onChange={
e=>setScene(e.target.value)
}

/>


<button onClick={directScene}>

Direct Scene

</button>


{

plans.map((item,index)=>(

<p key={index}>
🎥 Scene Plan: {item}
</p>

))

}


</div>

);


}

`

    );



    console.log(
        "AI Scene Director installed."
    );

}



module.exports = {

run

};
