const animals = ["pigs", "goats", "sheep"];
/* const animals2 = ["cow", "rat"]; */

function push(array, value) {
  array[array.length] = value;
  return array.length;
}

function push2(array) {
  for (let i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i];
  }
  return array.length;
}

function push3(array, array2) {
  array = [...array, ...array2];
  return array;
}

console.log(push2(animals, "cow", "rat"));
