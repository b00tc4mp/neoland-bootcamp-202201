import './Home.css'
// import Profile from './Profile'
// import UpdatePassword from './UpdatePassword'
// import DeleteAccount from './DeleteAccount'
// import Search from './Search'

import { useState } from 'react'
import { retrieveUser } from '../logic'
import { useEffect } from 'react'

function Home({ token }) {

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

    return <div className="home">
        <nav className="home__header">
            <a className="home__home-link" href="">Home</a>
            <span> | </span>
            <a className="home__profile-link" href="">Profile</a>
            <span> | </span>
            <a className="home__logout-link" href="">Log out</a>
        </nav>

        <h1 className="home__user">Hola, {name}</h1>

        {/* {view === 'search' && <Search />}
        {view === 'profile' && <Profile />}
        {view === 'update-password' && <UpdatePassword />}
        {view === 'delete-account' && <DeleteAccount />} */}
    </div>
}

export default Home