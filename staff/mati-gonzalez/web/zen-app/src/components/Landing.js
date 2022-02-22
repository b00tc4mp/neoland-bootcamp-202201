import Logo from './Logo'
import RandomYogui from './RandomYogui'
import RandomZen from './RandomZen'
import RandomFortune from './RandomFortune'
import './Landing.css'

function Landing({ onEnter }) {
    return <>
    <Logo />
      <h1 className="jonSnow">Jon Snow Cocaine</h1>
      <p>{RandomYogui()}</p>
      <p>{RandomZen()}</p>
      <p>{RandomFortune()}</p>
      <button className="landing__button" onClick={ Enter }>Enter</button>
    <RandomYogui />
    </>
}

export default Landing