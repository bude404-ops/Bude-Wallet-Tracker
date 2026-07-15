

const agents=[

{
name:"Story Architect AI",
role:"Creates story structures"
},

{
name:"Character AI",
role:"Develops characters"
},

{
name:"World Builder AI",
role:"Creates worlds and lore"
},

{
name:"Director AI",
role:"Controls production"
},

{
name:"Editor AI",
role:"Prepares final output"
}

];


export default function AgentCenter(){


return (

<div className="card">


<h2>
AI Agent Center
</h2>


{

agents.map(agent=>(

<div key={agent.name}>

<p>
🟢 {agent.name}
</p>

<small>
{agent.role}
</small>

</div>

))

}


</div>

);


}

