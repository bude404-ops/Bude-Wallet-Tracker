

export interface Project {

id:string;

name:string;

stage:string;

progress:number;

}



export function createProject(

name:string

):Project{


return {

id:
crypto.randomUUID(),

name,

stage:
"Story Development",

progress:0

};


}

