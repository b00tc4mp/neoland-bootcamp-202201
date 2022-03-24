import './ListComments.sass'
import { useEffect, useState } from 'react'
import { CommentCard } from '.'
import { listComments } from '../logic'

export function ListComments({ racketId }) {
    const [comments, setComments] = useState([])

    useEffect(async () => {
        try {
          const comments = await listComments(racketId)
            setComments(comments)
        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <>
        {!!comments.length &&
            <ul>
                {comments.map(comment =>
                    <li key={comment.id}>
                        <CommentCard comment={comment} />
                    </li>)}
            </ul>
        }
    </>
}
