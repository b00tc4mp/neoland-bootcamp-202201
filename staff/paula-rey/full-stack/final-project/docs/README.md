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

![alt Main Views](./images/main-views.png)

## Technical Description

### Blocks

### Data Model

User
- name (string, required, min length 20)
- email (string, required, unique)
- password (string, required, min length 8)

Location
- title (string, required, min lenght 50)
- description (string, required, minlength 300)
- address (string, required)
- coords ([integer, integer], required,)
- image (string)

Comment
- user (objectId, User, required)
- text (string, required)
- date (date, required, date.now)
- location (location, required, unique)

## Tasks history

### Docs

- ~~TODO introduce the project, describe it (.5h)~~

#### Functional Description

- ~~TODO create use cases diagram (.25h)~~
  
- ~~TODO create wireframes in paper (2h)~~
- ~~TODO create wireframes in figma (alt excalidraw) (3h)~~
- ~~TODO create wireframes in README (images) (1h)~~

#### Techincal Description

- TODO create blocks diagram (.5h)

- ~~TODO create data model in paper (1h)~~

- TODO create data model in diagrams.net (E/R) (1h)

- TODO create data model in README (images) (1h)

### Data

- TODO create mongoose schemas and models (2h)

- TODO create populate.js to test my models (1h)

### App

- TODO create main views (components) (1h)
- TODO mechanize navigations (.5h)