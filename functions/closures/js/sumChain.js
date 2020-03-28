function sumChain(num) {
  let res = num;

  const returnFunc = (nextNum) => {
    res += nextNum;
    return returnFunc;
  };
  returnFunc.toString = () => res;

  return returnFunc;
}

console.log(sumChain(2)(3)(4)(5));
console.log('----------');
