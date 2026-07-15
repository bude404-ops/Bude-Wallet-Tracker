
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
