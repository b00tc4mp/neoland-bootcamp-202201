import { retrieveUser, deleteUser } from '../logic'
import { Profile } from './index'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Home() {
    const [name, setName] = useState()
    const [view, setView] = useState()
    const [view, setPassword] = useState()
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

    const showProfile = () => navigate('profile')

    const goToProfile = event => {
        event.preventDefault()
        showProfile()
    }

    useState(() => {
        try {
            deleteUser(sessionStorage.token)
            .then()
        }
    })

    return <div className="home">
        <nav className="home__header">
            <a href="" onClick={goToProfile}>Profile</a>
        </nav>
        <h1>welcome home, {name}!</h1>

        <Routes>
            <Route path="profile" element={<Profile/>} />
        </Routes>
    </div>
}

export default Home