const spyOn = (func) => {
  let callCounter = 0;
  const allParams = [];
  const allReturns = [];

  function spy(...args) {
    const callRes = func.apply(this, args);

    callCounter += 1;
    allParams.push(...args);
    allReturns.push(callRes);

    return callRes;
  }

  spy.callCount = () => callCounter;
  spy.wasCalledWith = (...args) => args.every((arg) => allParams.indexOf(arg) !== -1);
  spy.returned = (returned) => allReturns.indexOf(returned) !== -1;

  return spy;
};

const adder = (n1, n2) => n1 + n2;
const adderSpy = spyOn(adder);

console.log(adderSpy(2, 4)); // returns 6
console.log(adderSpy(3, 5)); // returns 8
console.log(adderSpy.callCount()); // returns 2
console.log(adderSpy.wasCalledWith(4)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(8)); // true
console.log(adderSpy.returned(0)); // false
console.log('---------');
