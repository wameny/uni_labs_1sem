'use strict'

//Реалізуйте зберігання телефонних номерів у масиві об'єктів.
//- Оголосіть масив об'єктів з двома полями: name та phone для зберігання даних. 
//Приклад об'єкта: { name: 'Marcus Aurelius', phone: '+380445554433' } і додайте декілька об'єктів у масив, щоб було на чому перевіряти.
//- Реалізуйте функцію findPhoneByName з сигнатурою findPhoneByName(name: string): string. 
//Під час виклику функція повинна знаходити об'єкт, де поле name дорівнює аргументу name і 
//повертати номер телефону. Для пошуку скористайтесь циклом for.

const phone_book = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Sophia Melnyk', phone: '+380123456789' },
    { name: 'Anna Shevchenko', phone: '+380882346512' },
    { name: 'Katherina Tkachenko', phone: '+380990610568' }
]

const findPhoneByName = (name) => {
    for(const record of phone_book){
        if(record.name === name){
            return record.phone;
            break;
        }
    }
}

console.log(findPhoneByName("Anna Shevchenko"));