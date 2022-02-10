const retrieveForm = retrieveView.querySelector('.retrieve-vehicle__list')

retrieveForm.onclick = event =>{
    event.preventDefault()

    retrieveVehicle(id)
        .then(vehicle => vehicle.json())
}