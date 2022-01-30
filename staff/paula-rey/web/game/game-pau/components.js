function Shape(color, width, height) {
    const container = document.createElement('div')
    const { style } = container
    container.style.borderRadius = '30%'

    style.position = 'absolute'
    style.width = `${width}px`
    style.height = `${height}px`
    style.backgroundColor = color

    this.x = 0
    this.y = 0

    style.top = `${this.y}px`
    style.left = `${this.x}px`

    this.container = container
}

Shape.prototype.moveLeft = function (step) {
    this.x = this.x - step

    this.container.style.left = `${this.x}px`
}

Shape.prototype.moveRight = function (step) {
    this.x = this.x + step

    this.container.style.left = `${this.x}px`
}

Shape.prototype.moveUp = function (step) {
    this.y = this.y - step

    this.container.style.top = `${this.y}px`
}

Shape.prototype.moveDown = function (step) {
    this.y = this.y + step

    this.container.style.top = `${this.y}px`
}

Shape.prototype.add = function (shape) {
    this.container.append(shape.container)
}

function Sunny(color, width, height) {
    Shape.call(this, color, width, height)
    
    const pupil1 = new Shape('green', width / 10, height / 10)
    pupil1.container.style.borderRadius = '30%'
    pupil1.moveDown(height / 0)
    pupil1.moveRight(width / 50)
  
    const pupil2 = new Shape('green', width / 10, height / 10)
    pupil2.container.style.borderRadius = '30%'
    pupil2.moveDown(height / 0)
    pupil2.moveRight(width / 50)
    
    /*   
    let xDir
    let yDir
    
    const xLimit = width / 15
    const yLimit = height / 15
    
    setInterval(() => {
        if (pupil1.x <= 0)
        xDir = 'right'
        else if (pupil1.x >= xLimit)
        xDir = 'left'
        
        if (xDir === 'right')
        pupil1.moveRight(Math.random())
        else if (xDir === 'left')
        pupil1.moveLeft(Math.random())
        
        if (pupil1.y <= 0)
        yDir = 'down'
        else if (pupil1.y >= yLimit)
        yDir = 'up'
        
        if (yDir === 'down')
        pupil1.moveDown(Math.random())
        else if (yDir === 'up')
        pupil1.moveUp(Math.random())
    }, 100)
    
    setInterval(() => {
        if (pupil2.x <= 0)
        xDir = 'right'
        else if (pupil2.x >= xLimit)
        xDir = 'left'
        
        if (xDir === 'right')
        pupil2.moveRight(Math.random())
        else if (xDir === 'left')
        pupil2.moveLeft(Math.random())
        
        if (pupil2.y <= 0)
        yDir = 'down'
        else if (pupil2.y >= yLimit)
        yDir = 'up'
        
        if (yDir === 'down')
        pupil2.moveDown(Math.random())
        else if (yDir === 'up')
        pupil2.moveUp(Math.random())
    }, 100)
    */
   
   const eye1 = new Shape('white', width / 5, height / 5)
   eye1.container.style.borderRadius = '30%'
   eye1.moveDown(height / 4)
   eye1.moveRight(width / 5)
   
   eye1.add(pupil1)
   
   const eye2 = new Shape('white', width / 5, height / 5)
   eye2.container.style.borderRadius = '30%'
   eye2.moveDown(height / 4)
   eye2.moveRight(width / 1.5)
   
   eye2.add(pupil2)
   

   /*
   const mouth = new Shape('black', width / 2, height / 5)
   mouth.moveDown(height / 1.7)
   mouth.moveRight(width / 3)
   */

  /*
  const tooth = new Shape('white', width / 10, height / 6)
  tooth.moveRight(width / 3)
  
  mouth.add(tooth)
  
  this.tooth = tooth
    */

    /*
    const nose = new Shape('black', width / 20, height / 20)
    nose.container.style.borderRadius = '50%'

    nose.moveDown(eye1.x + height / 10)
    nose.moveRight(width / 3)
    */

    this.add(eye1)
    this.add(eye2)
    //this.add(mouth)
    //this.add(nose)

    const { style } = this.container

    style.cursor = 'pointer'
}

function Cloudy(color, width, height) {
    Shape.call(this, color, width, height)

    const pupil2 = new Shape('black', width / 10, height / 10)

    let xDir
    let yDir

    const xLimit = width / 10
    const yLimit = height / 10

    setInterval(() => {
        if (pupil2.x <= 0)
            xDir = 'right'
        else if (pupil2.x >= xLimit)
            xDir = 'left'

        if (xDir === 'right')
            pupil2.moveRight(Math.random())
        else if (xDir === 'left')
            pupil2.moveLeft(Math.random())

        if (pupil2.y <= 0)
            yDir = 'down'
        else if (pupil2.y >= yLimit)
            yDir = 'up'

        if (yDir === 'down')
            pupil2.moveDown(Math.random())
        else if (yDir === 'up')
            pupil2.moveUp(Math.random())
    }, 100)

    const eye1 = new Shape('white', width / 5, height / 5)
    eye1.moveDown(height / 5)
    eye1.moveRight(width / 2.5)

    eye1.add(pupil2)

    /*
    const mouth = new Shape('black', width / 2, height / 5)
    mouth.moveDown(height / 1.7)
    mouth.moveRight(width / 3)
    */
    /*
    const tooth = new Shape('white', width / 10, height / 6)
    tooth.moveRight(width / 3)

    mouth.add(tooth)

    this.tooth = tooth
    */

   const anexo1 = new Shape(color, width, height)
   anexo1.moveLeft(width / 1)
   anexo1.moveDown(height / 5)
   
   const anexo2 = new Shape(color, width, height)
   anexo2.moveRight(width / 1)
   anexo2.moveDown(height / 5)

   const anexo3 = new Shape(color, width, height)
   anexo3.moveRight(width / 0.5)
   anexo3.moveUp(height / 0)

    /*
    const nose = new Shape('black', width / 20, height / 20)
    nose.container.style.borderRadius = '50%'

    nose.moveDown(eye1.x + height / 10)
    nose.moveRight(width / 3)*/

    this.add(eye1)
    //this.add(mouth)
    this.add(anexo1)
    this.add(anexo2)
    this.add(anexo3)
    //this.add(nose)

    const { style } = this.container

    style.cursor = 'pointer'
}

Sunny.prototype = Object.create(Shape.prototype)
Sunny.prototype.constructor = Sunny

Cloudy.prototype = Object.create(Shape.prototype)
Cloudy.prototype.constructor = Cloudy

/*
Sunny.prototype.toggleTooth = function () {
    const { style } = this.tooth.container

    if (style.backgroundColor === 'white')
        style.backgroundColor = 'black'
    else
        style.backgroundColor = 'white'
}*/