import './NavigationBar.sass'
import {Link, HappyIcon, HeartIcon, CommunityIcon, ProfileIcon} from '.'

export const NavigationBar = () => {

    return<>
    <nav>
        <ul>
            <li><Link><HappyIcon/></Link>Inicio</li>
            <li><Link><HeartIcon/></Link>Acts</li>
            <li><Link><CommunityIcon/></Link>Comunidad</li>
            <li><Link><ProfileIcon/></Link>Perfil</li>
        </ul>
    </nav>
    </>
}