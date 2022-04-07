import { validateNumber } from "../utils/validators";

function operate(a, b, operator) {
  validateNumber(a);
  validateNumber(b);

  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "x") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === "^") {
    return a ** b;
  } else {
    throw new Error("Operation not supported");
  }
}

export default operate;
