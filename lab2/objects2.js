'use strict'

//Реалізуйте функцію 'createUser' з сигнатурою createUser(name: string, city: string): object. 
//Приклад виклику: createUser('Marcus Aurelius', 'Roma') функція повинна повернути об'єкт 
//{ name: 'Marcus Aurelius', city: 'Roma' }

const createUser = (name, city) => {
    const user = {name: name, city: city};
    return user;
}

console.dir(createUser('Marcus Aurelius', 'Roma'));