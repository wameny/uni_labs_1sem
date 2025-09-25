'use strict'

//Змініть приклад: видаліть усі ключі з початкової колекції та додайте їх динамічно у циклі.

const things = [true, 'hello', 5, 12, -200, false, false, 'word', 56, 78, false, 'blue', true, 4,
    'river', 'lake', 'apple', 90, false, true, -45, 'mountain', 'laptop', false, 234, -1, true]

const types = {}

for (const thing of things) {
    let category = typeof thing;
    if (!types[category]) {
        types[category] = 1;
    }
    else
        types[category]++;
}
console.dir(types);