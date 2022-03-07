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

### Activities

- Buscar cócteles en la app
- Listar cócteles
- Ver detalles de cócteles y su receta
- Guardar mis cócteles favoritos
- Añadir comentarios a los cócteles


### Use Cases

![alt](./images/Use-cases2.png)

<!-- rebuild use cases with handlers actions -->
<!-- example (https://github.com/nsauram/neoland-bootcamp-202109/tree/feature/fullstack/staff/noelia-saura/fullstack/project/inmymind-doc) -->
<!-- ![alt](./images/use-cases.png) -->

#### Flows

![alt](./images/Flow.png)

<!-- TODO
Ver vídeo (https://www.youtube.com/watch?v=cvYhuowazh0)
link example (https://github.com/manuelbarzi/neoland-bootcamp-202201/blob/36c46f5cb15fe4209a8f6101813bf6c7d6941e4f/staff/maria-navarrete/full-stack/final-project/docs/images/createDiagram.jpg)
Flow de ver un cóctel
Flow de añadir un comentario -->

#### User Interface (UI)


##### Main Views
<!-- wireframes -->

![alt](./images/users-view.png)

![alt](./images/profile-view.png)

## Technical Description

### Blocks

![alt](./images/block.png)

### Data Model
![alt](./images/ERD.png)

<!-- TODO link er diagram -->
<!-- example (https://github.com/manuelbarzi/neoland-bootcamp-202201/blob/36c46f5cb15fe4209a8f6101813bf6c7d6941e4f/staff/maria-navarrete/full-stack/final-project/docs/images/ERDiagram.jpg) -->


User
- name (string, required,unique, min length 8)
- email (string, required, unique, without space)
- password (string, required, min length 8)

Coctail
- title (string, required,...)
- description (string, required, ...)
- recipe (string, required, ...)
- note (string, required,...)
- Photo (string, unique,...)

Comment
- text
- date
- user


<!-- TODO
ER diagram
Review with ventu
Link this diagrams to docs
Modify models and schemas
rebuild uses cases
----------------- for tomorrow -----------
flows
wireframes
review with ux/ui student
-->