import './CommentCard.sass'
import { Button, DeleteIcon } from '.'
import { useState, useEffect } from 'react'
import { retrieveUser } from '../logic'


export function CommentCard({ comment: _comment }) {
    const [comment, setComment] = useState(_comment || {})
    const [owned, setOwned] = useState(false)

    useEffect(async () => {
        try {
            const user = await retrieveUser(sessionStorage.token)
            setOwned(user.id === comment.userId)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div className='comment-card'>
        <h1>{comment.userName}</h1>
        <h2>{new Date(comment.date).toLocaleDateString()}</h2>
        <p>{comment.text}</p>
        {owned && <Button><DeleteIcon /></Button>}

    </div>
}



