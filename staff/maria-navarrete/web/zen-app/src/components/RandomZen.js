import { randomZen } from "../logic"
import './RandomZen.css'

function RandomZen(){
    return <p className="random-zen">{randomZen()}</p>
}

export default RandomZen