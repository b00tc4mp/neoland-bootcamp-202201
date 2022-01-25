const animals = ["pigs", "goats", "sheep"];

function push(array, value) {
  array[array.length] = value;
  return array;
}

console.log(push(animals, ["cow", "rat"]));
