import './Home.sass'
import { useEffect, useState } from 'react'
import Search  from './Search'
import Results from './Results'
import { Routes, Route, useNavigate, Navigate, useSearchParams } from 'react-router-dom'
import CreateGraffiti from './CreateGraffiti'
import Button from './buttons/Button'
import GraffitiList from "./GraffitiList"
import GraffitiDetails from './GraffitiDetails'
import { modifyGraffiti } from '../logic'
import ModifyGraffiti from './ModifyGraffiti'

function Home({onBack}) {
    
    const navigate = useNavigate()
    
    useEffect(() => {
    }, [])

    const [searchParams, setSearchParams] = useSearchParams()

    const search = (query, city, postalCode, style, status, spray, colors) => {
        navigate(`search?query=${query}&city=${city}&postalCode=${postalCode}&style=${style}&status=${status}&spray=${spray}&colors=${colors}`)
    }

    return <div className='home'>
        <nav className='home__header'>
           
            <h1>🥷🏻GRAFFITI MAPS🥷🏼</h1>
            <Button onClick={() => {
                navigate("create-graffiti")
            }}>Create graffiti</Button>
        </nav>

        <Button onClick={() => {
                navigate(`my-graffitis`)
            }}>List Graffitis</Button>
        <Search className='home__search' onSearch={search} />
        <Routes>
            <Route path='my-graffitis' element={<GraffitiList/>} />
            <Route path='search' element={<Results />} />
            <Route path='/update-graffiti/:graffitiId' element={<ModifyGraffiti/>} />
            <Route path='create-graffiti' element={<CreateGraffiti/>} />
            <Route path='/search/:graffitiId' element={< GraffitiDetails onBack={onBack} />} />
        </Routes>
    </div>
}

export default Home