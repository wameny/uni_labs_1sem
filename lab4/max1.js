'use strict'

const max = (array) => {
    let maxNum = -Infinity;
    for(let item of array){
        for(let number of item){
            if(maxNum < number){
                maxNum = number;
            }
        }
    }
    return maxNum;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m); // 9