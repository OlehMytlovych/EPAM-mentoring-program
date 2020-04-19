function logOne(text) {
    console.log(text);
    return text;
}
;
var logTwo = function (text) {
    console.log(text);
    return text;
};
/* the task is to rewrite the approach below so we can be sure that logTwo will work after logOne */
var randomDelay1 = Math.random() * 1000;
var randomDelay2 = Math.random() * 1000;
setTimeout(logOne, randomDelay1, 'logOne');
setTimeout(logTwo, randomDelay2, 'logTwo');
/* inOrder using the callback pattern. */
function inOrder(callback1, callback2) {
    var randomDelay = Math.random() * 1000;
    setTimeout(function (text) {
        var randomDelay = Math.random() * 1000;
        callback1(text);
        setTimeout(callback2, randomDelay, 'callbackTwo');
    }, randomDelay, 'callbackOne');
}
inOrder(logOne, logTwo);
/* Refactor inOrder to use promises. */
function inOrderPromises(callback1, callback2) {
    var randomDelay = Math.random() * 1000;
    var p = new Promise(function (resolve, resect) {
        setTimeout(resolve, randomDelay);
    });
    p.then(function () { return callback1('promiseOne'); }).then(function () { return callback2('promiseTwo'); });
}
inOrderPromises(logOne, logTwo);
