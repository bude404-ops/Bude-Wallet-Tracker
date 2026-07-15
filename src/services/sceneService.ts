

export interface Scene {

id:string;

episode:string;

title:string;

description:string;

dialogue:string;

}



export function createScene(

episode:string,

title:string,

description:string,

dialogue:string

):Scene{


return {

id:
crypto.randomUUID(),

episode,

title,

description,

dialogue

};


}

