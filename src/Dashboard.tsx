

import "./styles.css";
import StoryStudio from "./components/StoryStudio";
import CharacterStudio from "./components/CharacterStudio";
import WorldBuilder from "./components/WorldBuilder";
import EpisodePlanner from "./components/EpisodePlanner";
import SceneStudio from "./components/SceneStudio";
import StoryboardStudio from "./components/StoryboardStudio";
import MediaStudio from "./components/MediaStudio";
import AgentCenter from "./components/AgentCenter";
import AICommandCenter from "./components/AICommandCenter";
import StoryArchitect from "./components/StoryArchitect";
import CharacterAgent from "./components/CharacterAgent";
import WorldAgent from "./components/WorldAgent";
import DirectorAgent from "./components/DirectorAgent";
import EditorAgent from "./components/EditorAgent";
import ProjectManager from "./components/ProjectManager";
import ProductionWorkflow from "./components/ProductionWorkflow";
import AIProviderPanel from "./components/AIProviderPanel";
import AICommandCenter from "./components/AICommandCenter";
import AICommandCenter from "./components/AICommandCenter";
import AICommandCenter from "./components/AICommandCenter";
import AICommandCenter from "./components/AICommandCenter";


const agents=[

"Executive AI",
"Story Architect AI",
"World Builder AI",
"Character AI",
"Script AI",
"Storyboard AI",
"Media AI",
"Voice AI",
"Music AI",
"Editor AI"

];


export default function Dashboard(){


return (

<div className="layout">


<aside className="sidebar">

<h2>
BudE AI
</h2>


<button>
Dashboard
</button>

<button>
Projects
</button>

<button>
Characters
</button>

<button>
Worlds
</button>

<button>
Episodes
</button>

<button>
Production
</button>

<button>
Plugins
</button>


</aside>



<main>


<h1>
BudE StoryBoard AI
</h1>


<p>
AI Creative Production Studio
</p>



<div className="grid">


<div className="card">

<h2>
Project Center
</h2>

<p>
Create and manage creative projects
</p>

</div>



<div className="card">

<h2>
AI Command Center
</h2>

<p>
Agents Online:
{agents.length}
</p>

</div>



<div className="card">

<h2>
Production Pipeline
</h2>

<p>
Concept → Story → Script → Media → Export
</p>

</div>



<div className="card">

<h2>
System Health
</h2>

<p>
Genesis:
Complete
</p>

<p>
Evolution:
Active
</p>

</div>


</div>



<div className="card">

<h2>
AI Agents
</h2>


{

agents.map(agent=>(

<p key={agent}>
🟢 {agent}
</p>

))

}


</div>




<div className="card">

<h2>
Creative Workspace
</h2>

<p>
Project creation module online.
</p>

</div>




<StoryStudio />

<CharacterStudio />

<WorldBuilder />

<EpisodePlanner />

<SceneStudio />

<StoryboardStudio />

<MediaStudio />

<AgentCenter />

<AICommandCenter />

<StoryArchitect />

<CharacterAgent />

<WorldAgent />

<DirectorAgent />

<EditorAgent />

<ProjectManager />

<ProductionWorkflow />

<AIProviderPanel />

<AICommandCenter />

<AICommandCenter />

<AICommandCenter />

<AICommandCenter />

</main>


</div>

);


}

