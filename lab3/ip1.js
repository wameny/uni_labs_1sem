'use strict'

const ip = "127.0.0.1";

const transformation = (ip) => {
    let array = ip.split(".");
    array = array.map(Number);

    let count = 0;
    let sum = 0;

    for(let i = array.length - 1; i >= 0; i--){
        array[i] = array[i] << 8 * count;
        count++;
        sum = sum + array[i];
    }

    console.log(array);
    console.log(sum);
}

transformation(ip);