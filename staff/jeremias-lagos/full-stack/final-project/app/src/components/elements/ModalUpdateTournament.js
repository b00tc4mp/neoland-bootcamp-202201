import React from 'react'
import Modal from './Modal'
import { useState, useEffect } from 'react'
import { retrieveTournaments, updateTournament } from '../../logic'
import { useParams } from 'react-router-dom'
import './ModalUpdateTournament.sass'


const ModalUpdateTournament = ({ onClose }) => {
   const [tournament, setTournament] = useState({})
   const { tournamentId } = useParams()
    useEffect(() => {
        try {
            retrieveTournaments(sessionStorage.token, tournamentId)
                .then(( tournament ) => {
                    setTournament(tournament)
                })
                .catch(error => alert (error.message))
        } catch ( error) {
            alert(error.message)
        }
    }, [])
   
    
    const modifyTournament = event => {
        event.preventDefault()

        const { target:
            { title: { value: title },
                description: { value: description },
                location: { value: location },
                date: { value: date }
            } } = event

            try {
                updateTournament(sessionStorage.token, tournamentId, title, description, location, new Date(date))
                .then(() => {
                    alert('tournament updated')
                    onClose()
                })
                .catch(error => { throw error })
        } catch ({ message }) {
            alert(message)
        }
    }


    return (
        <Modal className='modal__update-tournament' onClose={onClose}>
            <form className='update-tournament__form' onSubmit={modifyTournament}>
                <h2 className='update-tournament__title'>Update Tournament</h2>
                <input className='update-title__input' type='text' name='title' placeholder='title' defaultValue={tournament?.title} />
                <textarea className='update-description__textarea' type='text' name='description' placeholder='description' defaultValue={tournament?.description} />
                <input className='update-location__input' type='text' name='location' placeholder='location' defaultValue={tournament?.location} />
                <input className='update-date__input' type='date' name='date' placeholder='date' defaultValue={tournament?.date?.substring(0,10)}/>
                <button className='update__button' type='submit'>Update</button>
            </form>

        </Modal>
    )
}

export default ModalUpdateTournament