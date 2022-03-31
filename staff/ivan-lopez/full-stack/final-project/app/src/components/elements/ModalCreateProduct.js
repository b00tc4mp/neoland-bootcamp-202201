import './ModalCreateProduct.sass'
import { addProduct } from '../../logic'
import React from 'react'
import Button from '../Button'
import { Input } from '../form-elements'
import Modal from './Modal'
import { useDropzone } from 'react-dropzone'
import {convertToBase64} from '../utils/utils'


  const ModalCreateProduct = ({ onClose }) => {

    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
      accept: 'image/*',
    });
    const productImage = acceptedFiles[0];
    const productImgSrc = productImage && URL.createObjectURL(productImage);
    
    
    const createProduct = event => {
      event.preventDefault()

      const { target: {
        name: { value: name },
        size: { value: size },
        color: { value: color },
        price: { value: price },
        description: { value: description } } } = event

      try {
        if (productImage)
          convertToBase64(productImage).then((productImage) => {
            addProduct(sessionStorage.token, name, productImage, size, color, price, description)
              .then(() => {
                  alert('¡Producto creado correctamente!')
                  onClose()
              })
              .catch((error) => alert(error.message))
          })
      } catch ({ message }) {
        alert(message)
      }

    }
  

    return (
      <Modal className='modal__create-product' onClose={onClose}>
        <form className='create-product' onSubmit={createProduct}>
            <h1 className='title' >Añadir producto</h1>
            <div className='input-container' >
              <Input className='input' type='text' name='name' placeholder='Nombre del producto' />
              <Input className='input' type='text' name='size'placeholder='Talla' />
              <Input className='input' type='text' name='color'placeholder='Color' />
              <Input className='input' type='text' name='price'placeholder='Precio' />
              <Input className='input' type='text' name='description'placeholder='Descripción' />
            </div>
            <div className='buttons' >
              <Button type="submit">Añadir</Button>
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            {productImage && <img
              width='200'
              height='200'
              src={productImgSrc}
              alt='photo'
              />}
              <Button className='button__choose-file' >Elegir archivo</Button>
            </div>
            </div>

        </form>
      </Modal>




    )
  }

export default ModalCreateProduct
