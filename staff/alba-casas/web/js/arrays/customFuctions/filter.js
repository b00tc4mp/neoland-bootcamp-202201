const names = ["Peter", "Laura", "Mike", "Jessica", "Wendy"];

function filter(array, callback) {
  const list = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element) === true) {
      list.push(element);
    }
  }
  return list;
}

const result = filter(names, (name) => {
  if (name.length > 6) {
    return true;
  }
});

const surnames = ["Peter", "Laura", "Mike", "Jessica", "Wendy"];

function filter2(array, callback) {
  let list = [];
  let index = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) {
      list[index] = element;
      index++;
    }
  }
  return list;
}

const result2 = filter2(surnames, (index) => {
  if (index.length > 4) {
    return true;
  }
});

console.log(result2);
