
export interface VisualAsset {

id:string;

type:string;

prompt:string;

status:string;

url:string;

}



export function createVisualAsset(

type:string,

prompt:string

):VisualAsset {


return {

id:
crypto.randomUUID(),

type,

prompt,

status:
"queued",

url:""

};


}
