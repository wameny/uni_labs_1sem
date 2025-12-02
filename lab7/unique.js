'use strict'

function unique (array) {
    let result = [];
    for(let item of array){
        if(!result.includes(item)) result.push(item);
    }

    return result;
}

const resultNum = unique([2, 1, 1, 3, 2]);
const resultSides = unique(['top', 'bottom', 'top', 'left']);

console.log(resultNum);
console.log(resultSides);