
const cache = (func) => {
  const cacheMap = new Map();
  return (...args) => {
    console.log(`cache size is ${cacheMap.size}`);
    const keyPresent = cacheMap.has(JSON.stringify(args));
    // checking for the key in case the value is falsy
    if (keyPresent) return cacheMap.get(JSON.stringify(args));

    const newRes = func(...args);
    cacheMap.set(JSON.stringify(args), newRes);
    return newRes;
  };
};


const complexFunction = (arg1, arg2) => arg1 + arg2;
const cachedFunction = cache(complexFunction);

console.log(cachedFunction('foo', 'bar')); // complex function should be executed
console.log(cachedFunction('foo', 'bar')); // complex function should not be invoked again, instead the cached result should be returned
console.log(cachedFunction('foo', 'baz')); // should be executed, because the method wasn't invoked before with these arguments
console.log('----------');
