import { randomZen } from '../logic'
import './RandomYogui.css'

function RandomZen() {
    return <p className="random-yogui">{randomZen()}</p>
}

export default RandomZen