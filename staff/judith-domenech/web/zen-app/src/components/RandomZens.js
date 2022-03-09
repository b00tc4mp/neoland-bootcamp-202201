import { randomZens } from "../logic"; 

function RandomZens() {
    return <p className="random-zens">"{randomZens()}"</p>
}

export default RandomZens