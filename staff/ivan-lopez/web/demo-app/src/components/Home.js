import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState } from 'react'
import { retrieveUser } from '../logic'
import { useEffect } from 'react'
import Logo from './Logo'


//function Home(props) {
function Home({ token, onLogout }) {
    // const token = props.token
    //const { token } = props

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')

    const showSearch = () => setView('search')
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
            <a className="home__home-link" onClick={ event => {
                event.preventDefault()
                showSearch()
            }}><Logo/></a>
            <h1 className="home__user">{name}</h1>
            <a className="home__profile-link" onClick={ event => {
                event.preventDefault()
                showProfile()
            }
            }>Profile</a>
            <button className="home__logout-button" onClick={ event => {
                event.preventDefault()
                onLogout()
            }}>Logout</button>
        </div>

        {view === 'search' && <Search />}

        {view === 'profile' && <Profile />}

        {view === 'update-password' && <UpdatePassword />}

        {view === 'delete-account' && <DeleteAccount />}
    </div>
}

export default Home