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