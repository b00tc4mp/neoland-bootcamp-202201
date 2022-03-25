import './ListFollowingUsers.sass'
import { useState, useEffect } from 'react'
import { listFollowingUsers } from '../logic'
import { UserCard } from '.'

export const ListFollowingUsers = () => {

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


    return <>
        <div>
            <h2>Comunidad Hoomans </h2>
            {!!following.length &&
                <ul> {following.map(follow =>
                    <li key={follow.id}>
                        <UserCard user={follow} />
                    </li>
                )}
                </ul>}
        </div>
    </>
}