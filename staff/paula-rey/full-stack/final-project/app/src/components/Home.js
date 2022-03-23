import './Home.sass'
import { retrieveUser } from '../logic'
import { Profile, UpdatePassword, DeleteAccount, Search } from './index'
//import { logo } from './elements'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useSearchParams, useLocation } from 'react-router-dom'

export function Home({onLogOut}) {
    const [view, setView] = useState()
    const [name, setName] = useState('name')
    const [locationId, setLocationId] = useState()
    const [previousView, setPreviousView] = useState()
    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams()
    const q = search.get('q')
    const [filter, setFilter] = useState(q)
    const location = useLocation()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    })

    const showProfile = () => navigate('profile')
    const showUpdatePassword = () => navigate('profile/update-password')
    const showDeleteAccount = () => navigate('profile/delete-account')
    const showFavorites = () => navigate('favorites')
    const showAddLocation = () => navigate('addLocation')
    const showSearch= () => navigate(!filter? '/' : `search?q=${filter}`)
    const showDetails = locationId => navigate(`locations/${locationId}`)

    const goToProfile = event => {
        event.preventDefault()
        showProfile()
    }

    const goToFavorites = event => {
        event.preventDefault()
        showFavorites()
    }

    const goToAddLocation = event => {
        event.preventDefault()
        showAddLocation()
    }

    const doSearch = filter => {
        setFilter(filter)

        navigate(`filter?q=${filter}`)
    }

    const goToSearch = event => {
        event.preventDefault()

        showSearch()
    }

    const goToDetails = locationId => {
        setLocationId(locationId)

        setPreviousView(`${location.pathname}${location.search? location.search: ''}`)

        showDetails(locationId)
    }
   

    return <div className="home">
        <nav className = "home__header">
            {/* <a className="home__logo-link" href="" onClick={goToSearch} title="search"><Logo /></a> */}
            <h2 className="home__name-project">Dogether</h2>
            <button href="" onClick={onLogOut}>Log out</button>
        </nav>
        <nav className = "home__footer">
            <a className={`home__menu-link ${view === 'profile' ? 'home__menu-link--active' : ''}`} href="" style={{ textDecoration: 'none' }} onClick={goToProfile} title="profile">🙎‍♂️</a>
            <a className={`home__menu-link ${view === 'favorites' ? 'home__menu-link--active' : ''}`} href="" style={{ textDecoration: 'none' }} onClick={goToFavorites} title="favorites">❤️</a>
            <a className={`home__menu-link ${view === 'add-location' ? 'home__menu-link--active' : ''}`} href="" style={{ textDecoration: 'none' }} onClick={goToAddLocation} title="add-location">📌</a>
        </nav>

        <Routes>
            <Route index element={<Search onItem={goToDetails} onFilter={doSearch} filter={filter}/>}/>
            <Route path='search' element={<Search onItem={goToDetails} onFilter={doSearch} filter={filter} />}/>
            <Route path='profile' element={<Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount}/>}/>
            <Route path='profile/update-password' element={<UpdatePassword onBack={showProfile}/>}/>
            <Route path='profile/delete-account' element={<DeleteAccount onBack={showProfile} onDeletedAccount={onLogOut}/>}/>
        </Routes>
    </div>
}

