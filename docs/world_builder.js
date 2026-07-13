function createWorld(idea,style){

return {
name:'Generated World',
concept:idea,
style:style,
history:'An ancient world shaped by '+idea,
regions:[
'Northern Territories',
'Ancient Capital',
'Unknown Frontier'
],
civilizations:[
'First Civilization',
'New Kingdom'
],
factions:[
'Alliance',
'Rival Order'
],
technology:'Based on '+style+' themes',
conflict:'A major struggle threatens the world.',
uniqueFeatures:[
'Ancient mysteries',
'Hidden locations'
]
};
}