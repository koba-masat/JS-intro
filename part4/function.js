function getTriangle1(base, height) {
    return base * height / 2;
}
console.log(getTriangle1(2, 4));

let getTriangle21 = new Function('base', 'height', 'return base * height / 2;');
console.log(getTriangle21(2, 4));

let getTriangle22 = new Function('base, height', 'return base * height / 2;');
console.log(getTriangle22(2, 4));

let getTriangle3 = function (base, height) {
    return base * height / 2;
}
console.log(getTriangle3(2, 4));

let getTriangle3 = (base, height) => {
    return base * height / 2;
}
console.log(getTriangle3(2, 4));

