import { IconProfile, IconLogo, IconHambelgue } from "../icons"
import './Header.sass'


function Header() {
    return <>
        <header className='header'>
            <IconLogo onClick={() => alert('click, click!')}/>
            <IconProfile onClick={() => alert('click, click!')}/>
            <IconHambelgue onClick={() => alert('click, click!')}/>
        </header>
    </>
}

export default Header