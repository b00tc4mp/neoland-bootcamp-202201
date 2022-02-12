import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState } from 'react'
import { retrieveUser } from '../logic'
import { useEffect } from 'react'




function Home({ token, onLogout }) {
    

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')


    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const showProfile = event => {
        event.preventDefault()

        setView('profile')
    }




    const showUpdatePassword = () => {
        setView('update-password')

    
    }

    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href=""><img className="home__logo" src="images/demo-logo.png" alt="" /></a>
            <h1 className="home__user">{name}</h1>
            <a className="home__profile-link" href="" onClick={showProfile}>Profile</a>
        
        </div>
            <button className="home__logout-button" onClick={ event =>{
                event.preventDefault()
                onLogout()
                }}>Logout</button>

        {view === 'search' && <Search />}

        {view === 'profile' && <Profile token={token} onUpdatePassword={showUpdatePassword} />}

        {view === 'update-password' && <UpdatePassword />}

        {view === 'delete-account' && <DeleteAccount />}

        
    </div>
}

export default Home