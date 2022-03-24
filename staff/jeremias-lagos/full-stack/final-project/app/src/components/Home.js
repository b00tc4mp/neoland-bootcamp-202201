// import { retrieveUser } from '../logic'
import { useEffect, useState } from 'react'
import Search  from './Search'
import './Home.sass'
import { Button } from "../components"
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Results from './Results'
import { useSearchParams } from 'react-router-dom'
import TournamentDetails from './TournamentDetails'
import { Modal } from './elements'



function Home() {
   

    const navigate = useNavigate()

   

    useEffect(() => {
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()

    const search = (query, location, date) => {
        navigate(`search?query=${query}&location=${location}&date=${date}`)
    }



    return <>
    <div className='home'>
       
       <nav className='home__header'>
           <h1>TOPADDLE</h1>
       </nav>

       

       <Search className='home__search' onSearch={search} />

       <Routes>
           <Route path='search' element={<Results  />} />
           <Route path='/results/:tournamentId' element={<TournamentDetails />} />
       </Routes>
       


   </div>
    </>
}

export default Home