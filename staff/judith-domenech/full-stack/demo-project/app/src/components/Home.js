import { Profile, UpdatePassword, DeleteAccount} from './index'
import { retrieveUser } from '../logic'
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

    const goToProfile = event => {
        event.preventDefault()
        showProfile()
    }

    const showUpdatePassword=() => navigate('profile/update-password')
    const showDeleteAccount = () => navigate('profile/delete-account')
    

    return <div className='home'>
        <nav className='home__header'></nav>
        <a href='' onClick={goToProfile}>Profile</a>
        <h1>welcome home, {name}!</h1>

        <Routes>
            <Route path='profile' element={<Profile  onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />}></Route>
            <Route path='profile/update-password' element={<UpdatePassword onBack={showProfile} />} ></Route>
            <Route path='profile/delete-account' element={<DeleteAccount onBack={showProfile} onDeletedAccount={onLogOut}/>}></Route>
        </Routes>
    </div>
}

export default Home