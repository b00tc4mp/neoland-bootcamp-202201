import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState } from 'react'
import { useEffect } from 'react'
import { retrieveUser } from '../logic'
import Landing from './Landing'


function Home({ token, showLanding }) {

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')


    const showProfile = () => setView('profile')

    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href=""><img className="home__logo" src="images/demo-logo.png" alt="" /></a>
            <h1 className="home__user">{name}</h1>
            <a className="home__profile-link" href="" onClick={event => {
                event.preventDefault()
                
                showProfile()
            }}>Profile</a>
            <button className="home__logout-button" onClick={event => {
                event.preventDefault()

            }}>Logout</button>
        
        </div>

        {view === 'search' && <Search />}

        {view === 'profile' && <Profile token={token} />}

        {view === 'update-password' && <UpdatePassword />}

        {view === 'delete-account' && <DeleteAccount />}
    </div>
}

export default Home