

export interface ProductionWorkflow {

id:string;

prompt:string;

steps:string[];

status:string;

}



export function startProduction(

prompt:string

):ProductionWorkflow{


return {

id:
crypto.randomUUID(),

prompt,

steps:[

"Story Generation",

"Character Creation",

"World Creation",

"Episode Planning",

"Scene Planning",

"Storyboard",

"Media Preparation"

],

status:
"running"

};


}

