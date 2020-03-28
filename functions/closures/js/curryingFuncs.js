const multiplyAll = (arr) => (multiplier) => arr.map((num) => num * multiplier);


console.log(multiplyAll([1, 2, 3])(2)); // = [2, 4, 6];
console.log('---------');
