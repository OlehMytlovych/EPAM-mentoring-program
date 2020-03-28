const throttle = (func, ms) => {
  let lastCalled = 0;
  let lastArgs = null;
  let delayed = false;

  function throttleFunc(...currArgs) {
    // miliseconds log to check
    const nowMilisecs = Date.now().toString();
    console.log(`${currArgs} called at ${nowMilisecs.slice(nowMilisecs.length - 4)}ms`);
    //

    const timeDiff = Date.now() - lastCalled;
    lastArgs = currArgs;

    if (timeDiff < ms && !delayed) {
      const launchDelay = ms - timeDiff;

      setTimeout(() => {
        func.apply(this, lastArgs);

        delayed = false;
        lastCalled = Date.now();
      }, launchDelay);

      delayed = true;

      return;
    }

    // there may alrady be a delayed func which will be executed in a few ms
    if (!delayed) {
      func.apply(this, lastArgs);
      lastCalled = Date.now();
    }
  }
  return throttleFunc;
};

function fun(a) {
  console.log(a);

  // miliseconds log to check
  const nowMilisecs = Date.now().toString();
  console.log(`${a} logged at ${nowMilisecs.slice(nowMilisecs.length - 4)}ms`);
  //
}

// task check
/*
  // f1000 passes calls to f at maximum once per 1000 ms
  const f1000 = throttle(fun, 1000);

  f1000(1); // shows 1
  f1000(2); // (throttling, 1000ms not out yet)
  f1000(3); // (throttling, 1000ms not out yet)
  // when 1000 ms time out...
  // ...outputs 3, intermediate value 2 was ignored
*/


// my additional check
/*
  setTimeout(() => f1000('1200ms'), 1200); // not logged as f1000(3) logged 200ms ago, but argument written as latest

  // if you comment this, 1200ms will be logged a second after f1000(3)
  setTimeout(() => f1000('2000ms'), 2000); // logged instead of 1200ms as f1000(3) logged +- 1000ms ago
*/
