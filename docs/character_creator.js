function createCharacter(idea,style){

return {
name:'Generated Character',
concept:idea,
style:style,
appearance:'A visual design based on '+idea,
personality:[
'Determined',
'Adaptable',
'Independent'
],
background:'Created by BudE Character Studio.',
skills:[
'Primary Ability',
'Special Technique'
],
weaknesses:[
'Personal Conflict'
],
goal:'Find their purpose.',
growthArc:'Learns and evolves through challenges.',
visualProfile:{
style:style,
consistencyId:'CHAR-'+Date.now()
}
};
}