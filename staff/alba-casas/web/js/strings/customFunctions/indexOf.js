const text = "hello world";

const indexOf = (string, searchValue) => {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === searchValue) return i;
  }
  return -1;
};

const result = indexOf(text, "w");

console.log(result);
