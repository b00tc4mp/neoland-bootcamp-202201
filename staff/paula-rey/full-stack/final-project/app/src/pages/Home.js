import './Home.sass'
import { SearchLocations, ListSearchResults } from '../components'

export const Home = ({onSearchLocations, goToLocationDetails, goToHome }) => {

    return <div className="home">
        <h1>Bienvenid@ a Dogether</h1>
        <SearchLocations onSearchLocations={onSearchLocations} onReset={goToHome} />
        <ListSearchResults goToLocationDetails={goToLocationDetails}/> 
    </div>

}