import './ProductDetails.sass'
import { useEffect, useState } from 'react'
import { retrieveProduct } from '../logic'
import { useParams } from 'react-router-dom'
import { Button } from '../components'
import ModalUpdateProduct from './elements/ModalUpdateProduct'


function ProductDetails (onClose, saveProduct) {
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

    const updatedProduct = (_product) => {
        if(product !== _product){
            window.location.reload(true)
        }
        // setProduct(_product)
        closeModal()
    }

    return <div className='detail'>
         {isShowModal && <ModalUpdateProduct onClose={closeModal} saveProduct={updatedProduct} /> }
        {!!product && <ul>
            <h1>{product.name}</h1>
            <p>{product.id}</p>
            <p>{product.size}</p>
            <p>{product.color}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </ul>}
        <Button onClick={toggleModal}>Actualizar Producto</Button>
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