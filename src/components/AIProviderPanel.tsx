

const providers=[

"OpenAI",

"Gemini",

"Kimi",

"Local Models"

];


export default function AIProviderPanel(){


return (

<div className="card">


<h2>
AI Providers
</h2>


{

providers.map(provider=>(

<p key={provider}>

🟢 {provider}

</p>

))

}


</div>

);


}

