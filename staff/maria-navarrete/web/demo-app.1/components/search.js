const searchForm = searchView.querySelector('.search__form')

searchForm.onsubmit = event => {
    event.preventDefault()

    const queryInput = searchForm.querySelector('.search__query-input')
    const query = queryInput.value

    searchVehicles(query)
        .then(vehicles => {
            const resultsListView = searchView.querySelector('.search__results-list')
            const detailsView = searchView.querySelector('.details')

            resultsListView.innerHTML = ''

            vehicles.forEach(vehicle => {
                const listItem = document.createElement('li')
                listItem.classList.add('search__list-item')

                const { id, name, thumbnail, price } = vehicle

                const itemTitle = document.createElement('h2')
                itemTitle.innerText = name
                itemTitle.classList.add('details__title')

                const itemImage = document.createElement('img')
                itemImage.src = thumbnail

                const itemPrice = document.createElement('span')
                itemPrice.innerText = `${price} $`

                listItem.append(itemTitle, itemImage, itemPrice)

                listItem.onclick = () => {
                    titleView.classList.add('off')
                    retrieveVehicle(id)
                        .then(({ name, image, year, color, maker, collection, style, description, price, url }) => {

                            detailsView.innerHTML = ''

                            const itemTitle = document.createElement('h2')
                            itemTitle.innerText = name

                            itemImage = document.createElement('img')
                            itemImage.src = image
                            itemImage.classList.add('details__image')

                            const itemDescription = document.createElement('p')
                            itemDescription.innerText = description

                            const itemPrice = document.createElement('p')
                            itemPrice.innerText = `${price} $`

                            const itemLink = document.createElement('a')
                            itemLink.href = url
                            itemLink.innerText = 'Visit site'

                            const itemMaker = document.createElement('p')
                            itemMaker.innerText = `Maker: ${maker}`

                            const itemYear = document.createElement('p')
                            itemYear.innerText = `Year: ${year}`

                            const itemColor = document.createElement('p')
                            itemColor.innerText = `Color: ${color}`

                            const itemCollection = document.createElement('p')
                            itemCollection.innerText = `Collection: ${collection}`

                            const itemStyle = document.createElement('p')
                            itemStyle.innerText = `Style: ${style}`

                            const backLink = document.createElement('a')
                            backLink.innerText = "back"
                            backLink.href = '#'
                            backLink.onclick = event =>{
                                event.preventDefault()
                                detailsView.classList.add('off')
                                resultsListView.classList.remove('off')
                            }

                            detailsView.append(itemTitle, itemImage, itemDescription, itemPrice, itemLink, itemMaker, itemYear, itemCollection, itemStyle, backLink)

                            resultsListView.classList.add('off')
                            detailsView.classList.remove('off')
                        })
                }
                resultsListView.append(listItem)
            })
            detailsView.classList.add('off')
            resultsListView.classList.remove('off')
        })
        .catch(error => alert(error.message))
}