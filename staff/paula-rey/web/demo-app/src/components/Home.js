import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../Logic'
import Logo from './Logo'
import Landing from './Landing'

//function Home(props) {
function Home({ token, onLanding }) {
    // const token = props.token
    // const { token } = props

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

    const showSearch = event => {
        event.preventDefault()

        setView('search')
    }

    const showUpdatePassword = () => {
        setView('update-password')
    }

    const showDeleteAccount = () => {
        setView('delete-account')
    }

    const showLanding = () => {
        onLanding()
    }

    const showDetail = () => {
        setView('detail')
    }


    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href=""onClick={showSearch}><Logo /></a>
            <h1 className="home__user">{name}</h1>
            <a className="home__profile-link" href="" onClick={showProfile}>Profile</a>
            <button className="home__logout-button" onClick={showLanding}>Logout</button>
        </div>

        
        {view === 'search' && <Search /> }
        {view === 'profile' && <Profile token={token} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} 
        {view === 'landing' && <Landing />}
        {view === 'update-password' && <UpdatePassword token={token} onProfile={showProfile} />}
        {view === 'delete-account' && <DeleteAccount token={token} onProfile={showProfile} onLanding={showLanding} />}


    </div>
}

export default Home