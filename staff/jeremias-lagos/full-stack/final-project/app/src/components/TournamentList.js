import './TournamentList.sass'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { listTournaments } from '../logic'
import moment from 'moment'


function TournamentList({ onBack }) {

    const [tournaments, setProducts] = useState([])

    const navigate = useNavigate();

    useEffect(() => {

        try {
            listTournaments(sessionStorage.token)
                .then(tournaments => {
                    setProducts(tournaments)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    return <div>
        <h1 className='title__header'>My Tournaments</h1>
        {tournaments.length > 0 && <div>
            {tournaments.map(tournament => <ul className='list__wrapper' key={tournament.id} onClick={() => {
                navigate(`/search/${tournament.id}`)
            }}>
                <p className='list__title-tournament'>{tournament.title}</p>
                <p className='list__description-tournament'>{tournament.description}</p>
                <p className='list__location-tournament'>City: {tournament.location}</p>
                <img src={tournament.image} className='list__image-tournament' />
                <p className='list__date-tournament'>{moment(tournament.date).format('LL')}</p>
            </ul>)}
            <button className='list__button-back' onClick={onBack}>Go Back</button>
        </div>}
    </div>
}

export default TournamentList 