/* TASK */
function logOne(text: string): string{
  console.log(text);
  return text
};

const logTwo = (text: string): string => {
  console.log(text);
  return text;
}

/* the task is to rewrite the approach below so we can be sure that logTwo will work after logOne */
const randomDelay1: number = Math.random() * 1000;
const randomDelay2: number = Math.random() * 1000;
setTimeout(logOne, randomDelay1, 'logOne');
setTimeout(logTwo, randomDelay2, 'logTwo')

/* SOLUTION */

/* inOrder using the callback pattern. */
function inOrder(callback1:(text: string) => string, callback2:(text: string) => string) {
  const randomDelay:number = Math.random() * 1000;

  setTimeout((text: string) => {
    const randomDelay:number = Math.random() * 1000;

    callback1(text);

    setTimeout(callback2, randomDelay, 'callbackTwo')
  }, randomDelay, 'callbackOne')

}
inOrder(logOne, logTwo);


/* Refactor inOrder to use promises. */
function inOrderPromises(callback1:(text: string) => string, callback2:(text: string) => string) {
  const randomDelay:number = Math.random() * 1000;

  const p = new Promise((resolve, resect) => {
    setTimeout(resolve, randomDelay)
  })

  p.then(() => callback1('promiseOne')).then(() => callback2('promiseTwo'));
}

inOrderPromises(logOne, logTwo)

