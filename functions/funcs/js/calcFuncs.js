function executeOperation(oper, x1, x2) {
  switch (oper) {
    case '+':
      return x1 + x2;
    case '-':
      return x1 - x2;
    case '*':
      return x1 * x2;
    case '/':
      return Math.floor(x1 / x2);
    default:
      return 'unknown operation';
  }
}

const numsFuncs = [];

for (let i = 0; i < 10; i += 1) {
  const numFunc = (args) => {
    if (!args) return i;

    const [oper, num2] = args;
    return executeOperation(oper, i, num2);
  };
  numsFuncs.push(numFunc);
}

const [zero, one, two, tree, four, five, six, seven, eight, nine] = numsFuncs;

function plus(num2) {
  return ['+', num2];
}
function minus(num2) {
  return ['-', num2];
}
function times(num2) {
  return ['*', num2];
}
function dividedBy(num2) {
  return ['/', num2];
}

console.log(two(plus(two())));
console.log(five(times(six())));
console.log('---------');
