import { randomYogui } from '../logic'
import './RandomYogui.css'

function RandomYogui() {
    return <p className="random-yogi">"{randomYogui()}"</p>
}

export default RandomYogui