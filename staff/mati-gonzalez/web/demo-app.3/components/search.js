const searchForm = searchView.querySelector('.search__form')

searchForm.onsubmit = e => {
    e.preventDefault()

    const queryInput = searchForm.querySelector('.search__Query-input')

    const query = queryInput.value

    searchVehicles(query)
        .then(vehicles => {
            const resultList = searchView.querySelector('.search__results-list')
            resultsList.innerHTML = ''

            vehicles.forEach(vehicle => {
                const listItem = document.createElement('li')

                const { name, thumbnail, price } =vehicle

                const itemTitle = document.createElement('h2')
                itemTitle.innerText = name
                const itemImage = document.createElement('img')
                itemImage.src = thumbnail

                const itemPrice = document.createElement('span')
                itemPrice.innerText = `${price} $`

                listItem.append(itemTitle, itemImage, itemPrice)
            })

            resultsList.classList.remove('off')
        })

        .catch(error => alert(error.message))
}