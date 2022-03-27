import './ListSearchUsersResults.sass'
import { findUsers, listFollowingUsers } from '../logic'
import { UserCard } from '.'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export const ListSearchUsersResults = ({ goToUserProfile: _goToUserProfile }) => {

    const [users, setUsers] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const query = searchParams.get('query')

    useEffect(async () => {
        try {
            const users = await findUsers(sessionStorage.token, query)
            const following = await listFollowingUsers(sessionStorage.token)

            users.forEach(user => {
                user.isFollow = following.some(follow => follow.id === user.id)
            })

            setUsers(users)

        } catch (error) {
            alert(error.message)
        }
    }, [query])

    const goToUserProfile = userId => {
        _goToUserProfile && _goToUserProfile(userId)
    }

    return <>
        <div>
            <h2>Resultados</h2>
            {!!users.length &&
                <ul> {users.map(user =>
                    <li key={user.id}><UserCard user={user} onUserProfile={goToUserProfile} /></li>)}
                </ul>}
        </div>
    </>
}