import './Results.sass'
import { useEffect, useState } from 'react'
import { findProducts } from '../logic'
import { useSearchParams } from 'react-router-dom'

// http://localhost:3000/?query=pulsera&description=cuero

function Results () {
// function ProductResults (/*{query, description}*/) {
    
    const [products, setProducts] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('q')


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


    return <>
        {products.length > 0 && <ul>
            <h1>hello products results</h1>
            {products.map(product => <ul key={product.id}>
                
                <li>{product.id}</li>
                <li>{product.name}</li>
                <li>{product.size}</li>
                <li>{product.color}</li>
                <li>{product.price}</li>
                <li>{product.description}</li>
            </ul>)}
        </ul>}
    </>
}


export default Results