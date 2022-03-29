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
              })
              .catch((error) => alert(error.message))
          })
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
            <Button type="submit">Añadir</Button>
        </form>
            <div {...getRootProps()}>
            <input {...getInputProps()} />
            {productImage && <img
              src={productImgSrc}
              alt='photo'
            />}

            {/* <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              <ButtonFile>Choose File</ButtonFile>
          </div>
           {productImage && <p>{productImage.path}</p>}
            /> */}
            <Button>Elegir archivo</Button>
          </div>
      </Modal>
    )
  }

export default ModalCreateProduct
