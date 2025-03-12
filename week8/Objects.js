const detailSectionRef = document.querySelector("#details");

const pokemon= {
    names: "ponyta",
    type: "fire",
    weaknesses:["water", "ground", "rock"],

};

const myParty=[
    {names:"ponyta", type:"fire"},
    {names:"keldio", type:"Water|Fighting"},
    {names:"Marshadow", type:"Ghost"},
    {names:"Luxray", type:"Lighting"}
];



console.log("My Starter pokemone:", pokemon);

console.log("My pokemon's type:", pokemon.type);



console.log("first pokemon in party", myParty[0]);
console.log("Last pokemon in party", myParty[myParty.length-1].names);


for(let i=0; i< myParty.length; i++) {
    const currentPokemon = myParty[i];
    detailSectionRef.innerHTML += '<div>';
    detailSectionRef.innerHTML += '<h4>' + currentPokemon.names + "</h4>";
    detailSectionRef.innerHTML += '<p>Type(s): ' + currentPokemon.type + "</p>";
    detailSectionRef.innerHTML += '</div>';
}