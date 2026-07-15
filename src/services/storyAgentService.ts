

export interface StoryBlueprint {

title:string;

premise:string;

theme:string;

acts:string[];

}



export function createBlueprint(

idea:string

):StoryBlueprint{


return {

title:
"Generated Story",

premise:
idea,

theme:
"Adventure",

acts:[

"Beginning",

"Conflict",

"Resolution"

]

};


}

