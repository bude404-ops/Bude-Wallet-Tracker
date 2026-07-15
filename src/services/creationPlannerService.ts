
export interface CreationTask {

id:string;

name:string;

stage:string;

status:string;

}



export interface CreationPlan {

id:string;

goal:string;

tasks:CreationTask[];

}



export function createPlan(

goal:string

):CreationPlan {


return {

id:
crypto.randomUUID(),

goal,

tasks:[

{

id:
crypto.randomUUID(),

name:
"Create story outline",

stage:
"story",

status:
"pending"

},

{

id:
crypto.randomUUID(),

name:
"Create characters",

stage:
"characters",

status:
"pending"

},

{

id:
crypto.randomUUID(),

name:
"Create scenes",

stage:
"production",

status:
"pending"

}

]

};


}
