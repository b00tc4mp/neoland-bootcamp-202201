import './Home.sass'
import { SearchLocations, ListSearchResults } from '../components'

export const Home = ({onSarchLocations: _onSearchLocations, goToLocationDetails: _goToLocationDetails }) => {

    const onSearchLocations = params => {
        _onSearchLocations && _onSearchLocations(params)
    }


    const goToLocationDetails = locationId => {
        _goToLocationDetails && _goToLocationDetails(locationId)
    }

    return <>
        <SearchLocations onSearchLocations={onSearchLocations} />
        <ListSearchResults goToLocationDetails={goToLocationDetails}/>
    </>

}