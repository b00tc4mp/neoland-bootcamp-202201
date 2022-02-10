function retrieveVehicle(id) {
    return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
        .then(res => res.json())
}