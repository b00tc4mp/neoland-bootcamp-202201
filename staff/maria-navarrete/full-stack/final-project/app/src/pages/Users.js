import './Users.sass'
import { SearchUsers, ListSearchUsersResults } from '../components'

export const Users = ({ onSearchUsers: _onSearchUsers, goToUserProfile: _goToUserProfile }) => {


    const onSearchUsers = query => {
        _onSearchUsers && _onSearchUsers(query)
    }

    const goToUserProfile = userId => {
        _goToUserProfile && _goToUserProfile(userId)
    }

    return <>
        <SearchUsers onSearchUsers={onSearchUsers} />
        <ListSearchUsersResults goToUserProfile={goToUserProfile} />
    </>
}