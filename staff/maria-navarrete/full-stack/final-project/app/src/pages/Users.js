import './Users.sass'
import { SearchUsers, ListSearchUsersResults } from '../components'
import { UserProfile } from '.'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'


export const Users = ({ goToCreateSchedule, goToUsers }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const showSearchUsers = query => { navigate(`search?query=${query}`) }
    const showUserProfile = userId => { navigate(`${userId}`) }


    return <div className='users'>
        {(location.pathname === '/hoomans' || location.pathname.includes('search')) && < SearchUsers onSearchUsers={showSearchUsers} onReset={goToUsers} />}

        <Routes>
            <Route path='search' element={<ListSearchUsersResults goToUserProfile={showUserProfile} />} />
            <Route path=':userId' element={<UserProfile goToCreateSchedule={goToCreateSchedule} goToUserProfile={showUserProfile} />} />
        </Routes>
    </div>
}