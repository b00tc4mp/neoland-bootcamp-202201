# Coctail's For Dummies

![alt Coctail's For Dummies](https://media4.giphy.com/media/3og0IB9TepluVHcMFy/giphy.gif?cid=ecf05e47trozfhtaha13tc14f154amsq8fmtqbscgbnxbabs&rid=giphy.gif&ct=g)

## Presentación

Coctail's For Dummies(CFD) es una APP que consiste en acercar al usuario medio el fantástico mundo de la coctelería profesional. Dentro de CFD encontraremos un completo buscador de cocteles clásicos, modernos y sin alcohol.

CFD ofrece un completo listado de recetas, detallado en centilitros y onzas, aprobados por IBA junto con la descripción del proceso para realizarlo.

La experiencia CFD permite al usuario crear y guardar sus  recetas favoritas y añadir comentarios al recetario.

## Intro
Coctail's For Dummies(CFD) is an APP that consists of bringing the fantastic world of professional cocktails closer to the average user. Within CFD we'll  find a complete search engine for classic, modern and non-alcoholic cocktails.

CFD offers a complete list of recipes, detailed in centiliters and ounces, approved by IBA, together with the description of the process to carry it out.

The CFD experience allows the user to create and save their favorites and add comments to the recipes.

## Functional Description

- Pantalla de Landing:
    Permite acceder como usuario o registrarnos

- Pantalla de CFD:
    Podremos acceder al motor de busqueda de CFD, tanto en parámetros de nombre del coctail, como por el destilado básico que utiliza la receta.

- Pantalla de Detalles:
    No es fácil recordar las recetas de un amplio abanico como nos ofrece la coctelería, para ello dispondremos de un apartado de favoritos en CFD, donde encontraremos esas recetas que mejor cazan con nuestros gustos, un detallado listado de la receta y la posibilidad de añadir comentarios, para tener siempre a mano aquellos ajustes que tanto nos gustaron en el pasado.

### Use Cases

![alt](./images/use-cases.png)

#### User Interface (UI)

##### Main Views

![alt](./images/users-view.png)

![alt](./images/profile-view.png)

## Technical Description

### Blocks

![alt](./images/block.png)

### Data Model

User
- name (string, required,unique, min length 8)
- email (string, required, unique, without space)
- password (string, required, min length 8)

Coctail
- title (string, required,...)
- description (string, required, ...)
- recipe (string, required, ...)
- note (string, required,...)

Comment
- text
- date
- user


## Tasks history

### Docs

 ~~TODO introduce the project, describe it (.5h)~~

#### Functional Description

 ~~TODO create use cases diagram (.25h)~~
  
 ~~TODO create wireframes in paper (2h)~~
 ~~TODO create wireframes in figma (alt excalidraw) (3h)~~
 ~~TODO create wireframes in README (images) (1h)~~

#### Techincal Description

 ~~TODO create blocks diagram (.5h)~~

 ~~TODO create data model in paper (1h)~~
 ~~TODO create data model in diagrams.net (E/R) (1h)~~
 ~~TODO create data model in README (images) (1h)~~

### Data
~~TODO create mongoose schemas and models (2h)~~
~~TODO create populate.js to test my models (1h)~~

### App

~~TODO create main views (components) (1h)~~
- TODO mechanize navigations (.5h)


