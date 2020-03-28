const sumExtended = (...args) => {
  const sum = args.reduce((acc, next) => acc + next);

  const returnFunc = (...nextArgs) => sumExtended(sum, ...nextArgs);
  returnFunc.toString = () => sum;

  return returnFunc;
};

console.log(sumExtended(2, 3, 4, 5)); // 14
console.log(sumExtended(2)(3, 4)(5)); // 14
console.log('----------');
