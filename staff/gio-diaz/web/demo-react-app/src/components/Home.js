import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState } from 'react'
import { retrieveUser } from '../logic'
import { useEffect } from 'react'
import Favs from './Favs'
import Detail from './Detail'
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
        } catch (error) {
            alert(error.message)
        }
    }, [])

     const showProfile = () => setView('profile')
    const showUpdatePassword = () => setView('update-password')
    const showDeleteAccount = () => setView('delete-account')
    const showSearch = () => setView('search')
    const showDetail = () => setView('detail')
    const showFavs = () => setView('favs')
    const goBackFronDetail = () => setView(previousView)
    const showCart = () => setView('cart')
    
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

    const goToDetail = id => {
        setVehicleId(id)
        setPreviousView(view)
        showDetail()
    }

    const goToCart = event => {
        event.preventDefault()

        showCart()
    }


    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href="" onClick={goToSearch}><img className="home__logo" src="images/demo-logo.jpg" alt="" /></a>
            <a className={`home__menu-link ${view === 'profile'? 'home__menu-link--active' :''}`} href='' onClick={goToProfile} tittle='profile'>Hola {name}</a>
            <a className={`home__menu-link ${view === 'favs'? 'home__menu-link--active' :''}`} href='' onClick={goToFavs} tittle='profile'>Favs</a>
            <a className={`home__menu-link ${view === 'cart'? 'home__menu-link--active' :''}`} href='' onClick={goToCart} tittle='profile'>Cart</a>
            <button className="home__logout-button" onClick={onLogout}>Logout</button>
        </div>

        {view === 'search' && <Search token={token} />}

        {view === 'profile' && <Profile token={token} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />}

        {view === 'update-password' && <UpdatePassword token={token} onBack={showProfile} />}

        {view === 'delete-account' && <DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />}

        {view === 'favs' && <Favs token={token} onItem={goToDetail}/>}

        {view === 'detail' && <Detail token={token} vehicleId={vehicleId} onBack={goBackFronDetail} />}

        {view === 'cart' && <Cart token={token} onItem ={goToDetail} />}

    </div>
}

export default Home