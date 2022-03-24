import { Button, CancelIcon } from '.'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'
import './CommentCard'

export function CommentCard({ comment }) {
    const [owned, setOwned] = useState(false)
    
    useEffect( async() => {
        try {
         const user = await retrieveUser(sessionStorage.token)
         setOwned(user.id === comment.userId )
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <>
        {owned && <Button><CancelIcon /> </Button>}
        <h3>{comment.user}</h3>
        <p>{comment.text}</p>
        <p>{new Date(comment.date).toLocaleDateString()}</p>

    </>
}

