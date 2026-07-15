

const providers = {


openai:{

name:"OpenAI",

status:"available"

},


gemini:{

name:"Google Gemini",

status:"available"

},


kimi:{

name:"Kimi AI",

status:"available"

},


local:{

name:"Local Model",

status:"future"

}


};



function getProviders(){

return providers;

}



module.exports={
getProviders
};

