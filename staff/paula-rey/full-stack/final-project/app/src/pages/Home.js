import './Home.sass'
import { NavigationMenu, SearchLocations, Header } from '../components'

export const Home = ({onSearchLocations, onLogo, onLogOut, onSearchLocationIcon, onAddLocationIcon, onFavoritesIcon, onProfileIcon }) => {

    return <div className="home">

        <Header onLogo={onLogo} onLogOut={onLogOut}/>
        <SearchLocations onSearchLocations={onSearchLocations} />
        <NavigationMenu onSearchLocationIcon={onSearchLocationIcon} onAddLocationIcon={onAddLocationIcon} onFavoritesIcon={onFavoritesIcon} onProfileIcon={onProfileIcon}/>

    </div>

}