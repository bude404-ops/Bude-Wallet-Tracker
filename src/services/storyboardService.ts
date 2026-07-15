

export interface Shot {

id:string;

scene:string;

camera:string;

description:string;

duration:number;

}



export function createShot(

scene:string,

camera:string,

description:string,

duration:number

):Shot{


return {

id:
crypto.randomUUID(),

scene,

camera,

description,

duration

};


}

