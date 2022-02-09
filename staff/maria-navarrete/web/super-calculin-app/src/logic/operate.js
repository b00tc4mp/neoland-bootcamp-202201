import {validateNumber} from '../utils/validators'

function operate(a, b, operation) {
    validateNumber(a)
    validateNumber(b)

    if(operation === '+')
        return a + b
    else if(operation === '-')
        return a - b
    else if(operation === '/')
        return a / b
    else if(operation === 'x')
        return a * b
    else if(operation === '^')
        return a ** b
    else
        throw new Error('operation not supported')
}

export default operate