// import { retrieveUser } from '../logic'
import './Home.sass'
import { useEffect, useState } from 'react'
import Search from './Search'
import Results from './Results'
import { Routes, Route, useNavigate, Navigate, useSearchParams } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import ModalCreateProduct from './elements/ModalCreateProduct'
import ModalUpdateProduct from './elements/ModalUpdateProduct'


function Home() {

    const navigate = useNavigate()

    useEffect(() => {
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()

    const search = (query, description) => {
        navigate(`search?query=${query}&description=${description}`)
    }
    
    return <div className='home'>
        <nav className='home__header'>
            <h1>Bienvenido a Dreams Factory</h1>
        </nav>


        <Search onSearch={search} />
        {/* <Results /> */}

        {/* <Modal /> */}

        <Routes>
            <Route path='search' element={<Results />} />
            <Route path='/search/:productId' element={<ProductDetails />} />
            <Route path='/cuenta' element={<ModalCreateProduct />} />
            <Route path='/cuenta/update-product' element={<ModalUpdateProduct />} />

        </Routes>


    </div>
}

export default Home