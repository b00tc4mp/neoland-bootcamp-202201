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


And as Admin you can:

- Register product
- Update product
- Delete product
- Search products
- See product details


### Use cases

![alt use cases user and admin](./images/use-cases.png)

### Flows

![alt flow-activity](./images/flow-activity.png)

### User Interface (UI)

![alt main views](./images/main-views.png)


## Technical Description

### Blocks

![alt blocks diagram](./images/blocks.png)

### Data Model

#### Schemas

user
- name {
    type: String,
    required: true,
    minlength: 2
},

- email{
    type: String,
        required: true,
        unique: true
    },

- password: {
        type: String,
        required: true,
        minlength: 8
    },

- role: {
        type: String,
        required: true,
        enum : ['user','admin']
    }



product
- name: {
        type: String,
        required: true
    },

- image: {
        type: String,
        required: true
    },

- size: {
        type: String,
        required: true
    },

- color: {
        type: String,
        required: true
    },

- price: {
        type: Number,
        required: true
    },

 - description: {
        type: String,
        required: true
    }



#### ER Diagram

![alt data-model ER diagram](./images/databaseERdiagram.png)

### Dreams Factory 0.1 (Future version incoming....)

#### TODO's
Use cases as User:
- Add products to cart 
- Buy products

Use cases as Admin:
- view order list




### Technologies

![alt Javascript logo](./images/logosVarios.png)

![alt React logo](./images/react-logo.png)

![alt Node Js logo](./images/nodejs-logo.png)

![alt Express logo](./images/express-logo.png)

![alt Mongo DB logo](./images/mongodb-logo.jpg)
