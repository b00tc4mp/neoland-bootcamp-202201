const animals = ["pigs", "goats", "sheep"];
const animals2 = ["cow", "rat"];

function unshift(array, array2) {
  array = array.lenght = [...array, ...array2];
  return array;
}
console.log(unshift(animals, animals2));
