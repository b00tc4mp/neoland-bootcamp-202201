function highAndLow(numbers) {
  /* const numbersSorted = numbers.sort(function (a, b) {
    return a - b;
  }); */
  const highest = Math.max(...numbers);
  const lowest = Math.min(...numbers);
  /*  const lowest = Math.min(numbers);
  const total = highest; */
  return { highest, lowest };
}

console.log(highAndLow([4, 5, 6, 2, 22, 1, -8]));
