import { randomFortune } from "../logic"
import './RandomFortune.css'

function RandomFortune(){
    return <p className="random-fortune">{randomFortune()}</p>
}

export default RandomFortune