async function generate(){

let prompt=document.getElementById('prompt').value;
let type=document.getElementById('type').value;

let output={
 category:type,
 prompt:prompt,
 status:'Sent to BudE AI Core',
 result:'Generation pipeline active'
};

localStorage.setItem('bude_output',JSON.stringify(output));

document.getElementById('output').textContent=JSON.stringify(output,null,2);

}