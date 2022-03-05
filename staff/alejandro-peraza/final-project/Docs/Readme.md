# Coctail's For Dummies
![alt Pyro Project](https://media4.giphy.com/media/3og0IB9TepluVHcMFy/giphy.gif?cid=ecf05e47trozfhtaha13tc14f154amsq8fmtqbscgbnxbabs&rid=giphy.gif&ct=g)

## Intro

Coctail's for dummies es una APP que consiste en acercar al usuario medio el fantástico mundo de la coctelería profesional. Dentro de CFD encontraremos un completo buscador de cocteles clásicos, modernos y sin alcohol.

CFD ofrece un completo listado de recetas, detallado en centilitros


## Functional Description

### Use Cases

#### User Interface (UI)

##### Main Views

![alt Main Views](./images/main-views.png)

## Technical Description

### Blocks

### Data Model

User
- name (string, required, min length 2)
- email (string, required, unique)
- password (string, required, min length 8)

Location
- title (string, required, ...)
- description (string, required, ...)
- address (string, required, ...)
- coords ([integer, integer], required, ....)
- ...

Comment
- text
- date
- user
- location

## Tasks history

### Docs

- TODO introduce the project, describe it (.5h)

#### Functional Description

- TODO create use cases diagram (.25h)
  
- TODO create wireframes in paper (2h)
- TODO create wireframes in figma (alt excalidraw) (3h)
- TODO create wireframes in README (images) (1h)

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


