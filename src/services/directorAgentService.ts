

export interface ProductionPlan {

title:string;

episodes:string;

scenes:string;

direction:string;

}



export function createProductionPlan(

story:string

):ProductionPlan{


return {

title:
"Production Plan",

episodes:
"Season Structure Generated",

scenes:
"Scene Breakdown Generated",

direction:
story

};


}

