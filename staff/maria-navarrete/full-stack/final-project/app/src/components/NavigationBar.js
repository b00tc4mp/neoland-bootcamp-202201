import './NavigationBar.sass'
import { Link, HappyIcon, HeartIcon, CommunityIcon, ProfileIcon } from '.'

export const NavigationBar = ({ onHome, onSchedules, onCommunity, onProfile }) => {


    return <>
        <nav>
            <ul>
                <li><Link onClick={onHome}><HappyIcon /></Link>Inicio</li>
                <li><Link onClick={onSchedules}><HeartIcon /></Link>Acts</li>
                <li><Link onClick={onCommunity}><CommunityIcon /></Link>Comunidad</li>
                <li><Link onClick={onProfile}><ProfileIcon /></Link>Perfil</li>
            </ul>
        </nav>
    </>
}