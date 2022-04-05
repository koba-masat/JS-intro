function higher(dict, func) {
    for (let key in dict) {
        func(key, dict[key]);
    }
}

function showDictElems(key, value) {
    console.log('key=' + key + ', value=' + value);
}

let dict = {
    type: 'dog',
    name: 'pochi'
};

higher(dict, showDictElems);
higher(dict, (key, value) => {
    console.log('key=' + key + ', value=' + value);
});

let result = 0;
let arr = [1, 3, 5, 7, 9];
higher(arr, (key, value) => {
    result += value;
});
console.log(result);