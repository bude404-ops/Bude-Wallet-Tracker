class AIProvider {

constructor(){
this.provider='template';
this.model='default';
}

setProvider(name,model){
this.provider=name;
this.model=model;
}

async generate(prompt,type){

return {
provider:this.provider,
model:this.model,
type:type,
prompt:prompt,
status:'AI provider ready'
};
}

}

window.BudEAI=new AIProvider();