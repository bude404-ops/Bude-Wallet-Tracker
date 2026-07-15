

export interface Character {

id:string;

name:string;

role:string;

description:string;

traits:string;

}


export function createCharacter(

name:string,

role:string,

description:string,

traits:string

):Character{


return {

id:
crypto.randomUUID(),

name,

role,

description,

traits

};


}

