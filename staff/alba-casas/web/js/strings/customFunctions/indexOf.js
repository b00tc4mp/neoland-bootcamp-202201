const text = "hello world";

const indexOf = (string, searchValue) => {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    const nextChar = string[i + 1];
    if (char === searchValue[0] && nextChar === searchValue[1]) return i;
  }
  return -1;
};

const result = indexOf(text, "ld");

console.log(result);

const indexOf2 = (string, searchValue) => {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === searchValue) return i;
  }
  return -1;
};

const result2 = indexOf2(text, "l");

console.log(result2);
