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
import { Routes, Route, useNavigate, useSearchParams, useLocation } from 'react-router-dom'

function Home({ token, onLogout }) {
    const [view, setView] = useState('search')
    const [name, setName] = useState('name')
    const [vehicleId, setVehicleId] = useState()
    const [previousView, setPreviousView] = useState()
    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams()
    const q = search.get('q')
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

    const showProfile = () => 
        // setView('profile')
        navigate('profile')

    const showUpdatePassword = () => 
        // setView('update-password')
        navigate('profile/update-password')

    const showDeleteAccount = () => 
        //setView('delete-account')
        navigate('profile/delete-account')

    const goToSearch = event => {
        event.preventDefault()

        showSearch()
    }

    const showSearch = () => 
        // setView('search')
        navigate(!query? '/' : `search?q=${query}`)

    const goToFavs = event => {
        event.preventDefault()

        showFavs()
    }

    const showFavs = () => 
        // setView('favs')
        navigate('favs')

    const goToDetail = id => {
        setVehicleId(id)

        // setPreviousView(view)
        setPreviousView(`${location.pathname}${location.search? location.search: ''}`)

        showDetail(id)
    }

    const showDetail = id => 
        //setView('detail')
        navigate(`vehicles/${id}`)

    const goBackFromDetail = () => 
        // setView(previousView)
        navigate(previousView || '/')

    const goToCart = event => {
        event.preventDefault()

        showCart()
    }

    const showCart = () => 
        // setView('cart')
        navigate('cart')

    const doSearch = query => {
        setQuery(query)

        navigate(`search?q=${query}`)
    }

    return <div className="home">
        <div className="home__header">
            <a className="home__home-link" href="" onClick={goToSearch} title="search"><img className="home__logo" src="/images/demo-logo.png" alt="" /></a>
            <a className={`home__menu-link ${view === 'profile' ? 'home__menu-link--active' : ''}`} href="" onClick={goToProfile} title="profile">{name}</a>
            <a className={`home__menu-link ${view === 'favs' ? 'home__menu-link--active' : ''}`} href="" onClick={goToFavs}>Favs</a>
            <a className={`home__menu-link ${view === 'cart' ? 'home__menu-link--active' : ''}`} href="" onClick={goToCart}>Cart</a>
            <button className="home__logout-button" onClick={onLogout}>Logout</button>
        </div>

        {/* {view === 'search' && <Search token={token} onItem={goToDetail} onQuery={setQuery} query={query} />} */}

        {/* {view === 'profile' && <Profile token={token} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} */}

        {/* {view === 'update-password' && <UpdatePassword token={token} onBack={showProfile} />} */}

        {/* {view === 'delete-account' && <DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />} */}

        {/* {view === 'favs' && <Favs token={token} onItem={goToDetail} />} */}

        {/* {view === 'detail' && <Detail token={token} vehicleId={vehicleId} onBack={goBackFromDetail} />} */}

        {/* {view === 'cart' && <Cart token={token} onItem={goToDetail} />} */}

        <Routes>
            <Route index element={<Search token={token} onItem={goToDetail} onQuery={doSearch} query={query} />} />
            <Route path="search" element={<Search token={token} onItem={goToDetail} onQuery={doSearch} query={query} />} />
            <Route path="favs" element={<Favs token={token} onItem={goToDetail} />} />
            <Route path="cart" element={<Cart token={token} onItem={goToDetail} />} />
            <Route path="profile" element={<Profile token={token} onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount} />} />
            <Route path="profile/update-password" element={<UpdatePassword token={token} onBack={showProfile} />} />
            <Route path="profile/delete-account" element={<DeleteAccount token={token} onBack={showProfile} onDeletedAccount={onLogout} />} />
            <Route path="vehicles/:vehicleId" element={<Detail token={token} onBack={goBackFromDetail} />} />
            {/* <Route path="" element={<Navigate replace to="/" />} /> */}
        </Routes>
    </div>
}

export default Home