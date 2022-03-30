import './ListFollowingUsers.sass'
import { useState, useEffect } from 'react'
import { listFollowingUsers } from '../logic'
import { UserCard } from '.'

export const ListFollowingUsers = ({ goToUserProfile }) => {

    const [following, setFollowing] = useState([])

    useEffect(async () => {
        try {
            const following = await listFollowingUsers(sessionStorage.token)
            following.forEach(follow => follow.isFollow = true)

            setFollowing(following)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const updateFollowingUsers = async() => {
        const following = await listFollowingUsers(sessionStorage.token)
        following.forEach(follow => follow.isFollow = true)

        setFollowing(following)
    }


    return <>
        <div className='followingUsers'>
            <h2 className='followingUsers__title'>Comunidad Hoomans </h2>
            {!!following.length &&
                <ul> {following.map(follow =>
                    <li key={follow.id}><UserCard user={follow} onUserProfile={goToUserProfile} onToggled={updateFollowingUsers} /></li>)}
                </ul>}
        </div>
    </>
}