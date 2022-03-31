import { retrieveUser } from '../logic'
import { Profile } from './index'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Home() {
    const [name, setName] = useState()
    const [view, setView] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    })

    return <div>
        <h1>welcome home, {name}!</h1>
    </div>
}

export default Home
