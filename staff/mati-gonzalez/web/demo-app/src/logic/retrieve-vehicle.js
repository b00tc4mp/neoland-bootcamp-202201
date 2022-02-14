import { validateString } from './helpers/validators'

function retrieveVehicle(id) {
    validateString(id, 'id')

    return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
        .then(res => res.json())
}

export default retrieveVehicle