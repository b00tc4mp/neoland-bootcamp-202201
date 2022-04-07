import { validateNumber } from "../utils/validators";

function division(a, b) {
  validateNumber(a);
  validateNumber(b);

  return a / b;
}

export default division;
