'use strict'

//Оголосіть змінну та запишіть у неї своє ім'я як літерал рядка.
//Оголосіть константу і запишіть у неї рік народження як літерал числа.
//Створіть функцію, яка друкує привітання та має один аргумент: name.

let my_name = "Vlada";
const birth_year = 2008;

const greeting = (name) => {
    console.log(`Hello, ${name}`);
}

greeting(my_name);