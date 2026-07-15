
import {useState} from "react";


export default function CreationPlanner(){


const [goal,setGoal]=useState("");

const [plans,setPlans]=useState<string[]>([]);



function createPlan(){


if(!goal) return;


setPlans([

...plans,

"Plan created: " + goal

]);


setGoal("");

}



return (

<div className="card">


<h2>
AI Creation Planner
</h2>


<textarea

placeholder="What should BudE create?"

value={goal}

onChange={
e=>setGoal(e.target.value)
}

/>


<button onClick={createPlan}>

Create Plan

</button>


{

plans.map((plan,index)=>(

<p key={index}>
📋 {plan}
</p>

))

}


</div>

);


}

