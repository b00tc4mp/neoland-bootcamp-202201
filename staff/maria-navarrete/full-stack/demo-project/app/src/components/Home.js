
import { Profile, UpdatePassword, DeleteAccount, Notes } from './index'
import { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'

function Home({ onLogOut }) {
    
    const [previousView, setPreviousView] = useState()
    const location = useLocation()
    const navigate = useNavigate()

    const goToProfile = event => {
        event.preventDefault()
        showProfile()
    }
    const showProfile = () => navigate('profile')
    const showUpdatePassword = () => navigate('profile/update-password')
    const showDeleteAccount = () => navigate('profile/delete-account')

    const goToNotes = event => {
        event.preventDefault()
        showNotes()
    }

    const showNotes=()=> navigate('/')

    return <div className="home">
        <nav className="home__header">
            <a href="" onClick={goToNotes}>Home</a>
            <a href="" onClick={goToProfile}>Profile</a>
            <button href="" onClick={onLogOut}>Log out</button>
        </nav>
        

        <Routes>
            <Route index element={<Notes/>}/>
            <Route path="profile" element={<Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} />
            <Route path="profile/update-password" element={<UpdatePassword onBack={showProfile} />} />
            <Route path="profile/delete-account" element={<DeleteAccount onBack={showProfile} onDeletedAccount={onLogOut} />} />
        </Routes>
    </div>
}

export default Home