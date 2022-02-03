const searchForm = searchView.querySelector('.search__form')

searchForm.onsubmit = event => {
    event.preventDefault()

    const queryInput = searchForm.querySelector('.search__query-input')

    const query = queryInput.value

    searchVehicles(query)
        .then(vehicles => {
            const resultsList = searchView.querySelector('.search__results-list')
            resultsList.innerHTML = ''

            vehicles.forEach(vehicle => {
                const listItem = document.createElement('li')

                const { id, name, thumbnail, price } = vehicle

                // const id = vehicle.id
                // const name = vehicle.name 

                const itemTitle = document.createElement('h2')
                itemTitle.innerText = name

                const itemImage = document.createElement('img')
                itemImage.src = thumbnail

                const itemPrice = document.createElement('span')
                itemPrice.innerText = `${price} $`


                listItem.append(itemTitle, itemImage, itemPrice)

                listItem.onclick = () => {
                    retrieveVehicle(id)
                        .then(selectedVehicle => {

                            const {image, name, price, maker, year, style, color, collection, description} = selectedVehicle


                            const selectedImage = detailsView.querySelector('.details__image')
                            selectedImage.src = image
                            const selectedName = detailsView.querySelector('.details__name')
                            selectedName.innerText = name
                            const selectedPrice = detailsView.querySelector('.details__price')
                            selectedPrice.innerText = `${price} $`
                            const selectedMaker = detailsView.querySelector('.details__maker')
                            selectedMaker.innerText = `Maker: ${maker}`
                            const selectedYear = detailsView.querySelector('.details__year')
                            selectedYear.innerText = `Year: ${year}`
                            const selectedCollection = detailsView.querySelector('.details__collection')
                            selectedCollection.innerText = `Collection: ${collection}`
                            const selectedStyle = detailsView.querySelector('.details__style')
                            selectedStyle.innerText = `Style: ${style}`
                            const selectedColor = detailsView.querySelector('.details__color')
                            selectedColor.innerText = `Color: ${color}`
                            const selectedDescription = detailsView.querySelector('.details__description')
                            selectedDescription.innerText = description

                        }

                        )

                    searchView.classList.add('off')
                    detailsView.classList.remove('off')

                }

                resultsList.append(listItem)
            })

            resultsList.classList.remove('off')

        })
        .catch(error => alert(error.message))
}