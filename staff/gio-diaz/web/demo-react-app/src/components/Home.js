import { useState, useEffect } from "react"
import { retrieveUser } from "../logic"
import { validateToken } from "../logic/helpers/validators"
import './Home.css'
import Search from './Search'


function Home({ token, onLogout }) {

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')

    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        }
        catch (error) {
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

    const showUpdatePassword = event => {
        event.preventDefault()

        setView('update-Password')
    }

    const showDeleteAccount = event => {
        event.preventDefault()

        setView('delete-account')
    }


    return <div className='home'>
        <div className="home__header">
            <h1 className='home__user'>{name}</h1>
            <a className='home__profile-link' href="" onClick={showProfile}>Profile</a>
            <button className='home__logout-button' onClick={onLogout}>Logout</button>

        </div>


        {view === 'profile' && <h1>profile</h1>}
        {view === 'search' && <Search/>}
        {view === 'update-password' && <h1>UpdatePassword</h1>}
        {view === 'delete-account' && <h1>delete</h1>}

    </div>

}


export default Home