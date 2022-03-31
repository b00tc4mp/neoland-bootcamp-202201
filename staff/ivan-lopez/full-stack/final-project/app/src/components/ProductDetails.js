import './ProductDetails.sass'
import { useEffect, useState } from 'react'
import { deleteProduct, retrieveProduct, retrieveUser } from '../logic'
import { useParams } from 'react-router-dom'
import { Button } from '../components'
import ModalUpdateProduct from './elements/ModalUpdateProduct'

function ProductDetails ({onBack}) {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    const [isShowModal, setIsShowModal] = useState()
    const [role, setRole] = useState()
    
    useEffect(() => {
        try {
            retrieveProduct(productId)
            .then(product => {
                setProduct(product)
                    retrieveUser(sessionStorage.token)
                    .then(({ role }) => {
                        setRole(role)
                    })
                    .catch(error => alert(error.message))
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
                .then(() => {
                    alert('¡Producto eliminado!')   
                    onBack()
                })
                
                .catch(error => {
                    alert(error.message)
                })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className='detail'>
        {isShowModal && <ModalUpdateProduct onClose={closeModal} onProductUpdated={refreshProduct} /> }
        {product && <div className='cards-wrapper-detail'>
                <div className='cards-wrapper__big-cards-wrapper-detail'>
                    <div className='cards-wrapper__image-wrapper-detail'>
                    <img alt='Imagen del producto' className='image-detail' src={`${product.image}`} />
                    </div>
                    <div className='card-wrapper__attributes-wrapper-detail'>
                        <div className='card-wrapper__attributes-wrapper-detail-flex'>
                            <div className='card-wrapper__attribute-wrapper-detail-titles'>
                                <p className='card-wrapper__attribute-wrapper__title-detail'>Producto:</p>
                                <p className='card-wrapper__attribute-wrapper__title-detail product-id-mobile'>ID producto:</p>
                                <p className='card-wrapper__attribute-wrapper__title-detail'>Talla:</p>
                                <p className='card-wrapper__attribute-wrapper__title-detail'>Color:</p>
                                <p className='card-wrapper__attribute-wrapper__title-detail'>Descripción:</p>
                            </div>
                            <div className='card-wrapper__attribute-wrapper-detail-attributes'>
                                <p className='card-wrapper__attribute-wrapper__attribute-detail'>{product.name}</p>
                                <p className='card-wrapper__attribute-wrapper__attribute-detail product-id-mobile'>{productId}</p>
                                <p className='card-wrapper__attribute-wrapper__attribute-detail'>{product.size}</p>
                                <p className='card-wrapper__attribute-wrapper__attribute-detail'>{product.color}</p>
                                <p className='card-wrapper__attribute-wrapper__attribute-detail description-mobile'>{product.description}</p>
                            </div>
                        </div>
                        {role === 'admin' && <div className='card-wrapper__buttons-wrapper'>
                            <div className='card-wrapper__button-wrapper'>
                                <Button className="detail-product__button" onClick={toggleModal}>Actualizar</Button>
                            </div>
                            <div className='card-wrapper__button-wrapper'>
                                <Button className="detail-product__button" onClick={onDeleteProduct}>Eliminar</Button>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        }
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