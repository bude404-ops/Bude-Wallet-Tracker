

export interface WorldProfile {

name:string;

environment:string;

locations:string;

factions:string;

lore:string;

}



export function generateWorld(

story:string

):WorldProfile{


return {

name:
"Generated World",

environment:
"Custom Environment",

locations:
"Major Locations",

factions:
"Major Factions",

lore:
story

};


}

