# Graffiti Maps

## Intro 
Una app para crear un espacio en el que
tanto "artistas", como "fans", sean capaces de 
mapear y registrar piezas ;)

-Arte urbano: Murals , Blinds, Canvas, Mercha.
-Vandalismo: Trains, Metros, Vehicles, Walls. 

-Adjuntar fotos y otros datos de interés como 
"estilos"=> (Tags, 3D, Wild, Bombing, Bubbles, 
Realism, Blockbuster, Icons, Abstract, Trash)

-Añadir  ubicaciones a través de "google maps".

-Descripciones: un espacio donde escribir info.

-Los fans pueden escribir info de sus artistas, 
piezas encontradas y otros datos de interés.

//Los artistas pueden añadir info, precios u otros
detalles a sus piezas.



 


![alt Graffiti Maps Project](https://media.giphy.com/media/FNsYe52dbYLS0/giphy.gif)

## Functional Description
TODO UML diagrams (use cases, flows, activities, etc)

### Activities

Encuentra, visita y comparte los graffitis de tu ciudad.
Los usuarios podrán compartir los graffitis que mas les gusten así como los suyos propios. Podrán compartir imagenes, descripciones, ubicaciones y otro tipo de información. Actualizar la información modificando sus publicaciones.

### Use Cases
![alt Use Cases](./images/use-cases.png)

//### flows

![alt flows](./images/flux-diagram.png)

#### User Interface (UI)

##### Main Views

![alt Main Views](./images/  .png) <=// añadir imagen;

## Technical Description
TODO UML diagrams (blocks, components, data model (entity diagram), etc)

### Blocks
![alt blocks](./images/Blocks.png)
### Data Model

User
- name (string, required, min length 2)
- email (string, required, unique)
- password (string, required, min length 8)
- is_artists (boolean, required)

Graffiti
- artist_name(string, not required)
- city(string, required)
- street(string, required)
- number(string, not required)
- postal_code(string, not required)
- location(string, required)
- style(string, required, enum:['unkown', 'tags', '3d', 'bombing',   'bubbles', 'blockbuster', 'realism', 'icons', 'trash', 'abstract'],default:'unknown')
- description(string, required, min/max_length 2/200)
- image(file, required)
- status(string, required, enum:['exists', 'trampled', 'cleaned up'], default:'exists') 
- spray_brand(string, not required)
- color(string, not required)

### Components
![alt components](./ .png) <=// añadir imagen;
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