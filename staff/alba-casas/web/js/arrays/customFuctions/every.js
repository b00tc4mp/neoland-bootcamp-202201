const names = ["Peter", "Laura", "Mike", "Jessica", "Wendy"];

function every(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (!callback(element)) {
      // exclamacion significa cuando NO exista algo, y ese algo puede ser false, null o undefined
      return false;
    }
  }
  return true;
}

const result = every(names, (name) => {
  if (name.length > 4) {
    return true;
  }
});

console.log(result);
