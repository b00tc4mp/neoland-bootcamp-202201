import './IconFollow.sass'
import { useState, useEffect } from 'react'
import { toggleFollowUser } from '../../logic'

function IconFollow({ userId, isFollow = false }) {
    const [follow, setFollow] = useState(isFollow)

    const toggleFollow = async () => {
        try {
            await toggleFollowUser(sessionStorage.token, userId)

            setFollow(!follow)

        } catch (error) {
            alert(error.message)
        }
    }

    const onToggle = event => {
        event.preventDefault()
        toggleFollow()
    }

    return <>
        <button type="button" onClick={onToggle}>{follow ? '⭐️' : '★'}</button>
    </>
}

export default IconFollow