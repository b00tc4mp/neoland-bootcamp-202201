import './ProductDetails.sass'
import { useEffect, useState } from 'react'
import { retrieveProduct } from '../logic'
import { useParams } from 'react-router-dom'


function ProductDetails () {
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    
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

    return <div className='detail'>
        {!!product && <ul>
            <h1>{product.name}</h1>
            <p>{product.id}</p>
            <p>{product.size}</p>
            <p>{product.color}</p>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </ul>}
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