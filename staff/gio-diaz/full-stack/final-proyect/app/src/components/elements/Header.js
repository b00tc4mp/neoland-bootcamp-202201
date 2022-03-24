import './Header.sass'
import { IconHamburguer, IconLogo } from '../icons'
import DropDown from './DropDown'
import {useState} from "react"


function Header({ onLogo, onProfile, onProgress, onHelp }) {
    const [isShowDropdown, setShowDropdown] = useState(false)
    

    const toggleDropdown = () => {
        setShowDropdown(!isShowDropdown)
    }
    const goToLogo = event => {
        event.preventDefault()

        if(onLogo) onLogo()
    }

    return <>
        {!!isShowDropdown && <DropDown onClose={toggleDropdown} onProfile={onProfile} onProgress={onProgress} onHelp={onHelp}>
        <div>
              <a href='' className='profile__menu' onClick={(event) => {
                    event.preventDefault()
                    onProfile()
            }}>Profile</a>
            </div>
            <div>
                <a href='' className='profile__menu' onClick={(event) => {
                    event.preventDefault()
                    onProgress()
            }}>My Progress</a>
            </div>
            <div>
                <a href='' className='profile__menu' onClick={(event) => {
                    event.preventDefault()
                    onHelp()
            }}>Advices and Help</a>
            </div>
            <div>
                <a>Cerrar sesion</a>
            </div>
            </DropDown>}
        <div className='Header'>
            <a href='' onClick={goToLogo}>
                <IconLogo />
            </a>
            <IconHamburguer onClick={toggleDropdown} />
        </div>
    </>
}

export default Header