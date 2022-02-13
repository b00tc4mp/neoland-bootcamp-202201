import Logo from './Logo'
/* import RandomYogui from './RandomYogui' */
import './Landing.css'
/* import RandomZens from './RandomZens'
import RandomFortunes from './RandomFortunes'
import RandomWe from './RandomWe' */
import RandomPhrase from './RandomPhrases'

function Landing({ onEnter }) {
    return <div className="landing">
        <Logo />
    
        <RandomPhrase />
    

       
        <button className="landing__button" onClick={onEnter}>Enter </button>
    </div>
}

export default Landing