import { yoguis } from '../data'
import { randomInteger } from '../utils'

function getRandomYogui() {
    const index = randomInteger(0, yoguis.length - 1)
    return yoguis[index]
}

export default getRandomYogui