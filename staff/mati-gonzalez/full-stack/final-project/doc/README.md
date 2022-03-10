# thyLemma

## Intro

![alt thyLemma Project](https://media.giphy.com/media/8YsBY5lro8sko/giphy.gif)

Ask & answer questions about philosophy while building prestige points.
In this app the user can post questions about philosophy, answer other users' questions and get prestige points while doing it. Prestige points will be needed to post your own questions. The user can also save their favorite questions to their "favorites" section and delete them as well.

## Functional Description

### Activities

- Add questions using prestige points
- add answers to questions posted by other users or by yourself
- add questions to favorites 
- delete questions from the 'favorites' section
- get prestige points by getting liked and reposted on the page
- consume prestige points by asking questions


### Use Cases
![alt Use Cases](./images/useCases.png)

#### add question
![alt addQuestionFlowChart](./images/addQuestionFlowChart.png)

#### add answer 
![alt answerQuestionFlowChart](./images/answerQuestionFlowChart.png)

#### add to favorites
![alt addToFavoritesFlowChart](./images/addToFavoritesFlowChart.png)

#### User Interface (UI)
<!-- TODO finish wireframes and link to docs -->
##### Main Views


## Technical Description

### Blocks
<!-- ![alt ](./images/blocks.jpg) -->

### Sequences

#### Register User

<!-- ![alt Use Cases](./images/register-sequence.jpg) -->

### Data Model

#### Schemas

 user
- name (string, required, min length 2)
- email (string, required, unique)
- password (string, required, min length 8)
- favQuestions ([object id], )
- prestigePoints (number, required)

question
- user (object id, required, unique)
- text (string)
- date (date)
- categories ([string])
- likes (number)

answer
- user (object id, required, unique)
- question (object id, required, unique)
- text (string)
- date (date, required)
- likes (number)

comment
- user (object id, required, unique)
- answer (object id, required, unique)
- text (string)
- date (date)
- likes (number)

![alt ER diagram](./images/ERD.png)


- ~~DONE ER diagram~~
- TODO Review with Ventu (20min)
- ~~DONE Description~~
- ~~DONE Link uses cases~~
- ~~DONE List of functional description~~
- ~~DONE Flows (post question, post comment, add favorites)~~
- TODO Wireframes (5hrs, prolly on weeknd)
- TODO Review with ux/ui student(1hr)
- TODO api logics (2hrs)
