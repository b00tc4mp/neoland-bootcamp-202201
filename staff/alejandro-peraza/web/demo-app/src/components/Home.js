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
import Order from './Order'
import Orders from './Orders'
import { Routes, Route, useNavigate, useSearchParams, useLocation } from 'react-router-dom'

function Home({ token, onLogout }) {

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')
    const [vehicleId, setVehicleId] = useState()
    const [previousView, setPreviousView] = useState()
    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams()
    const q =search.get('q')
    const [query, setQuery] = useState()
    const [orderId, setOrderId] = useState(q)
    const location = useLocation()

    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }, [])
    
    const showProfile = () =>
    // setView('profile')
    navigate('profile')
    
    const showSearch = () =>
    // setView('search')
    navigate(!query? '/' : `search?q=${query}`)
    
    const showUpdatePassword = () =>
    // setView("update-password")
    navigate('profile/update-password')
    
    const showDeleteAccount = () =>
    // setView('delete-account')
        navigate('profile/delete-account')

    const showFavs = () =>
    // setView('favs')
        navigate('favs')

    const showDetails = id =>
    // setView('details')
        navigate(`vehicles/${id}`)

    const goBackFromDetails = () =>
    // setView(previousView)
        navigate(previousView || '/')

    const showCart = () =>
    // setView('cart')
        navigate('cart')

    const showOrder = () =>
    //  setView('order')
        navigate('order')

    const showOrders = () =>

        navigate('orders')

//go to     

    
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

    const goToDetails = id => {
        
        setVehicleId(id)

        // setPreviousView(view)
        setPreviousView(`${location.pathname}${location.search? location.search: ''}`)
        showDetails(id)
    }

    const goToCart = event => {
        event.preventDefault()

        showCart()
    }

    const goToOrder = id => {
        setOrderId(id)
        showOrder()
    }

    const goToOrders = event => {
        event.preventDefault()
        showOrders()
    }

    const doSearch = query => {
        
        setQuery(query)

        navigate(`search?q=${query}`)
    }

    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" onClick={goToSearch} title="search"><img className="home__logo" src="/images/demo-logo.png" alt="" /></a>
            <a className={`home__menu-link ${view === 'profile'? 'home__menu-link--active' :''}`} onClick={goToProfile} title="profile">{name}</a>
            <a className={`home__menu-link ${view === 'favs'? 'home__menu-link--active' :''}`} onClick={goToFavs}>Favs</a>
            <a className={`home__menu-link ${view === 'cart'? 'home__menu-link--active' :''}`} onClick={goToCart}>Cart</a>
            <a className={`home__menu-link ${view === 'orders'? 'home__menu-link--active' :''}`} onClick={goToOrders}>Orders</a>
            <button className="home__logout-button" onClick={onLogout}>Logout</button>
        </div>


        <Routes>
            <Route index element={<Search token={token} onItem={goToDetails} onQuery={doSearch} query={query} />} />
            <Route path="search" element={<Search token={token} onItem={goToDetails} onQuery={doSearch} query={query} />} />
            <Route path="favs" element={<Favs token={token} onItem={goToDetails} />} />
            <Route path="cart" element={<Cart token={token} onItem={goToDetails} onOrder={goToOrder} />} />
            <Route path="profile" element={<Profile token={token} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} />
            <Route path="profile/update-password" element={<UpdatePassword token={token} onBack={showProfile} />} />
            <Route path="profile/delete-account" element={<DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />} />
            <Route path="vehicles/:vehicleId" element={<Details token={token} onBack={goBackFromDetails} />} />
            <Route path="order" element={<Order token={token} orderId={orderId} onItem={goToDetails} />} />
            <Route path="orders" element={<Orders token={token} onOrder={goToOrder} />} />
            {/* <Route path="" element={<Navigate replace to="/" />} /> */}
        </Routes>
    </div>

}

export default Home