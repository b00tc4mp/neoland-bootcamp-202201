const nums = [1, 2, 3, 5];

const some = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
      return true;
    }
  }
  return false;
};

const result = some(nums, (element) => {
  if (element % 2 === 0) {
    return true;
  }
  return false;
});



const names = ["Peter", "Laura", "Mike", "Jessica", "Wendy"];

const some2 = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
      return true;
    }
  }
  return false;
};

const result2 = some2(names, (element) => {
  if (element.length > 6) {
    return true;
  }
  return false;
});

console.log(result2);
