function getMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}

let arr = [-5, -1, 0, 1, 7];

let minmax = getMinMax(arr);
let [min, max] = getMinMax(arr);
let [minimum,] = getMinMax(arr);
let [, maximum] = getMinMax(arr);

console.log(minmax);
console.log(min);
console.log(max);
console.log(minimum);
console.log(maximum);