function create(){
let idea=document.getElementById('idea').value;
let style=document.getElementById('style').value;

let result=createWorld(idea,style);

localStorage.setItem('bude_world',JSON.stringify(result));

document.getElementById('output').textContent=JSON.stringify(result,null,2);
}