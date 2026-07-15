
export interface WorldEntry {

id:string;

name:string;

type:string;

description:string;

rules:string[];

}



export function createWorldEntry(

name:string,

type:string

):WorldEntry {


return {

id:
crypto.randomUUID(),

name,

type,

description:"",

rules:[]

};


}
