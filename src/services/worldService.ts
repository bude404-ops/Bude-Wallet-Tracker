

export interface World {

id:string;

name:string;

description:string;

locations:string;

factions:string;

}



export function createWorld(

name:string,

description:string,

locations:string,

factions:string

):World{


return {

id:
crypto.randomUUID(),

name,

description,

locations,

factions

};


}

