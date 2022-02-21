import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'
import Logo from './Logo'
import Landing from './Landing'
import Favs from './Favs'
import Detail from './Detail'
import Cart from './Cart'  
import Orders from './Order'
import Order from './Orders'


function Home({ token, onLogout, }) {
    // const token = props.token
    //const { token } = props
   
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

    const showDetails= () => setView('details')

    const goBackFromDetail = () => setView(previousView)

    const goToDetail = (id) => {
        setVehicleId(id)

        setPreviousView(view)
        
        showDetails()
    }

    const goToCart = event => {
        event.preventDefault()

        showCart()
    }

    const showCart = () => setView('cart')


    const goToOrder = id => {
        setOrderId(id)
        showOrder()
    }

    const showOrder = () => setView('order')

    const goToOrders = event =>{
        event.preventDefault()

        showOrders()
    }

    const showOrders = () => setView('orders')

    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href="" onClick={goToSearch} title="search" ><Logo/></a>
            <a className={`home__profile-link ${view === 'cart'? 'home__menu-link--active' :''}`} href="" onClick={goToProfile} title="profile"> 👤 {name}</a>
            <a className={`home__profile-link ${view === 'cart'? 'home__menu-link--active' :''}`} href="" onClick={goToFavs}> ♥️ Favs</a>
            <a className={`home__profile-link${view === 'cart'? 'home__menu-link--active' :''}`} href=''  onClick={goToCart}> 🛒 Cart</a>
            <a className={`home__profile-link ${view === 'cart'? 'home__menu-link--active' :''}`} href=''  onClick={goToOrders}> 🛍 Orders</a>
            <button className="home__logout-button" onClick={onLogout}> Logout</button>
        </div>

        {view === 'search' && <Search token={token} onItem={goToDetail} onQuery={setQuery} query={query} />}

        {view === 'profile' && <Profile  token={token} onUpdatePassword={showUpdatePassword} onDeletedAccount={showDeleteAccount}/>}

        {view === 'landing' && <Landing />}

        {view === 'update-password' && <UpdatePassword token={token} onBack={showProfile} />}

        {view === 'delete-account' && <DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout}/>}
   
        {view === 'favs' && <Favs token={token} onItem={goToDetail}/>}

        {view === 'details' && <Detail  token={token} vehicleId={vehicleId} onBack={goBackFromDetail} />}
      
        {view === 'cart' && <Cart token={token} onItem={goToDetail} />}

        {view === 'order' && <Order token={token} onOrder={goToOrder}/>} 

        {view === 'orders' && <Orders token={token} orderId={orderId} onItem={goToDetail}/>}

    </div>
}

export default Home