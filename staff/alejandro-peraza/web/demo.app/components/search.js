const searchForm = searchView.querySelector('.search__form')

searchForm.onsubmit = event => {
    event.preventDefault()

    const queryInput = searchForm.querySelector('.search__query-input')

    const query = queryInput.value

    searchVehicles(query)
        .then(vehicles => {
            const resultsList = searchView.querySelector('.search__results-list')
            const detailView = searchView.querySelector('.detail')
            
            resultsListView.innerHTML = ''

            vehicles.forEach(vehicle => {
                const listItem = document.createElement('li')
                listItem.classList.add('search__list-item')

                const { name, thumbnail, price } = vehicle

                const itemTitle = document.createElement('h2')
                itemTitle.innerText = name

                const itemImage = document.createElement('img')
                itemImage.src = thumbnail

                const itemPrice = document.createElement('span')
                itemPrice.innerText = `${price} $`

                listItem.append(itemTitle, itemImage, itemPrice)

                resultsList.append(listItem)
            

            listItem.addEventListener('click', event => { // listItem.onclick = event => { .... }
                retrieveVehicle(vehicle.id)
                    .then(({ name, image, description, price, url }) => {
                        detailView.innerHTML = ''

                        const itemTitle = document.createElement('h2')
                        itemTitle.innerText = name

                        const itemImage = document.createElement('img')
                        itemImage.src = image
                        itemImage.classList.add('detail__image')

                        const itemDescription = document.createElement('p')
                        itemDescription.innerText = description

                        const itemPrice = document.createElement('span')
                        itemPrice.innerText = `${price} $`

                        const itemLink = document.createElement('a')
                        itemLink.href = url

                        const backLink = document.createElement('a')
                        backLink.href = '#'
                        backLink.innerText = '< back'
                        backLink.onclick = event => {
                            event.preventDefault()

                            detailView.classList.add('off')
                            resultsListView.classList.remove('off')
                        }

                        detailView.append(itemTitle, itemImage, itemDescription, itemPrice, itemLink, backLink)

                        resultsListView.classList.add('off')
                        detailView.classList.remove('off')
                    })
            })
        })

        detailView.classList.add('off')
        resultsListView.classList.remove('off')
    })
    .catch(error => alert(error.message))
}