import './Landing.css'
import Logo from './Logo'
import RandomFortune from './RandomFortune'
import RandomYogui from './RandomYogui'
import RandomZen from './RandomZen'

function Landing({onEnter}) {
    return <div className="landing">
        <Logo />
        <RandomYogui/>
        <RandomZen/>
        <RandomFortune/>
        <button className="landing__button" onClick ={onEnter}>Enter</button>
    </div>
}

export default Landing