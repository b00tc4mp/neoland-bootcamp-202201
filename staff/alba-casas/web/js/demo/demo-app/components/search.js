const searchForm = searchView.querySelector(".search__form");

searchForm.onsubmit = (event) => {
  event.preventDefault();

  const queryInput = searchForm.querySelector(".search__query-input");

  const query = queryInput.value;

  searchVehicles(query)
    .then((vehicles) => {
      const resultsList = searchView.querySelector(".search__results-list");
      resultsList.innerHTML = "";

      vehicles.forEach((vehicle) => {
        const listItem = document.createElement("li");

        const { id, name, thumbnail, price } = vehicle;

        const itemTitle = document.createElement("h2");
        itemTitle.innerText = name;

        const itemImage = document.createElement("img");
        itemImage.src = thumbnail;

        const itemPrice = document.createElement("span");
        itemPrice.innerText = `${price} $`;

        const itemId = document.createElement("id");
        itemId.innerText = id;

        listItem.append(itemTitle, itemImage, itemPrice, itemId);

        resultsList.append(listItem);

        listItem.onclick = () => {
          retrieveVehicle(id).then((vehicle) => {
            console.log(vehicle);
            detailsView.querySelector(
              ".details__name"
            ).innerText = `Name: ${vehicle.name}`;
            detailsView.querySelector(
              ".details__price"
            ).innerText = `Price: ${vehicle.price}`;
            detailsView.querySelector(
              ".details__maker"
            ).innerText = `Maker: ${vehicle.maker}`;
            detailsView.querySelector(".details__image").src = vehicle.image;
            detailsView.querySelector(
              ".details__year"
            ).innerText = `Year: ${vehicle.year}`;
            detailsView.querySelector(
              ".details__style"
            ).innerText = `Style: ${vehicle.style}`;
            detailsView.querySelector(
              ".details__color"
            ).innerText = `Color: ${vehicle.color}`;
            detailsView.querySelector(
              ".details__description"
            ).innerText = `Description: ${vehicle.description}`;
          });
          searchView.classList.add("off");
          detailsView.classList.remove("off");
        };
      });

      resultsList.classList.remove("off");
    })
    .catch((error) => alert(error.message));
};
