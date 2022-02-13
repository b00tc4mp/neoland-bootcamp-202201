import { we } from '../data'
import { randomInteger } from '../utils'

function randomWe() {
    const index = randomInteger(0, we.length - 1)

    return we[index]
}
export default randomWe
