function array(){
    const array = [];

    function func(index){
        return array[index];
    }

    func.push = function(value){
        return array.push(value);
    }

    func.pop = function(){
        return array.pop();
    }

    return func;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());

console.log(arr.pop());