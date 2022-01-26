const array = [2, 9, 3, 4, 6, 8, 2, 5, 9, 8, 2];

function indexOf(array, value, index) {
  for (let i = [index]; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }

  return -1;
}

console.log(indexOf(array, 9, 3));
