import './NavigationBar.sass'
import { Link, HappyIcon, HeartIcon, CommunityIcon, ProfileIcon } from '.'

export const NavigationBar = ({ onHome: _onHome, onSchedules: _onSchedules, onCommunity: _onCommunity, onProfile: _onProfile }) => {

    const onHome = event => {
        _onHome && _onHome(event)
    }

    const onSchedules = event => {
        _onSchedules && _onSchedules(event)
    }

    const onCommunity = event => {
        _onCommunity && _onCommunity(event)
    }

    const onProfile = event => {
        _onProfile && _onProfile(event)
    }

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