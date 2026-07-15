

export interface Agent {

id:string;

name:string;

role:string;

status:string;

}



export function createAgent(

name:string,

role:string

):Agent{


return {

id:
crypto.randomUUID(),

name,

role,

status:"online"

};


}

