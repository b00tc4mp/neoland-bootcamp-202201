function validateNumber(num) {
  if (typeof num !== "number") throw new TypeError("num is not number");
}

function validateString(text) {
  if (typeof text !== "string") throw new TypeError("Text is not a string");
}

export { validateNumber, validateString };
