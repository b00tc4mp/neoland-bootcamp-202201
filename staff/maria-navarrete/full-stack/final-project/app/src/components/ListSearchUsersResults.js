import './ListSearchUsersResults.sass'
import { findUsers, listFollowingUsers } from '../logic'
import { UserCard } from '.'
import { useState, useEffect } from 'react'

export const ListSearchUsersResults = ({ query = '' }) => {

    const [users, setUsers] = useState([])

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

    return <>
        <div>
            <h2>Resultados</h2>
            {!!users.length &&
                <ul> {users.map(user =>
                    <li key={user.id}>
                        <UserCard user={user} />
                    </li>
                )}
                </ul>}
        </div>
    </>
}