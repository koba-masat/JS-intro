let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 6, 9, 12, 15];

console.log("forEach");
arr1.forEach(function (v) {
  console.log(v);
});
arr1.forEach(function (v, i, a) {
  console.log(v + "," + i + "," + a);
});

console.log("every");
console.log(
  "arr1=" +
    arr1.every(function (v) {
      return v % 3 === 0;
    })
);

console.log(
  "arr2=" +
    arr2.every(function (v) {
      return v % 3 === 0;
    })
);

console.log("some");
console.log(
  "arr1=" +
    arr1.some(function (v) {
      return v % 3 === 0;
    })
);

console.log(
  "arr2=" +
    arr2.some(function (v) {
      return v % 3 === 0;
    })
);

console.log("filter");
console.log(
  arr1.filter(function (v) {
    return v % 2 === 0;
  })
);

console.log("find");
console.log(
  arr1.find(function (v) {
    return v % 2 === 0;
  })
);

console.log("findIndex");
console.log(
  arr1.findIndex(function (v) {
    return v % 2 === 0;
  })
);

console.log("reduce");
arr1.reduce(function (pv, cv) {
    return pv + cv;
});
