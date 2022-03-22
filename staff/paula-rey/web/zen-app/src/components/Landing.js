import Logo from './Logo'
import RandomYogui from './RandomYogui'
import './Landing.css'

function Landing({ onEnter }) {
    return <div className="landing">
      <Logo />
      <RandomYogui />
      {/* <button onClick={() => onEnter()}>Enter</button> */}
      <button className="landing__button" onClick={onEnter}>Enter</button>
    </div>
  }
  
  export default Landing
  