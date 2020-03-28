const sumDigPow = (a, b) => {
  const result = [];

  for (let currNum = a; currNum <= b; currNum += 1) {
    const sum = currNum.toString().split('')
      .map((num, index) => Number(num ** (index + 1)))
      .reduce((acc, next) => acc + next);

    if (sum === currNum) result.push(currNum);
  }

  return result;
};

console.log(sumDigPow(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sumDigPow(1, 100)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
console.log(sumDigPow(10, 150)); // [89, 135]
console.log('-----------');
