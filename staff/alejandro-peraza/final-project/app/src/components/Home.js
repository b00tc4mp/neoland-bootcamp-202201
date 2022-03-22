import './Home.sass'  
import { retrieveUser } from '../logic'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Search from './Search'

function Home({onLogOut}) {

    const [name, setName] = useState()
    // const [view, setView] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        try {
            retrieveUser(sessionStorage.token)
                .then(user => setName(user.name))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    })

    /* const goToProfile = event => {
        event.preventDefault()
        onProfile()
    }
*/


    return <div className="home">
        <nav className = "home__header">
            <button href="" onClick={onLogOut}>Log out</button>
        </nav>
        <h1>welcome home, {name}!</h1>
        <Search />

        {/* <Routes>
            <Route path='profile' element={<Profile onUpdateUserPassword={showUpdateUserPassword} onDeleteUser={showDeleteUser}/>}/>
            <Route path='profile/update-user-password' element={<updateUserPassword onBack={showProfile}/>}/>
            <Route path='profile/delete-User' element={<deleteUser onBack={showProfile} onDeletedUser={onLogOut}/>}/>
        </Routes> */}
    </div>
}

export default Home