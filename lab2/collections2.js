'use strict'

//Реалізуйте зберігання телефонних номерів на хеш-таблицях, тобто довідниках (об'єктах чи Map).
//- Задайте довідник (об'єкт) із ключами рівними значенням поля name (з попереднього прикладу) і значеннями 
//з поля phone.
//- Реалізуйте функцію findPhoneByName з сигнатурою findPhoneByName(name: string): string яка знаходить 
//телефон у хеші по імені та повертає номер телефону. Використовуйте hash[key] для пошуку телефону.

const phone_book = {Marcus: '+380445554433', 
                    Sophia: '+380123456789', 
                    Anna: '+380882346512', 
                    Katherina: '+380990610568'};
const findPhoneByName = (name) => {
    const phone = phone_book[name];
    return phone;
}

console.log(findPhoneByName("Sophia"));