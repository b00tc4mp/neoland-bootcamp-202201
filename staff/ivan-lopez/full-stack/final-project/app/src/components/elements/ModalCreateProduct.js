import React from 'react'
import Button from '../Button'
import { Input } from '../form-elements'
import Modal from './Modal'

const ModalCreateProduct = ({onClose}) => {
  return (
    <Modal onClose={onClose}>
        <Input placeholder='Nombre'/>
        <Input placeholder=''/>
        <Input placeholder='Tamaño'/>
        <Input placeholder='Descripción'/>
        <img src='https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/09/28082346/CtY9h13WAAEsNfz.jpg' alt="pepo"/>
        <Button>Crear Producto</Button>
    </Modal>
  )
}

export default ModalCreateProduct