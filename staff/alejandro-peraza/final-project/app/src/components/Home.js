import './Home.sass'
import { retrieveUser } from '../logic'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Search from './Search'
import Results from './Results'
import { useSearchParams } from 'react-router-dom'

function Home({ onLogOut }) {
    const [name, setName] = useState()

    const navigate = useNavigate()
    
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    })

    const search = (type, query) => {
        navigate(`search?type=${type}&query=${query}`)
    }

    return <div className="home">
        <nav className="home__header">
            <button href="" onClick={onLogOut}>Log out</button>
        </nav>
        <h1>welcome home, {name}!</h1>
        <Search onSearch={search} />

        <Routes>
            <Route path="search" element={<Results />} />
            
        </Routes>
    </div>
    }

    export default Home