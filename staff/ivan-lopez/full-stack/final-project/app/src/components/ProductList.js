import './ProductList.sass'
import { useEffect, useState } from 'react'
import { findProducts } from '../logic'
import { useNavigate } from 'react-router-dom'

// http://localhost:3000/?query=pulsera&description=cuero

function ProductList() {

    const [products, setProducts] = useState([])

    const navigate = useNavigate();

    useEffect(() => {

        try {
            findProducts()
                .then(products => {
                    setProducts(products)
                })
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    
    return <div>
        {products.length > 0 && <div>
            {products.map(product => <ul key={product.id} onClick={() => {
                navigate(`/search/${product.id}`)
            }}>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </ul>)}
        </div>}
    </div>
}

export default ProductList