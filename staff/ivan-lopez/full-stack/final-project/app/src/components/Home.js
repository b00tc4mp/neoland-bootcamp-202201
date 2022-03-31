// import { retrieveUser } from '../logic'
import './Home.sass'
import Search from './Search'
import Results from './Results'
import { Routes, Route, useNavigate } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import ModalCreateProduct from './elements/ModalCreateProduct'
import ModalUpdateProduct from './elements/ModalUpdateProduct'


function Home({onBack}) {
    const navigate = useNavigate()
    const search = (query) => {
        navigate(`search?q=${query}`)
    }
    
    return <div className='home'>

        <Search onSearch={search} />

        <Routes>
            <Route path='/search' element={<Results />} />
            <Route path='/search/:productId' element={<ProductDetails onBack={onBack} />} />
            <Route path='/cuenta' element={<ModalCreateProduct />} />
            <Route path='/cuenta/update-product' element={<ModalUpdateProduct />} />
        </Routes>
    </div>
}

export default Home