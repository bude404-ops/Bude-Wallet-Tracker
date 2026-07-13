function create(){

let idea=document.getElementById('idea').value;
let style=document.getElementById('style').value;

let result=createCharacter(idea,style);

localStorage.setItem('bude_character',JSON.stringify(result));

document.getElementById('output').textContent=JSON.stringify(result,null,2);

}