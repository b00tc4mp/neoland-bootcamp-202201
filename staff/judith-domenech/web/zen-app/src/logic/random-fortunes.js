import { fortunes } from '../data'
import { randomInteger } from '../utils'

function randomFortunes() {
    const index = randomInteger(0, fortunes.length - 1)

    return fortunes[index]
}

export default randomFortunes