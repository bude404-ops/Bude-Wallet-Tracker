class MemoryManager {

constructor(){
this.memory={
characters:[],
worlds:[],
stories:[]
};
}

add(type,data){
if(this.memory[type]){
this.memory[type].push(data);
}
this.save();
}

get(type){
return this.memory[type] || [];
}

save(){
localStorage.setItem('bude_memory',JSON.stringify(this.memory));
}

load(){
let data=localStorage.getItem('bude_memory');
if(data){this.memory=JSON.parse(data);}
}

}

window.BudEMemory=new MemoryManager();