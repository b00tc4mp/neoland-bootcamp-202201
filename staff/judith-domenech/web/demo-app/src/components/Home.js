import './Home.css'
import Profile from './Profile'
import UpdatePassword from './UpdatePassword'
import DeleteAccount from './DeleteAccount'
import Search from './Search'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'
import Logo from './Logo'
import Favs from './Favs'
import Detail from './Detail'
import Cart from './Cart'
import Orders from './Order'
import Order from './Orders'
import { Routes, Route, useNavigate, useSearchParams, useLocation } from 'react-router-dom'


function Home({ token, onLogout, }) {
    // const token = props.token
    //const { token } = props

    const [view, setView] = useState('search')
    const [name, setName] = useState('name')
    const [vehicleId, setVehicleId] = useState()
    const [previousView, setPreviousView] = useState()
    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams()
    const q = search.get('q')
    const [orderId, setOrderId] = useState()
    const [query, setQuery] = useState(q)
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

    const showDetails = (id) => navigate(`vehicles/${id}`)
    const showFavs = () => navigate('favs')

    const goToDetail = (id) => {
        setVehicleId(id)
        setPreviousView(`${location.pathname}${location.search ? location.search : ''}`)
        showDetails(id)
    }

    const goBackFromDetail = () =>
        navigate(previousView || '/')

    const goToCart = event => {
        event.preventDefault()

        showCart()
    }

    const showCart = () => navigate('cart')

    const doSearch = query => {
        setQuery(query)

        navigate(`search?q=${query}`)
    }

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

    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href="" onClick={goToSearch} title="search" ><Logo /></a>
            <a className={`home__profile-link ${view === 'cart' ? 'home__menu-link--active' : ''}`} href="" onClick={goToProfile} title="profile"> 👤 {name}</a>
            <a className={`home__profile-link ${view === 'cart' ? 'home__menu-link--active' : ''}`} href="" onClick={goToFavs}> ♥️ Favs</a>
            <a className={`home__profile-link${view === 'cart' ? 'home__menu-link--active' : ''}`} href='' onClick={goToCart}> 🛒 Cart</a>
            <a className={`home__profile-link ${view === 'cart' ? 'home__menu-link--active' : ''}`} href='' onClick={goToOrders}> 🛍 Orders</a>
            <button className="home__logout-button" onClick={onLogout}> Logout</button>
        </div>


        <Routes>
            <Route index element={<Search token={token} onItem={goToDetail} onQuery={doSearch} query={query} />} />
            <Route path="search" element={<Search token={token} onItem={goToDetail} onQuery={doSearch} query={query} />} />
            <Route path="favs" element={<Favs token={token} onItem={goToDetail} />} />
            <Route path="cart" element={<Cart token={token} onItem={goToDetail} />} />
            <Route path="profile" element={<Profile token={token} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} />
            <Route path="profile/update-password" element={<UpdatePassword token={token} onBack={showProfile} />} />
            <Route path="profile/delete-account" element={<DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />} />
            <Route path="vehicles/:vehicleId" element={<Detail token={token} onBack={goBackFromDetail} />} />
            <Route path="order" element={<Order token={token} orderId={orderId} onItem={goToDetail} />} />
            <Route path="orders" element={<Orders token={token} onOrder={goToOrder} />} />
        </Routes>

    </div>
}

export default Home