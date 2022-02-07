import { validateNumber } from '../utils/validators'

function remainder(a, b) {
    validateNumber(a)
    validateNumber(b)

    return a % b
}

export default remainder