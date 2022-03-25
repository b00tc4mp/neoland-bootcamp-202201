import './FollowCard.sass'
import { FollowButton, FollowIcon } from '.'
import { useState } from'react'


export function FollowCard({user: _user}) {

    const[user, setUser] = useState(_user || {})
    
    return <div className='follow-card'>
        <FollowButton user={user} />
        <h1>{user.name}</h1>
        <FollowIcon/>
    </div>
}