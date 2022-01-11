const fruits = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra'];
const fruitsStrings = [];

fruits.forEach((fruit, index) => {
    fruitsStrings.push(`${index} - ${fruit}`)
});

console.log(fruitsStrings);