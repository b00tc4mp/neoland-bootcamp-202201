import { validateNumber } from '../utils/validators'

function pow(a,b){
    validateNumber(a)
    validateNumber(b)

    return a ** b
}

export default pow