import { validateNumber } from '../utils/validators'
import add from ''

function add(a, b) {
    validateNumber(a)
    validateNumber(b)

    return a + b
}

export default add