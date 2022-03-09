import Logo from './Logo'
import './Landing.css'
import RandomPhrase from './RandomPhrases'

function Landing({ onEnter }) {
    return <div className="landing">
        <Logo />
        <RandomPhrase />
       
        <button className="landing__button" onClick={onEnter}>Enter </button>
    </div>
}

export default Landing