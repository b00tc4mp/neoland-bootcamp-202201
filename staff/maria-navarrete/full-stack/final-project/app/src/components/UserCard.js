import './UserCard.sass'
import { UserIcon, ToggleFollowButton, Link } from '.'
import { useState } from 'react'

export const UserCard = ({ user = {}, onUserProfile, onToggled }) => {


    return <>
        <div >
            <UserIcon />
            <Link onClick={() => onUserProfile(user.id)}>{user.username}</Link>
            <ToggleFollowButton userId={user.id} isFollow={user.isFollow} onToggled={onToggled} />
        </div>
    </>
}