// toString/valueOf
var obj = new Object();
console.log(obj.toString());
console.log(obj.valueOf());

var dat = new Date();
console.log(dat.toString());
console.log(dat.valueOf());

var arr = ["a", "b", "c"];
console.log(arr.toString());
console.log(arr.valueOf());

var num = 10;
console.log(num.toString());
console.log(num.valueOf());

var regexp = /[0-9]*[a-z]/gi
console.log(regexp.toString());
console.log(regexp.valueOf());

// assign
var pet = {}; // = new Object();
var cat = {
    type: 'cat',
    name: 'pochi',
    description: 'this is cat'
}
var dog = {
    type: 'dog',
    name: 'hachi',
    home: {
        type: 'alone',
        month: '2'
    }
}
Object.assign(pet, cat, dog);
console.log(pet);

// create
