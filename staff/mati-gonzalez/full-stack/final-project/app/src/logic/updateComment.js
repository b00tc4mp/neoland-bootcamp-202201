import {validators} from 'commons'
const { validateToken, validateString } = validators

function updateComment(token, Text) {
    validateToken(token)
    validateString(Text)

    return fetch(`http://localhost:8080/api/comments/${commentId}`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currPassword, newPassword })

    })
        .then(res => {
            const { status } = res
            if (status === 200) {
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

export default updateComment