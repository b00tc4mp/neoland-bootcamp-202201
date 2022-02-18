import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import Details from './Details'
import { useState } from 'react'
import { retrieveUser } from '../logic'
import { useEffect } from 'react'
import Favs from './Favs'
import Cart from './Cart'

function Home({ token, onLogout }) {

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')
    const [vehicleId, setVehicleId] = useState()
    const [query, setQuery] = useState()
    const [previousView, setPreviousView] = useState()

    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch ({ message }) {
            alert(message)
        }
    }, [])

    const showUpdatePassword = () => setView('update-password')
    const showProfile = () => setView('profile')
    const showDeleteAccount = () => setView('delete-account')
    const showSearch = () => setView('search')
    const showFavs = () => setView('favs')
    const showDetails = () => setView('details')
    const showCart = () => setView('cart')
    const goBackFromDetail = () => setView(previousView)

    const goToSearch = event => {
        event.preventDefault()
        showSearch()
    }

    const goToProfile = event => {
        event.preventDefault()
        showProfile()
    }

    const goToFavs = event => {
        event.preventDefault()
        showFavs()
    }

    const goToDetails = id => {
        setVehicleId(id)
        setPreviousView(view)
        showDetails()
    }

    const goToCart = event => {
        event.preventDefault()
        showCart()
    }

    const refreshData = data => setName(data)


    return <div className="home">
        <nav className="home__header">
            <a className={`home__menu-link ${view === 'search' ? 'home__menu-link--active' : ''}`} href="" onClick={goToSearch} title="Search">Home</a>
            <span> | </span>
            <a className={`home__menu-link ${view === 'profile' ? 'home__menu-link--active' : ''}`} href="" onClick={goToProfile} title="Profile">{name}</a>
            <span> | </span>
            <a className={`home__menu-link ${view === 'favs' ? 'home__menu-link--active' : ''}`} href="" onClick={goToFavs}>Favs</a>
            <span> | </span>
            <a className={`home__menu-link ${view === 'cart' ? 'home__menu-link--active' : ''}`} href="" onClick={goToCart}>Cart</a>
            <span> | </span>
            <button className="home__logout-link" href="">Log out</button>
        </nav>
        {view === 'search' && <Search token={token} onItem={goToDetails} onQuery={setQuery} query={query} />}
        {view === 'profile' && <Profile token={token} refreshData={refreshData} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />}
        {view === 'update-password' && <UpdatePassword token={token} onBack={showProfile} />}
        {view === 'delete-account' && <DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />}
        {view === 'favs' && <Favs token={token} onItem={goToDetails} />}
        {view === 'details' && <Details token={token} vehicleId={vehicleId} onBack={goBackFromDetail} />}
        {view === 'cart' && <Cart token={token} onItem={goToDetails} />}
    </div>
}

export default Home