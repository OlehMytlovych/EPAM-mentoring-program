const makeLazy = (func, ...args) => () => func(...args);

const double = (n) => n * 2;
const add = (a, b) => a + b;

const lazyValue = makeLazy(double, 5);
const lazySum = makeLazy(add, 2, 3);

console.log(lazyValue()); // => 10
console.log(lazySum()); // => 5
console.log('----------');
