import React from 'react'
import Button from '../Button'
import { Input } from '../form-elements'
import Modal from './Modal'

const ModalCreateTournament = ({onClose}) => {
  return (
    <Modal onClose={onClose}>
        <Input placeholder='title'/>
        <Input placeholder='description'/>
        <Input placeholder='location'/>
        <Input placeholder='date'/>
        <img src='https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/09/28082346/CtY9h13WAAEsNfz.jpg' alt="pepo"/>
        <Button>Create Tournament</Button>
    </Modal>
  )
}

export default ModalCreateTournament