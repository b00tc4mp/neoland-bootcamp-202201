// import { retrieveUser } from '../logic'
import './Home.sass'
import { useEffect, useState } from 'react'
import Search from './Search'
import Results from './Results'
import { Routes, Route, useNavigate, Navigate, useSearchParams } from 'react-router-dom'


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

        <Search className='home__search' onSearch={search} />
        
        <Routes>
            <Route path='search' element={<Results />} />
        </Routes>
    </div>
}

export default Home