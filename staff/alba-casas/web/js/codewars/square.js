function squareSum(numbers) {
  const result = numbers.map((n) => {
    return n ** 2;
  });
  let sum = 0;
  for (let i = 0; i < result.length; i++) {
    sum += result[i];
  }
  return sum;
}

console.log(squareSum([2, 3, 4]));
