import './Favorites.sass'
import { ListFavoritesRackets } from '../components'

export function Favorites({ goToDetails }) {


    return <div className='favorites'>
        <h1>TUS FAVORITOS</h1>
        <ListFavoritesRackets goToDetails={goToDetails}/>

    </div>


}
