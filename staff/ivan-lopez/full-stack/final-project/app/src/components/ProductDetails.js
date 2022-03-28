import './ProductDetails.sass'
import { useEffect, useState } from 'react'
import { deleteProduct, retrieveProduct } from '../logic'
import { useParams } from 'react-router-dom'
import { Button } from '../components'
import ModalUpdateProduct from './elements/ModalUpdateProduct'


function ProductDetails ({onBack}) {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    const [isShowModal, setIsShowModal] = useState()
    
    useEffect(() => {
        try {
            retrieveProduct(productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [productId])

    
    const toggleModal = () => {
        setIsShowModal(true)
    }

    const closeModal = () => {
        setIsShowModal(false)
    }

    const refreshProduct = (product) => {
        closeModal()

        setProduct(product)
    }

    const onDeleteProduct = event => {
        event.preventDefault()

        try {
            deleteProduct(sessionStorage.token, productId)
                .then(() => onBack())
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }


    return <div className='detail'>
         {isShowModal && <ModalUpdateProduct onClose={closeModal} onProductUpdated={refreshProduct} /> }
        {!!product && <ul>
            <h1>{product.name}</h1>
            <p>{product.id}</p>
            <p>{product.size}</p>
            <p>{product.color}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </ul>}
        <Button className="update-product__button" onClick={toggleModal}>Actualizar Producto</Button>
        <Button className="delete-product__button" onClick={onDeleteProduct}>Eliminar</Button>
    </div>
}

export default ProductDetails

// compos importantes:
// createProduct
// listProducts
// listFavorites
// 
// products results (esperará una prop que será QUERY)
//