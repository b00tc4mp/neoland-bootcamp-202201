import './Home.sass'
import { retrieveUser } from '../logic'
import { Profile, UpdatePassword, DeleteAccount, Search} from './index'
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'

function Home({onLogOut}) {

    const [name, setName] = useState()
    const navigate = useNavigate()
    const [search, setSearch] = useSearchParams()
    const q = search.get('q')
    const [query, setQuery] = useState(q)

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

    const goToProfile = event => {
        event.preventDefault()
        showProfile()
    }

    // const goToSearch = event => {
    //     event.preventDefault()

    //     showSearch()
    // }

    // const showSearch = () =>
    //     //setView('search')
    //     navigate(!query? '/' : `search?q=${query}`)

    const doSearch = query => {
        setQuery(query)

        navigate(`search?q=${query}`)
    }

    return <div className="home">
        <nav className = "home__header">
            <h1>Dogether</h1>
            <a href="" onClick={goToProfile}>Profile</a>
            <button href="" onClick={onLogOut}>Log out</button>
        </nav>

        <Routes>
            <Route index element={<Search onQuery={doSearch} query={query} />} />
            <Route path='search' element={<Search onQuery={doSearch} query={query}/>} />
            <Route path='profile' element={<Profile onUpdatePassword={showUpdatePassword} onDeleteAccount={showDeleteAccount}/>}/>
            <Route path='profile/update-password' element={<UpdatePassword onBack={showProfile}/>}/>
            <Route path='profile/delete-account' element={<DeleteAccount onBack={showProfile} onDeletedAccount={onLogOut}/>}/>
        </Routes>
    </div>
}

export default Home