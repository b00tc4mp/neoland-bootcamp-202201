import './Community.js'
import { ListFollowingUsers, SearchIcon, Link } from '../components'

export const Community = ({ goToUserProfile, onUsers}) => {


    return <>
        <ListFollowingUsers goToUserProfile={goToUserProfile} />
        <Link onClick={onUsers}><SearchIcon /></Link>
    </>
}