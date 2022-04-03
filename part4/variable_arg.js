function func1(...args) {
    let sum = 0;
    for (let arg of args) {
        if (typeof arg !== 'number') {
            throw TypeError('numberのみを引数としてください')
        }
        sum += arg;
    }
    return sum;
}

console.log(func1(1, 2, 3, 4, 5));
console.log(func1(...[1, 2, 3, 4, 5]));
console.log(func1.apply(null, [1, 2, 3, 4, 5]));
console.log(func1([1, 2, 3, 4, 5]));