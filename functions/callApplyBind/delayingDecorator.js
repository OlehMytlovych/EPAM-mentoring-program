const delayFunc = (func, delay) => {
  function returnFunc(...args) {
    setTimeout(() => func.apply(this, args), delay);
  }

  return returnFunc;
};

function f(x) {
  console.log(x);
}

/*
// create wrappers
const f1000 = delayFunc(f, 1000);
const f3500 = delayFunc(f, 3500);
const f3501 = delayFunc(f, 3501);

f1000('test1000ms'); // shows "test" after 1000ms
f3500('test3500ms'); // shows "test" after 3500ms
f3501('-------------');
*/
