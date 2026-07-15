
export interface CreativeWorkflow {

id:string;

prompt:string;

story:string;

characters:string[];

world:string;

scenes:string[];

assets:string[];

status:string;

}



export function createWorkflow(

prompt:string

):CreativeWorkflow {


return {

id:
crypto.randomUUID(),

prompt,

story:"",

characters:[],

world:"",

scenes:[],

assets:[],

status:"started"

};


}



export function updateWorkflowStatus(

workflow:CreativeWorkflow,

status:string

){


workflow.status =
status;


return workflow;


}
