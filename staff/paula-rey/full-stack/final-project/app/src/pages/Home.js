import './Home.sass'
import { Search } from '../components/Search'

export const Home = ({onLocationCard}) => {

    return <>
        <Search onLocationCard={onLocationCard}/>
    </>

}