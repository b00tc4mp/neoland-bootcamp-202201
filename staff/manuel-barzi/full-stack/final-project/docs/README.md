# Pyro Project

## Intro

TODO introduce the project, describe it

![alt Pyro Project](https://media0.giphy.com/media/kgVCrTi7qc46mm2N0j/giphy.gif?cid=ecf05e479qevpczcxlzc7cm0bk8w86lpxgexzbgg7efd8fzf&rid=giphy.gif&ct=g)

## Functional Description

TODO UML diagrams (use cases, flows, activities, etc)

### Use Cases

TODO use cases diagram

#### User Interface (UI)

TODO view wireframes

##### Main Views

![alt Main Views](./images/main-views.png)


## Technical Description

TODO UML diagrams (blocks, components, data model (entity diagram), etc)

### Blocks

TODO blocks diagram

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

TODO entity-relation diagram (E/R)