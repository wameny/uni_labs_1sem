'use strict'

const arrayNum = [1, 2, 3, 4, 5, 6, 7];
const arrayCity = ['Kiyv', 'London', 'Paris', 'Barselona'];

function removeElement(array, item){
    const index = array.indexOf(item);
    if(index != -1) array.splice(index, 1);

    return array;
};

function removeElements(array, ...items){
    for(let item of items){
        const index = array.indexOf(item);
        if(index != -1) array.splice(index, 1);
    }

    return array;
};

removeElement(arrayNum, 5);
console.log('Перший варіант: ' + arrayNum);

removeElements(arrayNum, 5, 1, 6);
console.log('Другий варіант: ' + arrayNum);

removeElement(arrayCity, 'London');
removeElement(arrayCity, 'Madrid');
console.log('Перший варіант: ' + arrayCity);

removeElements(arrayCity, 'London', 'Madrid', 'Paris');
console.log('Другий варіант: ' + arrayCity);
