import { validateString, validateToken } from './helpers/validators'

function toggleFavVehicle(token, id) {
    validateString(id, 'id')
    validateToken(token)

    return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            const { status } = res
            //const status = res.status

            if (status === 200) {
                return res.json()
                    //JSON.parse(res.body)

                    .then(user => {
                        let { favs } = user
                        //const favs = user.favs

                        if (favs) {
                            const index = favs.indexOf(id)
                            if (index === -1) favs.push(id)
                            else favs.splice(index, 1)
                        }
                        else {
                            favs = [id]
                        }
                        return fetch('https://b00tc4mp.herokuapp.com/api/v2/users', {
                            method: 'PATCH',
                            headers: {
                                Authorization: `Bearer ${token}`,
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ favs })
                        })
                    })
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

export default toggleFavVehicle
            

// TODO validate token and id
// TODO call api to retrieve user favs
// TODO update favs array (if fav was already there, remove it, if not, add it)
// TODO call api to update user favs