import {validateNumber} from '../utils/validators'

function power(a, b) {
    validateNumber(a)
    validateNumber(b)

    return a ** b
}

export default power