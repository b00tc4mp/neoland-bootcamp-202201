import './Results.sass'
import { useEffect, useState } from 'react'
import { findProducts } from '../logic'
import { useSearchParams, useNavigate } from 'react-router-dom'
//import noImage from '../../src/assets/images/unkown-image.png'


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


    return <div className='cards-wrapper'>
            {products.length && <div className='cards-wrapper'>
                {products.map(product => <div className='cards-wrapper__small-cards-wrapper' key={product.id} onClick={() => {
                        navigate(`/search/${product.id}`)
                    }}>
                    <div className='cards-wrapper__image-wrapper'>
                    <img className='image' src={`${product.image}`} />
                    </div>
                    <div className='card-wrapper__attributes-wrapper'>
                        <div className='card-wrapper__attribute-wrapper'>
                            <p className='card-wrapper__attribute-wrapper__title'>Producto:</p>
                            <p className='card-wrapper__attribute-wrapper__attribute'>{product.name}</p>
                        </div>
                        <div className='card-wrapper__attribute-wrapper'>
                            <p className='card-wrapper__attribute-wrapper__title'>Precio:</p>
                            <p className='card-wrapper__attribute-wrapper__attribute'>{product.price}€</p>
                        </div>
                    </div>
                </div>)}
            </div>}
        </div>
}





export default Results