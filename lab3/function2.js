'use strict'

//Реализуйте функцию generateKey(length, characters), возвращающую строку случайных символов из 
//набора characters длиной length

const generateKey = (length, characters) => {
    let result = "";
    for(let j = 0; j < length; j++){
        let element = Math.floor(Math.random() * characters.length);
        result = result + characters[element];
    }

    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

console.log(generateKey(16, characters));