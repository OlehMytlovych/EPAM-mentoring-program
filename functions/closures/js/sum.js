const sum = (x1, x2) => {
  const addFunc = (y) => x1 + y;
  return x2 === undefined ? addFunc : x1 + x2;
};

console.log(sum(2, 3));
console.log(sum(2)(3));
console.log('---------');
