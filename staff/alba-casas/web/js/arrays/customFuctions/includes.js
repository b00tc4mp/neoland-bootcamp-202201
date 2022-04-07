const pets = [
  "cat",
  "dog",
  "bat",
  "chameleon",
  "cheetah",
  "chicken",
  "chimpanzee",
];

function includes(array, value, index) {
  for (let i = index; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(includes(pets, "cat", 3));
