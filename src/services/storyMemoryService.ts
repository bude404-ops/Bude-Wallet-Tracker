
export interface StoryMemory {

id:string;

project:string;

category:string;

content:string;

created:string;

}



export function createMemory(

project:string,

category:string,

content:string

):StoryMemory {


return {

id:
crypto.randomUUID(),

project,

category,

content,

created:
new Date().toISOString()

};


}



export function searchMemory(

memories:StoryMemory[],

query:string

){


return memories.filter(memory =>

memory.content
.toLowerCase()
.includes(
query.toLowerCase()
)

);


}
