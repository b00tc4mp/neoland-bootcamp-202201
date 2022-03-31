import './MyTournaments.sass'
import { useEffect, useState } from 'react'
import { retrieveTournaments } from '../logic'
import { useSearchParams, useNavigate } from 'react-router-dom'

function MyTournaments() {

    const [tournament, setTournament] = useState({})
    const { tournamentId } = useParams()

    useEffect(() => {

        try {
            retrieveTournaments(sessionStorage.token, tournamentId)
                .then(tournament => {
                    setTournament(tournament)
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }

    }, [tournamentId])

    return <>
        <div>
            {tournament &&
                <div className='details__item'>
                    <h2 className='details__title'>{tournament.title}</h2>
                    <p className='details__description'>{tournament.description}</p>
                    <p className='details__location'>{tournament.location}</p>
                    <img className='details__image-tournament' src={tournament.urlImage} />
                    <p className='details__date'>{tournament.date}</p>
                </div>}
        </div>
    </>
}

export default MyTournaments