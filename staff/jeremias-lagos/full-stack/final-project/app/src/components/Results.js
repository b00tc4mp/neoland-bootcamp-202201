import './Results.sass'
import { useEffect, useState } from 'react'
import { searchTournament } from '../logic'
import { useSearchParams, useNavigate } from 'react-router-dom'


function TournamentResults () {

    const [searchParams, setSearchParams] = useSearchParams()
    const [tournaments, setTournaments] = useState([])
    

    const query = searchParams.get('query')
    const location = searchParams.get('location')
    const date = searchParams.get('date')

    const navigate = useNavigate()





    useEffect(() => {
        try {
            // searchTournament(query, location, new Date(date))
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
        {tournaments.length > 0 && <ul>
            <h1>Tournaments results</h1>
            {tournaments.map(tournament => <ul key={tournament.id} onClick={() => {
                navigate(`/results/${tournament.id}`)
            }}>

                {/* <li>{tournament.id}</li> */}
                <li>{tournament.title}</li>
               {/*  <li>{tournament.description}</li> */}
                <li>{tournament.location}</li>
               {/*  <li>{tournament.image}</li> */}
                <li>{tournament.date}</li>

            </ul>)}
        </ul>}
    
    </>
}

export default TournamentResults

