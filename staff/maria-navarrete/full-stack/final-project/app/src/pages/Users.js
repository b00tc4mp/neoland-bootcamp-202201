import './Users.sass'
import { SearchUsers, ListSearchUsersResults } from '../components'

export const Users = ({ onSearchUsers, goToUserProfile }) => {


    return <>
        <SearchUsers onSearchUsers={onSearchUsers} />
        <ListSearchUsersResults goToUserProfile={goToUserProfile} />
    </>
}