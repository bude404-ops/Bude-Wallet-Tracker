

export interface Episode {

id:string;

title:string;

season:number;

episode:number;

summary:string;

}



export function createEpisode(

title:string,

season:number,

episode:number,

summary:string

):Episode{


return {

id:
crypto.randomUUID(),

title,

season,

episode,

summary

};


}

