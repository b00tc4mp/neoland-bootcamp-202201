import { randomFortunes } from '../logic'


function RandomFortunes() {
    return <p className="random-yogui">"{randomFortunes()}"</p>
}

export default RandomFortunes