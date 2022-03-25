import './FollowCard.sass'
import { FollowButton } from '.'
import { useState } from'react'


export function FollowCard({user: _user, isFollow}) {

    const[user, setUser] = useState(_user || {})
    
    return <div className='follow-card'>
        <FollowButton userId={user.Id} isFollow={isFollow}/>
        <h1>{user.name}</h1>
        <h2>{user.location}</h2>
        <img src={location.urlImage}/>
        <p>{location.city}</p>
        
    </div>
}