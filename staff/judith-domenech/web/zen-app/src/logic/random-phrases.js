import { randomInteger } from '../utils'
import { randomFortunes } from './index'
import { randomWe } from './index'
import { randomZens } from './index'
import { randomYogui } from './index'


const phrases = [ randomFortunes(), randomWe(), randomZens(), randomYogui() ]

function randomPhrases() {
    const index = randomInteger(0, phrases.length -1)

 return phrases[index]
}

export default randomPhrases