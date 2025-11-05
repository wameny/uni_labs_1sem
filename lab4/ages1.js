'use strict'

const ages = (object) => {
    let age = {};
    for(let name in object){
        age[name] = object[name].died - object[name].born;
    }
    return age;
}

const persons = {
  Mercury: { born: 1946, died: 1991 },
  Presley: { born: 1935, died: 1977 },
  Bowie: { born: 1947, died: 2016 },
};

console.log(ages(persons));