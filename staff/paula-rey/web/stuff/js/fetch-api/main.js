// business (logic) layer

function searchVehicles(query) {
    return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=${query}`)
        .then(res => res.json())
}

function retrieveVehicle(id) {
    return fetch(`https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`)
        .then(res => res.json())
}

// presentation layer

searchVehicles('batman')
    .then(vehicles => vehicles.forEach(vehicle => console.log(vehicle.name)))
    /*.then(vehicles => {
        const lis = vehicles.map(vehicle => `<li><h2>${vehicle.name}</h2><img src="${vehicle.thumbnail}"><span>${vehicle.price}</span></li>`)

        const ul = `<ul>${lis.join('')}</ul>`

        document.body.innerHTML = ul
    })*/
    .catch(error => console.error(error))

retrieveVehicle('FYC80')
    .then(vehicle => console.log(vehicle))
    .catch(error => console.error(error))

retrieveVehicle('FKB02')
    .then(vehicle => console.log(vehicle))
    .catch(error => console.error(error))