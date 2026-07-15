
export interface StoryOutline {

title:string;

genre:string;

premise:string;

characters:string[];

scenes:string[];

}



export function generateStoryOutline(

prompt:string

):StoryOutline{


return {

title:
"Untitled Story",

genre:
"Adventure",

premise:
prompt,

characters:[],

scenes:[]

};


}
