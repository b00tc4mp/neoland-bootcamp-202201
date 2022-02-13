import { randomPhrases } from '../logic'
import './RandomPhrases.css'

function RandomPhrase() {
    return <p className="random-phrase">"{randomPhrases()}"</p>
}

export default RandomPhrase