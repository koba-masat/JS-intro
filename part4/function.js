function getTriangle1(base, height) {
    return base * height / 2;
}
console.log(getTriangle1(2, 4));

var getTriangle21 = new Function('base', 'height', 'return base * height / 2;');
console.log(getTriangle21(2, 4));

var getTriangle22 = new Function('base, height', 'return base * height / 2;');
console.log(getTriangle22(2, 4));

var getTriangle3 = function (base, height) {
    return base * height / 2;
}
console.log(getTriangle3(2, 4));

var getTriangle3 = (base, height) => {
    return base * height / 2;
}
console.log(getTriangle3(2, 4));

