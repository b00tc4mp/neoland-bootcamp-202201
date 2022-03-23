import './ProductDetails.sass'
import { useEffect, useState } from 'react'
import { retrieveProduct } from '../logic'


function ProductDetails ({productId}) {
    
    const [product, setProduct] = useState()

    useEffect(() => {
        try {
            retrieveProduct(sessionStorage.token, productId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    return <>
        {product && <ul>
            <li>{product.name}</li>
            <li>{product.size}</li>
            <li>{product.color}</li>
            <li>{product.price}</li>
            <li>{product.description}</li>
        </ul>}
    </>
}

export default ProductDetails

// compos importantes:
// createProduct
// listProducts
// listFavorites
// 
// products results (esperará una prop que será QUERY)
//