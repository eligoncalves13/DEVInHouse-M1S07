const characters = [{
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male"
}, {
    "name": "C-3PO",
    "height": "167",
    "mass": "75",
    "hair_color": "n/a",
    "skin_color": "gold",
    "eye_color": "yellow",
    "birth_year": "112BBY",
    "gender": "n/a"
}, {
    "name": "R2-D2",
    "height": "96",
    "mass": "32",
    "hair_color": "n/a",
    "skin_color": "white, blue",
    "eye_color": "red",
    "birth_year": "33BBY",
    "gender": "n/a"
}, {
    "name": "Darth Vader",
    "height": "202",
    "mass": "136",
    "hair_color": "none",
    "skin_color": "white",
    "eye_color": "yellow",
    "birth_year": "41.9BBY",
    "gender": "male"
}, {
    "name": "Leia Organa",
    "height": "150",
    "mass": "49",
    "hair_color": "brown",
    "skin_color": "light",
    "eye_color": "brown",
    "birth_year": "19BBY",
    "gender": "female"
}, {
    "name": "Obi-Wan Kenobi",
    "height": "182",
    "mass": "77",
    "hair_color": "auburn, white",
    "skin_color": "fair",
    "eye_color": "blue-gray",
    "birth_year": "57BBY",
    "gender": "male"
}, {
    "name": "Yoda", 
    "height": "66", 
    "mass": "17", 
    "hair_color": "white", 
    "skin_color": "green", 
    "eye_color": "brown", 
    "birth_year": "896BBY", 
    "gender": "male"
}, {
    "name": "Palpatine", 
    "height": "170", 
    "mass": "75", 
    "hair_color": "grey", 
    "skin_color": "pale", 
    "eye_color": "yellow", 
    "birth_year": "82BBY", 
    "gender": "male"
}];

// Todos os personagens que não tem gênero definido.
const charactersNoGender = characters.filter(character => character.gender === 'n/a');
// console.log(charactersNoGender);

// Confira se algum personagem tem massa menor do que 30.
const charactersMassLessThirty = characters.filter(character => character.mass < 30);
// console.log(charactersMassLessThirty);

// Média da altura de todos os personagens.
const charactersHeight = characters.map(character => Number(character.height));
const sumCharactersHeight = charactersHeight.reduce((total, num) => {
    return total + num;
});
const averageCharactersHeight = Math.round(sumCharactersHeight/charactersHeight.length);
// console.log(averageCharactersHeight);

// Média da massa de todos os personagens.
const sumCharactersMass = characters.reduce((total, num) => {
    return total + Number(num.mass);
}, 0);
const averageCharactersMass = Math.round(sumCharactersMass/characters.length);
// console.log(averageCharactersMass);

// O primeiro personagem que é do gênero feminino.
const firstFemaleCharacter = characters.find(character => character.gender === 'female');
//  
// Lista de todos os personagens que tem altura maior que 150.
const characterHeightOver150 = characters.filter(character => character.height > 150);
// console.log(characterHeightOver150);

// Média de altura de todos os personagens do gênero masculino que tem massa maior do que 50.
const maleCharacter = characters.filter(character => character.gender == 'male' && character.mass > 50);
const maleCharacterHeight = maleCharacter.map(character => Number(character.height));
const sumMaleCharacterHeight = maleCharacterHeight.reduce((total, num) => {
    return total + num;
});
const averageMaleCharacterHeight = Math.round(sumMaleCharacterHeight/maleCharacter.length);
// console.log(averageMaleCharacterHeight);