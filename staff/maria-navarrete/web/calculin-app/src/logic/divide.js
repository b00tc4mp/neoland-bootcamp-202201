import {validateNumber} from '../utils/validators'

function divide(a, b) {
    validateNumber(a)
    validateNumber(b)

    return a / b
}

export default divide