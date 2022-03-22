import { validators } from 'commons'
const { validateToken, validateId } = validators


function deleteComment(token, commentId) {
    validateToken(token)
    validateId(commentId, 'comment id')

    return fetch(`http://localhost:8080/api/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            const { status } = res
            if (status === 204) {
                return
            } else if (status >= 400 && status < 500) {
                return res.json()
                    .then(payload => {h 
                        const { error } = payload
                        throw new Error(error)
                    })
            } else if (status >= 500) {
                throw new Error('server error')
            } else {
                throw new Error('unknown error')
            }
        })
}


export default deleteComment