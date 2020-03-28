function compose(...allFuncs) {
  return (...value) => { //  to support multiple params
    const finalResInArr = allFuncs.reverse().reduce((acc, nextF) => {
      const callResult = nextF(...acc);

      // as array to be able to make a call next time as I use the spread operator above
      const resInArr = [].concat(callResult);
      return resInArr;
    }, value);

    return finalResInArr[0];
  };
}

const sum = (...a) => a.reduce((acc, next) => acc + next, 0);
const add1 = (a) => a + 1;
const superPow = (a) => a ** a;

console.log(compose(add1, sum)(0) === 1);
console.log(compose(superPow, add1, sum)(1, 1) === 27);
console.log('---------');
