'use strict'

function difference (array1, array2) {
    let result = [];
    for(let item of array1){
        if(!array2.includes(item)){
            result.push(item);
        }
    }

    return result;
}

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);

const array3 = ['Paris', 'Kyiv'];
const array4 = ['Kyiv', 'London', 'Madrid'];
const result2 = difference(array3, array4);
console.log(result2);