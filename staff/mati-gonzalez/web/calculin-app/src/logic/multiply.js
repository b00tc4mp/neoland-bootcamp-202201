import { validateNumber } from '../utils/validators'

function multiply(a, b) {
    validateNumber(a)
    validateNumber(b)

    return a * b
}

export default multiply