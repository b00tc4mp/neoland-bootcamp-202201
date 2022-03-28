import { useEffect, useState } from 'react'
import { retrieveProduct, updateProduct } from '../../logic'
import React from 'react'
import Button from '../Button'
import { Input } from '../form-elements'
import Modal from './Modal'
import { useParams } from 'react-router-dom'


function ModalUpdateProduct({ onClose, onProductUpdated }) {
  const [name, setName] = useState()
  const [size, setSize] = useState()
  const [color, setColor] = useState()
  const [price, setPrice] = useState()
  const [description, setDescription] = useState()
  const [product, setProduct] = useState({})
  const { productId } = useParams()

  useEffect(() => {
    try {
      retrieveProduct(productId)
        .then((product) => {
          const { name, size, color, price, description } = product
          setName(name)
          setSize(size)
          setColor(color)
          setPrice(price)
          setDescription(description)
          setProduct(product)
        })
        .catch(error => alert(error.message))
    } catch (error) {
      alert(error.message)
    }
  }, [])


  const modifyProduct = event => {
    event.preventDefault()

    const { target: {
      name: { value: name },
      size: { value: size },
      color: { value: color },
      price: { value: price },
      description: { value: description } } } = event

    try {
      updateProduct(sessionStorage.token, productId, name, size, color, price, description)
        .then(() => {
          setName(name)
          setSize(size)
          setColor(color)
          setPrice(price)
          setDescription(description)

          onProductUpdated({
            id: productId,
            name: name,
            size: size,
            color: color,
            price: price,
            description: description
          })
        })
        .catch(error => { throw error })
    } catch ({ message }) {
      alert(message)
    }

  }


  return (
    <Modal onClose={onClose}>
      <form onSubmit={modifyProduct}>
        <h1>Actualizar producto</h1>
        <Input type='text' name='name' placeholder='Nombre del producto' defaultValue={name} />
        <Input type='text' name='size' placeholder='Talla' defaultValue={size} />
        <Input type='text' name='color' placeholder='Color' defaultValue={color} />
        <Input type='text' name='price' placeholder='Precio' defaultValue={price} />
        <Input type='text' name='description' placeholder='Descripción' defaultValue={description} />
        <img src='https://cdn.7tv.app/emote/60bd749e4829db9d4dd99464/4x' />
        {/* https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/09/28082346/CtY9h13WAAEsNfz.jpg' alt="pepo" */}
        <Button type='submit' >Actualizar</Button>


      </form>
    </Modal>
  )
}

export default ModalUpdateProduct

// Primero debemos cargar los datos

// Tendréis que pillar el productId por params

// luego tendréis que hacer la lista de products (compo) y esto es igual que con el busacdor