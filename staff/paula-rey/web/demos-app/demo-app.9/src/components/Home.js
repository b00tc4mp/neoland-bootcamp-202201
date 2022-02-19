import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../Logic'
import Logo from './Logo'
import Favs from './Favs'
import Detail from './Detail'

//function Home(props) {
function Home({ token, onLogout }) {
    // const token = props.token
    // const { token } = props

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')
    const [vehicleId, setVehicleId] = useState()
    

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

        showProfile()
    }

    const showProfile = () => setView('profile')

    const showUpdatePassword = () => setView('update-password')

    const showDeleteAccount = () => setView('delete-account')
 
    const goToSearch = event => {
        event.preventDefault()

        showSearch()
    }

    const showSearch = () => setView('search')

    const goToFavs = event => {
        event.preventDefault()

        showFavs()
    }

    const showFavs = () => setView('favs')

    const showDetail = () => setView('detail')

    const goToDetail = (id) => {
        setVehicleId(id)
        showDetail()
    }

    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href=""onClick={goToSearch}><Logo /></a>
            <h1 className="home__user">{name}</h1>
            <a href="" onClick={goToFavs}>Favs</a>
            <a className="home__profile-link" href="" onClick={goToProfile}>Profile</a>
            <button className="home__logout-button" onClick={onLogout}>Logout</button>
        </div>

        {view === 'search' && <Search token={token} />}

        {view === 'profile' && <Profile token={token} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />}

        {view === 'update-password' && <UpdatePassword token={token} onBack={showProfile} />}

        {view === 'delete-account' && <DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />}

        {view === 'favs' && <Favs token={token} onItem={goToDetail} />}

        {view === 'detail' && <Detail token={token} vehicleId={vehicleId} onBack={showFavs} />}

    </div>
}

export default Home