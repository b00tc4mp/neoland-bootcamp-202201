import './ListFollows.sass'
import { useState, useEffect } from 'react'
import { listFollowsUsers } from '../logic'
import { FollowCard } from '../components'

export function ListFollows() {
    const [follows, setFollows] = useState([])


    useEffect(async() => {
        try {
            const follows = await listFollowsUsers(sessionStorage.token)

            //follows.forEach(follow => follow.isFollow = true)
            follows.forEach(follow => {
                follow.isFollow = follows.some(({id}) => id === follow.id)
            })  //si no funciona mirar ListSearchResults

            setFollows(follows)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
         {!!follows.length && <ul>
            {follows.map(follow => 
            <li key={follow.id} /*onClick={() => goToLocation(location.id)}*/>
                <FollowCard user={follow} /> 
            </li>)}
            </ul>}
    </div>
}