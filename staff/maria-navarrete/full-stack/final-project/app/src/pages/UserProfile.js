import './UserProfile.sass'
import { UserIcon, ToggleFollowButton, ListUserPublicActions } from '../components'
import { retrieveUserPublicInfo, listFollowingUsers } from '../logic'
import { useState, useEffect } from 'react'

export const UserProfile = ({ userId }) => {

    const [user, setUser] = useState({})

    useEffect(async () => {
        try {
            const user = await retrieveUserPublicInfo(sessionStorage.token, userId)
            const following = await listFollowingUsers(sessionStorage.token)
            user.isFollow = following.some(follow => follow.id === user.id)
            setUser(user)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <>
        {!!user.id &&
            <div >
                <UserIcon />
                <span>{user.username}</span>
                <ToggleFollowButton userId={user.id} isFollow={user.isFollow} />
                <span>{user.doneActs} Acts cumplidas</span>
                <h3>Acciones creadas</h3>
                <ListUserPublicActions userId={user.id} />
            </div>}
    </>
}