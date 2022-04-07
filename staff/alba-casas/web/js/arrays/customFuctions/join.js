const elements = ["Fire", "Air", "Water"];

const join = (arr, separator) => {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (result) {
      result += separator;
    }
    result += arr[i];
  }
  return result;
};
console.log(join(elements, ","));
