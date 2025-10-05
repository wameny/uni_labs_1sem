'use strict'

//Виконайте такі пункти всередині функції fn (див. приклад: 7-objects.js)

//- Створіть об'єкт з одним полем name і запишіть посилання на нього в константу.
//- Створіть об'єкт з одним полем name і запишіть посилання на нього в змінну.
//- Спробуйте змінити значення поля name в обох об'єктів.
//- Спробуйте записати посилання на інший об'єкт в обидва ідентифікатори.
//- Поясніть поведінку коду та залиште лише робочий код.

const fn = () => {
    const first_name = {name: "Vlada"};
    let second_name = {name: "Starusieva"};

    first_name.name = "Sophia";
    second_name.name = "Melnyk";

    console.log(first_name.name, second_name.name);
    console.log(first_name, second_name);

    second_name = {age: 18};

    //оскільки в нас константа, то ми не можемо переписати значення об'єкту, а якщо в нас let, то можемо

    console.log(second_name.age);
    console.log(second_name);
}

fn();