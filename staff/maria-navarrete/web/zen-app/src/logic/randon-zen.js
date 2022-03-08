import { zens } from '../data'
import { randomInteger } from '../utils'

function getRandomZen() {
    const index = randomInteger(0, zens.length - 1)
    return zens[index]
}

export default getRandomZen