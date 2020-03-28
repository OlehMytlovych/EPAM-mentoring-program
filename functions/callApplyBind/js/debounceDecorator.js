const debounce = (func, ms) => {
  let lastCalled = 0;
  function bounceFunc(...args) {
    if (Date.now() - lastCalled < ms) return;

    const result = func.apply(this, args);
    lastCalled = Date.now();

    return result;
  }
  return bounceFunc;
};

const newF = debounce(console.log, 1000);


/* newF(1); // runs immediately
newF(2); // ignored

setTimeout(() => newF(3), 100); // ignored ( only 100 ms passed )
setTimeout(() => newF(4), 1100); // runs
setTimeout(() => newF(5), 1500); // ignored (less than 1000 ms from the last run) */
