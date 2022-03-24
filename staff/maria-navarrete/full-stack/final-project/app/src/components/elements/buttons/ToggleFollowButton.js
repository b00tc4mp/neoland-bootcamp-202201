import './ToggleFollowButton.sass'
import { useState } from 'react'
import { toggleFollowingUser } from '../../../logic'
import { HeartIcon } from '../../icons'
import { Button } from '.'


export const ToggleFollowButton = ({ user }) => {

    const [following, setFollowing] = useState(user.isFollow)

    const toggleFollow = async () => {
        try {
            await toggleFollowingUser(sessionStorage.token, user.id)
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

