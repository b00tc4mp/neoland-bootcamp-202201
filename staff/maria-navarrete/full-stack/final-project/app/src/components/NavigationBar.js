import './NavigationBar.sass'
import { Link, HappyIcon, HeartIcon, CommunityIcon, ProfileIcon } from '.'


export const NavigationBar = ({ onHome, onSchedules, onCommunity, onProfile }) => {

    return <>
        <nav className='navigationMenu'>
            <ul className='navigationMenu__list'>
                <li className='navigationMenu__listItem'><Link className='navigationMenu__link' onClick={onHome}><HappyIcon className='navigationMenu__icon' />Inicio</Link></li>
                <li className='navigationMenu__listItem'><Link className='navigationMenu__link' onClick={onSchedules}><HeartIcon className='navigationMenu__icon' />Acts</Link></li>
                <li className='navigationMenu__listItem'><Link className='navigationMenu__link' onClick={onCommunity}><CommunityIcon className='navigationMenu__icon' />Comunidad</Link></li>
                <li className='navigationMenu__listItem'><Link className='navigationMenu__link' onClick={onProfile}><ProfileIcon className='navigationMenu__icon' />Perfil</Link></li>
            </ul>
        </nav>
    </>
}