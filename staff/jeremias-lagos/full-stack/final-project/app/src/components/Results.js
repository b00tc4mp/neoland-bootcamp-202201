import './Results.sass'
import { useEffect, useState } from 'react'
import { searchTournament } from '../logic'
import { useSearchParams, useNavigate } from 'react-router-dom'
import moment from 'moment'


function TournamentResults() {

    const [searchParams, setSearchParams] = useSearchParams()
    const [tournaments, setTournaments] = useState([])


    const query = searchParams.get('query')
    const location = searchParams.get('location')
    const date = searchParams.get('date')

    const navigate = useNavigate()



    useEffect(() => {
        try {
            
            searchTournament(query, location, date)
                .then(tournaments => {
                    setTournaments(tournaments)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [query, location, date])

    return <>
        {tournaments.length > 0 && <div className='results__wrapper'>
            <h1 className='results__title'>Tournaments results:</h1>
            {tournaments.map(tournament => <div className='results__item' key={tournament.id} onClick={() => {
                navigate(`/results/${tournament.id}`)
            }}>

                {/* <li>{tournament.id}</li> */}
                <p className='results__title-tournament'>{tournament.title}</p>
                <p className='results__desciption-tournament'>{tournament.description}</p>
                <p className='results__location-tournament'>City: {tournament.location}</p>
                <img src={tournament.image} className='results__image-tournament'/>
                <p className='results__date-tournament'>Date: {moment(tournament.date).format('LL')}</p>

            </div>)}
        </div>}

    </>
}

export default TournamentResults

