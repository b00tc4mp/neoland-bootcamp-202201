import './TournamentDetails.sass'
import { useEffect,useState } from 'react'
import { retrieveTournaments } from '../logic'
import { useParams } from 'react-router-dom'


function TournamentDetails () {

    const [tournament, setTournament] = useState()
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
            alert (error.message)
        }

    }, [tournamentId])

    return <> 
    {tournament &&
        <div>
            <h2>{tournament.title}</h2>
            <p>{tournament.description}</p>
            <p>{tournament.location}</p>
            <img src={tournament.urlImage}/>
            <p>{tournament.date}</p>
        </div>}
    </>
}

export default TournamentDetails

// compos importantes:
// createProduct
// listProducts
// listFavorites 
// products results (esperará una prop que será QUERY)
