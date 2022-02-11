import { randomYogui } from '../logic'
import './RandomYogui.css'

function RandomYogui() {
    return <p className="random-yogui">{randomYogui()}</p>
}

export default RandomYogui