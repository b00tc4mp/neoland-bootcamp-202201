import { zens } from '../data'
import { randomInteger } from '../utils'

function randomZens() {
    const index = randomInteger(0, zens.length - 1)

    return zens[index]
}

export default randomZens