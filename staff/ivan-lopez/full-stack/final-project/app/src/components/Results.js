import './Results.sass'
import { useEffect, useState } from 'react'
import { findProducts } from '../logic'
import { useSearchParams, useNavigate } from 'react-router-dom'


// http://localhost:3000/?query=pulsera&description=cuero

function Results () {
    
    const [products, setProducts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('q')

    const navigate = useNavigate();

    useEffect(() => {
        try {
            findProducts(query)
            .then(products => {
                setProducts(products)
            })
            .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [query])


    return <div>
        {products.length && <div>
            {products.map(product => <ul key={product.id} onClick={() => {
                navigate(`/search/${product.id}`)
            }}>
                <p>{product.name}</p>
                <p>{product.price}</p>
            </ul>)}
        </div>}
    </div>
}


export default Results