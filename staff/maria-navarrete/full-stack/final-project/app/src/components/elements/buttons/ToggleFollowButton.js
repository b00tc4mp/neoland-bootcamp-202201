import './ToggleFollowButton.sass'
import { useState } from 'react'
import { toggleFollowingUser } from '../../../logic'
import { FollowIcon } from '../../icons'
import { Button } from '.'


export const ToggleFollowButton = ({ followId, isFollow = false }) => {

    const [following, setFollowing] = useState(isFollow)

    const toggleFollow = async () => {
        try {
            await toggleFollowingUser(sessionStorage.token, followId)
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
            <FollowIcon className={`follow-icon ${following ? 'follow-on' : 'follow-off'}`} />
        </Button></>
}

