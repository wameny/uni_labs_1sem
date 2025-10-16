'use strict'

//Реализуйте функцию random(min, max), возвращающую псевдо-случайное значение от min до max. 
//Используйте Math.random() и Math.floor(). При вызове random(max) нужно считать, что min = 0.

const random = (min, max) => {
    if(max === undefined){
        max = min;
        min = 0;
    }
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}

console.log(random(10, 20));
console.log(random(20)); //мінімальне - 0