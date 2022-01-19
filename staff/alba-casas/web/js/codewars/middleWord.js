function getMiddleWord(str) {
  // hola -> ol -> 1, 2
  if (str.length % 2 === 0) {
    return `${str[str.length / 2 - 1]}${str[str.length / 2]}`;
  } else {
    return str[Math.floor(str.length / 2)];
  }
}

console.log(getMiddleWord("holas"));
