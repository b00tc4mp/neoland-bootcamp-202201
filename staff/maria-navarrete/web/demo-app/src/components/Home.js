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

function Home({ token, onLogout, onToggleTheme }) {

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')
    const [vehicleId, setVehicleId] = useState()
    const [previousView, setPreviousView] = useState()
    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams()
    const q = search.get('q')
    const [query, setQuery] = useState(q)
    const [orderId, setOrderId] = useState()
    const location = useLocation()
    const [themeState, setThemeState] = useState('🌚')

    useEffect(() => {
        try {
            retrieveUser(token)
                .then(user => setName(user.name))
                .catch(error => { throw error })
        } catch ({ message }) {
            alert(message)
        }
    }, [])

    const goToProfile = event => {
        event.preventDefault()
        showProfile()
    }
    const showProfile = () => navigate('profile')

    const showUpdatePassword = () => navigate('profile/update-password')

    const showDeleteAccount = () => navigate('profile/delete-account')

    const goToSearch = event => {
        event.preventDefault()
        showSearch()
    }
    const showSearch = () => navigate(!query ? '/' : `search?q=${query}`)

    const goToFavs = event => {
        event.preventDefault()
        showFavs()
    }
    const showFavs = () => navigate('favs')

    const goToDetails = id => {
        setVehicleId(id)
        setPreviousView(`${location.pathname}${location.search ? location.search : ''}`)
        showDetails(id)
    }
    const showDetails = id => navigate(`vehicles/${id}`)

    const goBackFromDetail = () => navigate(previousView || '/')

    const goToCart = event => {
        event.preventDefault()
        showCart()
    }
    const showCart = () => navigate('cart')


    const goToOrder = id => {
        setOrderId(id)
        showOrder()
    }
    const showOrder = () => navigate('order')

    const goToOrders = event => {
        event.preventDefault()
        showOrders()
    }
    const showOrders = () => navigate('orders')

    const doSearch = query => {
        setQuery(query)
        navigate(`search?q=${query}`)
    }

    const toggleTheme = () => {
        setThemeState(themeState === '🌚' ? '🌝' : '🌚')
        onToggleTheme()
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
            <a className={`home__menu-link ${view === 'orders' ? 'home__menu-link--active' : ''}`} href="" onClick={goToOrders}>Orders</a>
            <span> | </span>
            <button className="home__button" href="" onClick={onLogout}>Log out</button>
            <button className="home__button" href="" onClick={toggleTheme}>{themeState}</button>
        </nav>

        <Routes>
            <Route index element={<Search token={token} onItem={goToDetails} onQuery={doSearch} query={query} />} />
            <Route path="search" element={<Search token={token} onItem={goToDetails} onQuery={doSearch} query={query} />} />
            <Route path="favs" element={<Favs token={token} onItem={goToDetails} />} />
            <Route path="cart" element={<Cart token={token} onItem={goToDetails} onOrder={goToOrder} />} />
            <Route path="profile" element={<Profile token={token} refreshData={refreshData} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} />
            <Route path="profile/update-password" element={<UpdatePassword token={token} onBack={showProfile} />} />
            <Route path="profile/delete-account" element={<DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />} />
            <Route path="vehicles/:vehicleId" element={<Details token={token} onBack={goBackFromDetail} />} />
            <Route path="order" element={<Order token={token} orderId={orderId} onItem={goToDetails} />} />
            <Route path="orders" element={<Orders token={token} onOrder={goToOrder} />} />
        </Routes>
    </div>
}

export default Home