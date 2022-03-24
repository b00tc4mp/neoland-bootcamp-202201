import './UserCard.sass'
import { UserIcon, ToggleFollowButton } from '.'
import { useState } from 'react'

export const UserCard = ({ user: _user }) => {

    const [user, setUser] = useState(_user || {})

    return <>
        <div >
            <UserIcon />
            <span>{user.username}</span>
            <ToggleFollowButton user={user}/>
        </div>
    </>
}