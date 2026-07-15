

import {useState} from "react";


export default function MediaStudio(){


const [name,setName]=useState("");

const [type,setType]=useState("");

const [assets,setAssets]=useState<string[]>([]);



function addAsset(){


setAssets([

...assets,

name+
" ("+
type+
")"

]);


setName("");

setType("");

}



return (

<div className="card">


<h2>
Media Studio
</h2>


<input

placeholder="Asset Name"

value={name}

onChange={
e=>setName(e.target.value)
}

/>


<input

placeholder="Image / Video / Audio"

value={type}

onChange={
e=>setType(e.target.value)
}

/>


<button onClick={addAsset}>

Add Asset

</button>



<h3>
Assets
</h3>


{

assets.map((asset,i)=>(

<p key={i}>
📁 {asset}
</p>

))

}


</div>

);


}

