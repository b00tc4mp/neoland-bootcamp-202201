import { randomFortune } from '../logic'
import './RandomYogui.css'

function RandomFortune() {
    return <p className="random-yogui">{randomFortune()}</p>
}

export default RandomFortune