import { addProduct } from '../../logic'
import React from 'react'
import Button from '../Button'
import { Input } from '../form-elements'
import Modal from './Modal'


  const ModalCreateProduct = ({ onClose }) => {
    
    const createProduct = event => {
      event.preventDefault()

      const { target: {
        name: { value: name },
        size: { value: size },
        color: { value: color },
        price: { value: price },
        description: { value: description } } } = event

      try {
        addProduct(sessionStorage.token, name, size, color, price, description)
          .then(() => {
              alert('¡Producto creado correctamente!')
          })
          .catch(error => { throw error })
      } catch ({ message }) {
        alert(message)
      }

    }
  

    return (
      <Modal onClose={onClose}>
        <form onSubmit={createProduct}>
            <h1>Añadir producto</h1>
            <Input type='text' name='name' placeholder='Nombre del producto' />
            <Input type='text' name='size'placeholder='Talla' />
            <Input type='text' name='color'placeholder='Color' />
            <Input type='text' name='price'placeholder='Precio' />
            <Input type='text' name='description'placeholder='Descripción' />
            <img src='https://png.pngitem.com/pimgs/s/14-148789_transparent-homer-d-poe-clipart-apu-apustaja-png.png' />
            {/* https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/09/28082346/CtY9h13WAAEsNfz.jpg' alt="pepo" */}
            <Button type='submit' >Añadir</Button>


        </form>
      </Modal>
    )
  }

export default ModalCreateProduct
