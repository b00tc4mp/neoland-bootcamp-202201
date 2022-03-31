# Dreams Factory project

## Introduction
![alt Dreams Factory](https://media.giphy.com/media/mCydWp2Slwt8KugwmX/giphy.gif)


Dreams Factory is the first version of an e-commerce project, 
For who wanna buy an artisan product, original and hand made :)
Mainly there are artisan products like leather bags, necklaces, bracelets and lot of different
hand made products.


## Functional Description

### Activities 
As User you can:

- Search products
- See product details (construction material, measures, etc...)
- Add products to cart (TODO)
- Buy products (TODO)

And as Admin you can:

- Register product
- edit product
- delete product
- search products
- see product details
- view order list (TODO)

### Use cases

![alt use cases user and admin](./images/use-cases.png)

### Flows

![alt flow-activity](./images/flow-activity.png)

### User Interface (UI)

![alt main views](./images/main-views.png)

#### Admin views

TODO

## Technical Description

### Blocks

![alt blocks diagram](./images/blocks.png)

### Data Model

#### Schemas

user
- name (String, required, min length 2)
- email (String, required, unique)
- password (String, required)
- role (
    String,
    required,
    enum: ['user','admin']
    default: 'user'
    )
- cart (cart)
- orders ([order])

product
- name (String)
- size (String)
- color (String)
- price (Number)
- qty (Number)
- description (String)

cart
- items ([item])

item
- product (ObjectId)
- qty (Number)

order
- date (Date)
- cart (cart)


#### ER Diagram

![alt data-model ER diagram](./images/databaseERdiagram.png)

### Technologies

- JavaScript
- CSS
- HTML
- React
- Node.JS
- Express
- MongoDB