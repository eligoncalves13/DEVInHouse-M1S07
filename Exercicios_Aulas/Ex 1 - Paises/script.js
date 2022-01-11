const countries = [{
    "name": "Afghanistan",
    "region": "Asia",
    "population": 38928341,
    "area": 652230.0
  }, {
    "name": "Brazil",
    "region": "Americas",
    "population": 212559409,
    "area": 8515767.0
  }, {
    "name": "China",
    "region": "Asia",
    "population": 1402112000,
    "area": 9640011.0
  }, {
    "name": "Egypt",
    "region": "Africa",
    "population": 102334403,
    "area": 1002450.0
  }, {
    "name": "Estonia",
    "region": "Europe",
    "population": 1331057,
    "area": 45227.0
  }, {
    "name": "India",
    "region": "Asia",
    "population": 1380004385,
    "area": 3287590.0
  }, {
    "name": "Malawi",
    "region": "Africa",
    "population": 19129955,
    "area": 118484.0
  }, {
    "name": "Poland",
    "region": "Europe",
    "population": 37950802,
    "area": 312679.0
  }, {
    "name": "Romania",
    "region": "Europe",
    "population": 19286123,
    "area": 238391.0
}];

//Países que possuem população maior que 100.000.000.
const populationOverHundredMillion = countries.filter(country => country.population >= 100000000);
// console.log(populationOverHundredMillion);

//Novo array que possui apenas o nome e a região de cada país.
const arrayNameRegion = countries.map(country => ({
    name: country.name,
    region: country.region
}));
// console.log(arrayNameRegion);

//Confira se todos os países se encontram na Europa.
const isCountriesInEurope = countries.every(country => country.region === 'Europe');
// console.log(isCountriesInEurope);

//Média da população dos países da Europa.
const countriesEurope = countries.filter(country => country.region === 'Europe');
const arrayPopulationEurope = countriesEurope.map(country => country.population);
const sumPopulationEurope = arrayPopulationEurope.reduce((total, num) => {
    return total + num;
});
const averagePopulationEurope = Math.round(sumPopulationEurope/countriesEurope.length);
// console.log(averagePopulationEurope);

//Primeiro país que se encontra na África.
const firstCountryAfrica = countries.find(country => country.region === 'Africa');
// console.log(firstCountryAfrica);

//Lista de todos os países que se encontram na Ásia.
const countriesAsia = countries.filter(country => country.region === 'Asia');
const arrayCountriesAsia = countriesAsia.map(country => country.name);
// console.log(arrayCountriesAsia);

//Soma da área de todos os países.
const arrayAreas = countries.map(country => country.area);
const sumAreas = arrayAreas.reduce((total, num) => {
    return total + num;
});
// console.log(sumAreas);
