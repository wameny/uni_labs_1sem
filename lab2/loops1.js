'use strict'

//Реалізуйте функцію range(start: number, end: number): array яка віддає масив чисел з діапазону 
//[15, 30], включаючи крайні числа.

//Реалізуйте функцію rangeOdd(start: number, end: number): array яка віддає масив непарних чисел з 
//діапазону [15, 30], включаючи крайні числа.

const range = (start, end) => {
    const array = [];
    for(let i = start; i <= end; i++)
    {
        array.push(i);
    }
    return array;
}

console.log(range(15,30));

const rangeOdd = (start, end) => {
    const array = [];
    for(let i = start; i <= end; i++)
    {
        if(!(i % 2 === 0))
        {
            array.push(i);
        }
    }
    return array;
}

console.log(rangeOdd(15,30));