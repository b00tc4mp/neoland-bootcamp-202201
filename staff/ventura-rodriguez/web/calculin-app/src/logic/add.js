import { validateNumber } from '../utils/validators'

function add(a, b) {
    validateNumber(a)
    validateNumber(b)

    return a + b
}

export default add