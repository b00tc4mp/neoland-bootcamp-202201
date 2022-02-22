//version refactorizada
import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../Logic'
import Logo from './Logo'
import Favs from './Favs'
import Details from './Details'
import Cart from './Cart'
import Order from './Order'
//import Orders from './Orders'

function Home({ token, onLogout }) {
    
    const [view, setView] = useState('search')
    const [name, setName] = useState('name')
    const [vehicleId, setVehicleId] = useState()
    const [query, setQuery] = useState()
    const [previousView, setPreviousView] = useState()
    const [orderId, setOrderId] = useState()
    
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
    const showFavs = () => setView('favs')
    const showDetails = () => setView('detail')
    const showCart = () => setView('cart')
    const showOrder = () => setView('order')
    //const showOrders = () => setView('orders')

    const goToProfile = event => {
        event.preventDefault()

        showProfile()
    }
 
    const goToSearch = event => {
        event.preventDefault()

        showSearch()
    }

    const goToFavs = event => {
        event.preventDefault()

        showFavs()
    }
    
    const goToDetails = (id) => {
        setVehicleId(id)
        setPreviousView(view)
        showDetails()
    }
    
    const goBackFromDetail = () => setView(previousView)


    const goToCart = event => {
        event.preventDefault()

        showCart()
    }

    const goToOrder = id => {
        setOrderId(id)
        showOrder()
    }

    // const goToOrders = event => {
    //     event.preventDefault()
    //     showOrders()
    // }

    


    return <div className="home">
        
        <nav className="home__header">
            <a className="home__home-link" href=""onClick={goToSearch} title="search"><Logo /></a>
            <a className={`home__menu-link ${view === 'profile'? 'home__menu-link--active' :''}`} href="" onClick={goToProfile} title="profile">{name}</a>
            <a className={`home__menu-link ${view === 'favs'? 'home__menu-link--active' :''}`} href="" onClick={goToFavs}>Favs</a>
            <a className={`home__menu-link ${view === 'cart'? 'home__menu-link--active' :''}`} href="" onClick={goToCart}>Cart</a>
            {/* <a className={`home__menu-link ${view === 'orders'? 'home__menu-link--active' :''}`} href="" onClick={goToOrders}>Orders</a> */}
            
            <button className="home__logout-button" onClick={onLogout}>Logout</button>
        </nav>

        {view === 'search' && <Search token={token} onItem={goToDetails} onQuery={setQuery} query={query} />}

        {view === 'profile' && <Profile token={token} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />}

        {view === 'update-password' && <UpdatePassword token={token} onBack={showProfile} />}

        {view === 'delete-account' && <DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />}

        {view === 'favs' && <Favs token={token} onItem={goToDetails} />}

        {view === 'details' && <Details token={token} vehicleId={vehicleId} onBack={goBackFromDetail} />}

        {view === 'cart' && <Cart token={token} onItem={goToDetails} onOrder={goToOrder} />}

        {view === 'order' && <Order token={token} orderId={orderId} onItem={goToDetails} />}

        {/* {view === 'orders' && <Orders token={token} onOrderDetails={goToOrderDetails}/>}  */}

    </div>
}

export default Home
