const animals = ["pigs", "goats", "sheep"];

function unshift(array, item) {
  for (let i = array.length - 1; i >= 0; i--) {
    array[i + 1] = array[i];
  }
  array[0] = item;
  return array;
}
console.log(unshift(animals, "cow"));

/* function unshift(array, item) {
  const newArray = [item];

  array.forEach((element) => (newArray[newArray.length] = element));

  return newArray;
} */

/* function unshift(array, item) {
  return [item, ...array];
} */