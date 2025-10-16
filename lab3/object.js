'use strict'

const iface = {
  m1: x => [x],
  m2: function (x, y) {
    return [x, y];
  },
  m3(x, y, z) {
    return [x, y, z];
  }
}

const array = [];

const keys = Object.keys(iface);

for(let i in keys){
    let key = keys[i];
    array.push([key, iface[key].length]);
}

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}