const list = [ 3, 5, 7, 9, 11, 13 ];

const newlist = list.map((number, index) => {
    if(index === 0){
        return number;
    }
    return number * list[--index];
});

console.log(newlist);