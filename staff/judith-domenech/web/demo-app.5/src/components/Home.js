import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'
import Logo from './Logo'
import Landing from './Landing'


//function Home(props) {
function Home({ token, showLanding }) {
    // const token = props.token
    //const { token } = props
   
    const [view, setView] = useState('search')
    const [name, setName] = useState('name')
    

    const showProfile= () => setView('profile')
    const showSearch = () => setView('search')

   
    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const goToProfile = event => {
        event.preventDefault()

        showSearch()
    }

    const ToProfile = event => {
        event.preventDefault()

        showProfile()
    }

    const goToLanding = event  => {
        event.preventDefault()

        showLanding()
    }

    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href="" onClick = {goToProfile}><Logo/></a>
            <h1 className="home__user">{name}</h1>
            <a className="home__profile-link" href="" onClick = {ToProfile}> Profile</a>
            <button className="home__logout-button" onClick={goToLanding}> Logout</button>
        </div>

        {view === 'search' && <Search />}

        {view === 'profile' && <Profile  token={token}/>}

        {view === 'landing' && <Landing />}

        {view === 'update-password' && <UpdatePassword />}

        {view === 'delete-account' && <DeleteAccount />}
    </div>
}

export default Home