

export interface CharacterProfile {

name:string;

role:string;

personality:string;

motivation:string;

}



export function generateCharacter(

story:string

):CharacterProfile{


return {

name:
"Generated Hero",

role:
"Main Character",

personality:
"Brave and determined",

motivation:
story

};


}

