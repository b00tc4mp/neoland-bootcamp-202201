import { useEffect, useState } from 'react'
import Search  from './Search'
import './Home.sass'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Results from './Results'
import { useSearchParams } from 'react-router-dom'
import TournamentDetails from './TournamentDetails'
import { Modal } from './elements'
import ModalCreateTournament from './elements/ModalCreateTournament'
import ModalUpdateTournament from './elements/ModalUpdateTournament'
import TournamentList from './TournamentList'




function Home({onBack}) {
   

    const navigate = useNavigate()

   

    useEffect(() => {
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()

    const search = (query, location, date) => {
        navigate(`search?query=${query}&location=${location}&date=${date}`)
    }

    return <>
    <div className='home'>
       
       <div className='home__header'>
       </div>
       <Search className='home__search' onSearch={search} />
   </div>
       <Routes>
           <Route path='search' element={<Results  />} />
           <Route path='/results/:tournamentId' element={<TournamentDetails onBack={onBack} />} />
          
       </Routes>
    </>
}

export default Home