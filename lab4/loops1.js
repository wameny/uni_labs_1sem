'use strict';

const sum = (...args) => {
    let total1 = 0;
    for (let i = 0; i < args.length; i++) {
        total1 += args[i];
    }
    console.log("for: " + total1);

    let total2 = 0;
    for(const item of args){
        total2 += item;
    }
    console.log("forof: " + total2);

    let total3 = 0;
    let i3 = 0;
    while(i3 < args.length){
        total3 += args[i3];
        i3++;
    }
    console.log("while: " + total3);

    let total4 = 0;
    let i4 = 0;
    do{
        total4 += args[i4];
        i4++;
    }
    while(i4 < args.length);
    console.log("dowhile: " + total4);

    let total5 = 0;
    console.log("reduce: " + args.reduce((total5, x) => total5 + x, 0));
};

const a = sum(1, 2, 3); // a === 6
const b = sum(0); // b === 0
const c = sum(); // c === 0
const d = sum(1, -1, 1); // d === 1
const e = sum(10, -1, -1, -1); // e === 7