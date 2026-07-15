

export interface ContinuityRecord {

characterRules:string;

worldRules:string;

timeline:string;

notes:string;

}



export function createContinuity(

notes:string

):ContinuityRecord{


return {

characterRules:
"Character consistency tracked",

worldRules:
"World rules tracked",

timeline:
"Timeline tracked",

notes

};


}

