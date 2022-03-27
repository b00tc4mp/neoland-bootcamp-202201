import './UserProfile.sass'
import { UserIcon, ToggleFollowButton, ListUserPublicActions } from '../components'
import { retrieveUserPublicInfo, listFollowingUsers } from '../logic'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export const UserProfile = ({ goToCreateSchedule: _goToCreateSchedule, goToUserProfile: _goToUserProfile }) => {

    const { userId } = useParams()
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

    const goToCreateSchedule = actionId => {
        _goToCreateSchedule && _goToCreateSchedule(actionId)
    }

    const goToUserProfile = userId => {
        _goToUserProfile && _goToUserProfile(userId)
    }

    return <>
        {!!user.id &&
            <div >
                <UserIcon />
                <span>{user.username}</span>
                <ToggleFollowButton userId={user.id} isFollow={user.isFollow} />
                <span>{user.doneActs} Acts cumplidas</span>
                <h3>Acciones creadas</h3>
                <ListUserPublicActions userId={user.id} goToCreateSchedule={goToCreateSchedule} goToUserProfile={goToUserProfile} />
            </div>}
    </>
}