# Dog·gether Project

![alt Dog-gether Project](https://media0.giphy.com/media/5pYo6sWTaoHs7pnXaK/giphy.gif?cid=ecf05e475dzgtn4gqkcc849f32q63an7w4t49h06wpr0jpm4&rid=giphy.gif&ct=g)

## Intro

Esta aplicación esta creada para facilitar la búsqueda de localizaciones en donde puedes acceder con tu compañero peludo. Ya sea restaurantes, bares, hoteles, playas.. etc.

Gracias a la creación de una preciosa comunidad, entre todos podremos descubir y compartir sitios *pet-friendly*.

## Functional Description

### Use Cases

![alt Use Cases](./images/use-cases.png)

#### User Interface (UI)

##### Main Views

![alt Main Views](./images/main-views2.png)

## Technical Description

### Blocks

![alt Flow Chart](./images/flow-chart.png)

### Data Model

User
- Name (string, required, min length 20)
- Email (string, required, unique)
- Password (string, required, min length 8)

Location
- Title (string, required, min lenght 50)
- Description (string, required, minlength 300)
- Address (string, required)
- Coords ([integer, integer], required)
- Image (string)

Comment
- User (objectId, User, required)
- Text (string, required)
- Date (date, required, date.now)
- Adress (String, true)

## Tasks history

### Docs

- ~~TODO introduce the project, describe it (.5h)~~

#### Functional Description

- ~~TODO create use cases diagram (.25h)~~
  
- ~~TODO create wireframes in paper (2h)~~
- ~~TODO create wireframes in figma (alt excalidraw) (3h)~~
- ~~TODO create wireframes in README (images) (1h)~~

#### Techincal Description

- ~~TODO create blocks diagram (.5h)~~

- ~~TODO create data model in paper (1h)~~

-   ~~TODO create data model in diagrams.net (E/R) (1h)~~

- ~~TODO create data model in README (images) (1h)~~

### Data

- ~~TODO create mongoose schemas and models (2h)~~

- ~~TODO create populate.js to test my models (1h)~~

### App

- ~~TODO create main views (components) (1h)~~
- TODO mechanize navigations (.5h)