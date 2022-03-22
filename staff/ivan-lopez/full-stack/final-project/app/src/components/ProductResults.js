import './ProductResults.sass'
import { useEffect, useState } from 'react'
import { findProducts } from '../logic'


function ProductResults ({query, description}) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        try {
            findProducts(query, description)
            .then(products => {
                setProducts(products)
            })
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])


    return <>
        {products.length > 0 && <ul>
            <h1>hello products results</h1>
            {products.map(product => <ul key={product.id}>
                
                <li>{product.id}</li>
                <li>{product.name}</li>
                <li>{product.size}</li>
                <li>{product.color}</li>
                <li>{product.price}</li>

            </ul>)}
        </ul>}
    </>
}


export default ProductResults