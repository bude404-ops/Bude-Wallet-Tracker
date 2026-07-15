

export interface MediaAsset {

id:string;

name:string;

type:string;

source:string;

}



export function createMediaAsset(

name:string,

type:string,

source:string

):MediaAsset{


return {

id:
crypto.randomUUID(),

name,

type,

source

};


}

