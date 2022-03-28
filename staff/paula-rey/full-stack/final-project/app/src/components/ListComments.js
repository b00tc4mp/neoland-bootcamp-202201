import './ListComments.sass'
import { useState, useEffect } from 'react'
import { listLocationComments } from '../logic'
import { CommentCard } from '.'
import { useParams } from 'react-router-dom'

export function ListComments() {
    const { locationId } = useParams()

    const [comments, setComments] = useState([])


    useEffect(async() => {
        try {
            const comments = await listLocationComments(sessionStorage.token, locationId)
            setComments (comments)

        } catch (error) {
            alert(error.message)
        }
    }, [])

    return <div>
         {!!comments.length && <ul>
            {comments.map(comment => 
            <li key={comment.id}>
                <CommentCard comment={comment} /> 
            </li>)}
            </ul>}
    </div>
}