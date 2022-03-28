import './SearchLocations.sass'
import { SearchIcon, CleanSearchIcon, Input, Select, Button } from '.'
import { ListSearchResults } from '../components'
import { data } from 'commons'
const { locationTypes, locationCities } = data

export function SearchLocations({onSearchLocations, goToLocationDetails}) {

    const search = event => {
        event.preventDefault()

        const { target: { query: { value: query }, type: { value: _type }, city: { value: _city } } } = event

        const type = _type ? _type : ''
        const city = _city ? _city : ''

        onSearchLocations({query, type, city})
    }


    return <div className="search">
        <form className="search__form" onSubmit={search}>
            <Input className="search__query-input" type="text" name="query" placeholder="Busca" />
            <Select className="search__type-input" options={locationTypes} name="type" placeholder="Todos" label= "Tipo" />
            <Select className="search__city-input" options={locationCities} name="city" placeholder="Todas" label= "Ciudad" />
            <Button type="submit"><SearchIcon/></Button>
            <Button type="reset"><CleanSearchIcon/></Button>
            <ListSearchResults goToLocationDetails={goToLocationDetails}/> 
        </form>
    </div>

}



