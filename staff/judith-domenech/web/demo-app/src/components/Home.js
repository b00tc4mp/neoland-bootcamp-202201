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
        const location = useLocation()
        const [orderId, setOrderId] = useState()
        const [themeState, setThemeState] = useState('🌙')
    
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
    
        const showProfile = () =>
            //setView('profile')
            navigate('profile')
    
    
        const showUpdatePassword = () =>
            //setView('update-password')
            navigate('profile/update-password')
    
    
        const showDeleteAccount = () =>
            //setView('delete-account')
            navigate('profile/delete-account')
    
    
        const goToSearch = event => {
            event.preventDefault()
    
            showSearch()
        }
    
        const showSearch = () =>
            //setView('search')
            navigate(!query? '/' : `search?q=${query}`)
    
    
        const goToFavs = event => {
            event.preventDefault()
    
            showFavs()
        }
        const showFavs = () =>
            //setView('favs')
            navigate('favs')
    
    
        const goToDetails = id => {
            setVehicleId(id)
    
            // setPreviousView(view)
            setPreviousView(`${location.pathname}${location.search? location.search: ''}`)
    
            showDetails(id)
        }
    
        const showDetails = id => 
            //setView('details')
            navigate(`vehicles/${id}`)
    
    
        const goBackFromDetails = () =>
            //setView(previousView)
            navigate(previousView || '/')
    
    
        const goToCart = event => {
            event.preventDefault()
    
            showCart()
        }
    
        const showCart = () =>
            //setView('cart')
            navigate('cart')
    
    
        const doSearch = query => {
            setQuery(query)
    
            navigate(`search?q=${query}`)
        }
    
        const goToOrder = id => {
            setOrderId(id)
            showOrder()
        }
        const showOrder = () =>
            //setView('order')
            navigate('order')
    
    
    
        const goToOrders = event => {
           event.preventDefault()
           showOrders()
        }

        const showOrders = () => 
       
       navigate('orders')

   const toggleTheme = () => {
        setThemeState(themeState === '🌙'? '🌞' : '🌙')

        onToggleTheme()
    }
    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href="" onClick={goToSearch} title="search" ><Logo /></a>
            <a className={`home__profile-link ${view === 'cart' ? 'home__menu-link--active' : ''}`} href="" onClick={goToProfile} title="profile"> 👤 {name}</a>
            <a className={`home__profile-link ${view === 'cart' ? 'home__menu-link--active' : ''}`} href="" onClick={goToFavs}> ♥️ Favs</a>
            <a className={`home__profile-link${view === 'cart' ? 'home__menu-link--active' : ''}`} href='' onClick={goToCart}> 🛒 Cart</a>
            <a className={`home__profile-link ${view === 'cart' ? 'home__menu-link--active' : ''}`} href='' onClick={goToOrders}> 🛍 Orders</a>
            <button className="home__logout-button" onClick={onLogout}> Logout</button>
            <button className="home__button" onClick={toggleTheme}>{themeState}</button>
       
            </div>

        <Routes>
            <Route index element={<Search token={token} onItem={goToDetails} onQuery={doSearch} query={query} />} />
            <Route path='search' element={<Search token={token} onItem={goToDetails} onQuery={doSearch} query={query} />} />
            <Route path='favs' element={<Favs token={token} onItem={goToDetails} />} />
            <Route path='cart' element={<Cart token={token} onItem={goToDetails} onOrder={goToOrder} />} />
            <Route path='profile' element={<Profile token={token} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} />
            <Route path='profile/update-password' element={<UpdatePassword token={token} onBack={showProfile} />} />
            <Route path='profile/delete-account' element={<DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />} />
            <Route path='vehicles/:vehicleId' element={<Detail token={token} onBack={goBackFromDetails} />} />
            <Route path='order' element={<Order token={token} orderId={orderId} onItem={goToDetails} />} />
            <Route path='orders' element={<Orders token={token} onOrder={goToOrder}/>} />
            {/* <Route path="" element={<Navigate replace to="/" />} /> */}
        </Routes>
        
    </div>
}

export default Home