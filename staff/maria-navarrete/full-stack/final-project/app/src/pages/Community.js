import './Community.js'
import { ListFollowingUsers, SearchIcon, Link } from '../components'

export const Community = ({ goToUserProfile: _goToUserProfile, onUsers: _onUsers }) => {

    const goToUserProfile = userId => {
        _goToUserProfile && _goToUserProfile(userId)
    }

    const onUsers = () => {
        _onUsers && _onUsers()
    }

    return <>
        <ListFollowingUsers goToUserProfile={goToUserProfile} />
        <Link onClick={onUsers}><SearchIcon /></Link>
    </>
}