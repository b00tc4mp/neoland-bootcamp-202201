# TOPÁDEL

## Intro
<!-- TODO rebuild description -->
TOPÁDEL es una aplicación que decidí crear para mis amigos y yo. Como buenos aficionados al pádel, quedamos 2 o 3 veces por semana para jugar. Que mejor que crear los torneos en esta app y organizarnos mejor? :)

![alt](https://media.giphy.com/media/vCGuFRLfue4H8LUEqa/giphy.gif)


## Funcional descripcion



### Activities


- Crear Torneos 
- Modificar la información de los torneos creados(descripción, cuidad, fecha...)
- Buscar Torneos por Título, cuidad y día
- Ver los detalles de un torneo
- Borrar Torneos



### Use Cases

![alt](./images/use-cases-topadel.png)


### Flows
![alt](./images/flow-diagram.png)


## technical Descripcion

### Blocks

![alt](./images/blocks.jpg)

### Data Model

![alt](./images/main-views-topadel.png)

#### Schemas

user
- name (string, required, min length 15)
- role: (string, 'admin' or 'user', default 'user')
- email (String, required, unique)
- password (string, required, min length 8)

tournament
- user (objectId)
- title (string)
- description (String, required)
- location (String, required)
- image (string)
- date (Date, required) 

#### E/R Diagram

![alt](./images/database-er-topadel.png)


### TODO LIST
- Hacer Testing de Lógicas de server.
- Implementar un mejor feedback.
- Poder actualizar las fotos de los torneos.
- Añadir más funcionalidades para los usuarios: Inscribirse a Torneos y añadir favoritos.
