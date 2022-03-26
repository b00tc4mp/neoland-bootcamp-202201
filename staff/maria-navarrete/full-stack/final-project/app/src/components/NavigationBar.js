import './NavigationBar.sass'
import { Link, HappyIcon, HeartIcon, CommunityIcon, ProfileIcon } from '.'

export const NavigationBar = ({ onHome, onActs, onCommunity, onProfile }) => {

    const goToHome = event => {
        onHome && onHome(event)
    }

    const goToActs = event => {
        onActs && onActs(event)
    }

    const goToCommunity = event => {
        onCommunity && onCommunity(event)
    }

    const goToProfile = event => {
        onProfile && onProfile(event)
    }

    return <>
        <nav>
            <ul>
                <li><Link href='' onClick={goToHome}><HappyIcon /></Link>Inicio</li>
                <li><Link href='' onClick={goToActs}><HeartIcon /></Link>Acts</li>
                <li><Link href='' onClick={goToCommunity}><CommunityIcon /></Link>Comunidad</li>
                <li><Link href='' onClick={goToProfile}><ProfileIcon /></Link>Perfil</li>
            </ul>
        </nav>
    </>
}