import { retrieveUser } from '../logic'
import { Profile, UpdatePassword, DeleteAccount } from './index'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function Home({onLogOut}) {
    const [name, setName] = useState()
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
    const showUpdatePassword = () => navigate('profile/update-password')
    const showDeleteAccount = () => navigate('profile/delete-account')

    const goToProfile = event => {
        event.preventDefault()
        showProfile()
    }

    return <div className="home">
        <nav className="home__header">
            <a href="" onClick={goToProfile}>Profile</a>
        </nav>
        <h1>welcome home, {name}!</h1>

        <Routes>
            <Route path="profile" element={<Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} />
            <Route path="profile/update-password" element={<UpdatePassword onBack={showProfile}/>}/>
            <Route path="profile/delete-account" element={<DeleteAccount onBack={showProfile} onDeletedAccount={onLogOut}/>}/>
        </Routes>
    </div>
}

export default Home