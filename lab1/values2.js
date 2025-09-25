'use strict'

//З сигнатурою inc(num: Num), де Num є об'єктом з полем n, щоб функція змінила поле вихідного об'єкта, переданого за посиланням, 
//приклад виклику const obj = { n: 5 }; inc(obj); console.dir(obj);

const inc = (num) => {
    num.n++;
}

const obj = {
    n: 5,
};

inc(obj);
console.dir(obj);