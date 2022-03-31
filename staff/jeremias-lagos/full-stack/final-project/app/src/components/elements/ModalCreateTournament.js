import React from 'react'
import Modal from './Modal'
import { createTournament } from '../../logic'
import './ModalCreateTournament.sass'


const ModalCreateTournament = ({ onClose }) => {

    const addTournament = event => {
        event.preventDefault()
    
        const { target:
            { title: { value: title },
                description: { value: description },
                location: { value: location },
                date: { value: date }
            } } = event

        try {
            createTournament(sessionStorage.token, title, description, location, new Date(date))
                .then(() => {
                    alert('Tournament created')
                    onClose()
                })
                .catch(error => { throw error })
        } catch ({ message }) {
            alert(message)
        }
    }


    return (
        <Modal className='modal__create-tournament' onClose={onClose}>
            <form className='create-tournament__form' onSubmit={addTournament}>
                <h2 className='tournament__title'>Create a Tournament 🏆</h2>
                <input className='create-title__input' type='text' name='title' placeholder='title'/>
                <textarea className='create-description__textarea' type='text' name='description' placeholder='description'/>
                <input className='create-location__input' type='text' name='location' placeholder='location'/>
                <input className='create-date__input' type='date' name='date' placeholder='date'/>
                <button className='create__button' type='submit'>Create</button>
            </form>

        </Modal>
    )
}

export default ModalCreateTournament