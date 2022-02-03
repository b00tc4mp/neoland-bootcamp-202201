const searchForm = searchView.querySelector('.search__form')

searchForm.onsubmit = event => {
    event.preventDefault()

    const queryInput = searchForm.querySelector('.search__query-input')
    const query = queryInput.value

    searchVehicles(query)
    .then(vehicles => {

            resultsList.innerHTML = ''
            
            vehicles.forEach(vehicle => {
                const listItem = document.createElement('li')
                
                const { name, thumbnail, price, id} = vehicle

                const itemTitle = document.createElement('h2')
                itemTitle.innerText = name

                const itemImage = document.createElement('img')
                itemImage.src = thumbnail

                const itemPrice = document.createElement('span')
                itemPrice.innerText = `${price} $`

                listItem.append(itemTitle, itemImage, itemPrice)

                listItem.onclick = event => {
                
                //Llamar a retrieve-vehicle y pasarle el ID, esperamos al .THEN y dentro del 'THEN' vamos a recuperar el vehicle buscado.
                // Con los datos de este VEHICLE, fill in de mi template de HTML llamado 'details vehicle'
                // Apagamos listItem y encendemos el retrieve

                //retrieveView
                retrieveVehicle(id /* vehicle.id */)
                .then(_vehicle => {

                    detailsView.querySelector('.details-id').innerText = _vehicle.id

                })
            }
            resultsList.append(listItem)
            resultsList.classList.remove('off')
        })
    })
    .catch(error => alert(error.message))
}        
