import './Home.css'
import Search from './Search'
import Profile from './Profile'
// import UpdatePassword from './UpdatePassword'
// import DeleteAccount from './DeleteAccount'
import { useState } from 'react'
import { retrieveUser } from '../logic'
import { useEffect } from 'react'

function Home({ token }) {

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')

    const showSearch = () => setView('search')
    const showProfile = () => setView('profile')

    const refreshData = data => setName(data)

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
            <h1 className="home__user">Hola, {name}</h1>
            <div>
                <a className="home__home-link" href="" onClick={event => {
                    event.preventDefault()
                    showSearch()
                }}>Home</a>
                <span> | </span>
                <a className="home__profile-link" href="" onClick={event => {
                    event.preventDefault()
                    showProfile()
                }
                }>Profile</a>
                <span> | </span>
                <a className="home__logout-link" href="">Log out</a>
            </div>
        </nav>
        {view === 'search' && <Search />}
        {view === 'profile' && <Profile token={token} refreshData ={refreshData}/>}
        {/* {view === 'update-password' && <UpdatePassword />}
        {view === 'delete-account' && <DeleteAccount />}  */}
    </div>
}

export default Home