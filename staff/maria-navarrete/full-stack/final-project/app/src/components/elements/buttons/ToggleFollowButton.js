import './ToggleFollowButton.sass'
import { useState } from 'react'
import { toggleFollowingUser } from '../../../logic'
import { HeartIcon } from '../../icons'
import { Button } from '.'


export const ToggleFollowButton = ({ userId, isFollow }) => {

    const [following, setFollowing] = useState(isFollow)

    const toggleFollow = async () => {
        try {
            await toggleFollowingUser(sessionStorage.token, userId)
            setFollowing(!following)
        } catch (error) {
            alert(error.message)
        }
    }

    const onToggle = event => {
        event.preventDefault()
        toggleFollow()
    }

    return <>
        <Button type="button" onClick={onToggle}>
            <HeartIcon className={`follow-icon ${following ? 'follow-on' : 'follow-off'}`} />
        </Button></>
}

