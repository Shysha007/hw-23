function count() {
    let num = 0;
    return function (numTwo) {
        return num += numTwo;
    }
}

let sum = count();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));
