import { yoguis } from '../data'
import { randomInteger } from '../utils'

function randomYogui() {
    const index = randomInteger(0, yoguis.length -1)

    return yoguis[index]
}

export default randomYogui