import './Home.sass'
import { useEffect, useState } from 'react'
import Search  from './Search'
import Results from './Results'
import { Routes, Route, useNavigate, Navigate, useSearchParams } from 'react-router-dom'
import GraffitiDetails from './GraffitiDetails'

function Home() {
    
    const navigate = useNavigate()

    useEffect(() => {
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()

    const search = (query, city, postalCode, style, status, spray, colors) => {
        navigate(`search?query=${query}&city=${city}&postalCode=${postalCode}&style=${style}&status=${status}&spray=${spray}&colors=${colors}`)
    }


    return <div className='home'>
        <nav className='home__header'>
           
            <h1>HOME</h1>
        </nav>

        <Search className='home__search' onSearch={search} />
        <Routes>
        <Route path='search' element={<Results />} />
        <Route path='/search/:graffitiId' element={< GraffitiDetails />} />

        </Routes>
    </div>
}

export default Home