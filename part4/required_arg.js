function required() {
    throw Exception();
}

function getSquare(x = required(), y = 1) {
    console.log(x * y);
}

getSquare(4, 2);
getSquare(4);
getSquare();