import { validators } from 'commons'


const { validateId, validateToken } = validators

function updateNote(token, recipeId, noteId, text) {
    validateToken(token)
    validateId(recipeId, noteId)
    

    return fetch(`http://localhost:8080/api/recipes/${recipeId}/notes/${noteId}`, {
    
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ text })
    })
        .then(res => {
            const { status } = res

            if (status === 204) {
                return
            } else if (status >= 400 && status < 500) {
                return res.json()
                    .then(payload => {
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

export default updateNote