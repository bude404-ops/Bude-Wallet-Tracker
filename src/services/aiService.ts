

export interface AIRequest {

prompt:string;

provider:string;

}



export async function sendAIRequest(

request:AIRequest

){


return {

provider:
request.provider,

response:
"AI response placeholder"

};


}

