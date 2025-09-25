'use strict';

//З сигнатурою inc(n: number): number, приклад виклику: 
//const a = 5; const b = inc(a); console.dir({a, b});

const inc = (n) => {
    n += 5;
    return n;
}

const a = 5;
const b = inc(a);

console.dir({a, b});
