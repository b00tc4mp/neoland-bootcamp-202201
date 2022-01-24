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

console.log(result);
