'use strict'

//-Створіть вихідний масив, що містить значення різних типів, як елементів, наприклад: 
//[true, 'hello', 5, 12, -200, false, false, 'word'] але бажано більш довгий та різноманітний.
//-Створіть об'єкт-колекцію (хеш) з іменами типів у вигляді ключів та 0 як значення, 
//наприклад: { number: 0, string: 0, boolean: 0 }
//-Пройдіться по масиву циклом for..of і для кожного елемента масиву, збільшуйте відповідне 
//значення в об'єкті-колекції.

const things = [true, 'hello', 5, 12, -200, false, false, 'word', 56, 78, false, 'blue', true, 4,
    'river', 'lake', 'apple', 90, false, true, -45, 'mountain', 'laptop', false, 234, -1, true]

const types = { number: 0, string: 0, boolean: 0 }

for (const thing of things) {
    let category = typeof thing;
    types[category]++;
}
console.dir(types);