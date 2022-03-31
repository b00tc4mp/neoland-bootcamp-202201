import './TournamentDetails.sass'
import { useEffect, useState } from 'react'
import { deleteTournament, retrieveTournaments } from '../logic'
import { useParams } from 'react-router-dom'
import ModalUpdateTournament from './elements/ModalUpdateTournament'
import moment from 'moment'


function TournamentDetails({ onBack }) {

    const [tournament, setTournament] = useState({})
    const { tournamentId } = useParams()
    const [isShowModal, setIsShowModal] = useState()

    const toggleModal = () => {
        setIsShowModal(true)
    }

    const closeModal = () => {
        setIsShowModal(false)
    }

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

    const onDeleteTournament = event => {
        event.preventDefault()

        try {
            deleteTournament(sessionStorage.token, tournamentId)
                .then(() => {
                    alert('Tournament deleted')
                    onBack()
                })
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }


    return <>
        {isShowModal && <ModalUpdateTournament onClose={closeModal} />}
        {tournament &&
            <div className='details__item'>
                <h2 className='details__title'>{tournament.title}</h2>
                <p className='details__description'>{tournament.description}</p>
                <p className='details__location'>City: {tournament.location}</p>
                <img className='details__image-tournament' src={tournament.urlImage} />
                <p className='details__date'>{moment(tournament.date).format('LL')}</p>
                <button className='update-tournament__button' onClick={toggleModal}>Update Tournament</button>
                <button className='delete-tournament__button' onClick={onDeleteTournament}>Delete</button>
            </div>}

    </>
}

export default TournamentDetails

