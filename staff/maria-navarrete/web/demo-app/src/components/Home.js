import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState } from 'react'
import { retrieveUser } from '../logic'
import { useEffect } from 'react'
import Favs from './Favs'

function Home({ token, onLogout }) {

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')

    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => setName(user.name))
        } catch ({message}) {
            alert(message)
        }
    }, [])

    const goToSearch = event => {
        event.preventDefault()
        showSearch()
    }

    const goToProfile = event =>{
        event.preventDefault()
        showProfile()
    } 

    const goToFavs = event => {
        event.preventDefault()
        showFavs()
    }

    const showUpdatePassword = () => setView('update-password')
    const showProfile = () => setView('profile')
    const showDeleteAccount = () => setView('delete-account')
    const showSearch = () => setView('search') 
    const showFavs = () => setView('favs') 
    
    const refreshData = data => setName(data)


    return <div className="home">
        <nav className="home__header">
            <h1 className="home__user">Hola, {name}</h1>
            <div>
                <a className="home__home-link" href="" onClick={goToSearch}>Home</a>
                <span> | </span>
                <a className="home__favs-link" href="" onClick={goToFavs}>Favs</a>
                <span> | </span>
                <a className="home__profile-link" href="" onClick={goToProfile}>Profile</a>
                <span> | </span>
                <a className="home__logout-link" href="">Log out</a>
            </div>
        </nav>
        {view === 'search' && <Search token ={token} />}
        {view === 'profile' && <Profile token={token} refreshData={refreshData} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount}/>}
        {view === 'update-password' && <UpdatePassword token={token} onBack={showProfile}/>}
        {view === 'delete-account' && <DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout}/>}
        {view === 'favs' && <Favs token={token}/>}
    </div>
}

export default Home