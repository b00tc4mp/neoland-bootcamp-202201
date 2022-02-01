function Shape(color, width, height, borderRadius) {
    const container = document.createElement('div')
    const { style } = container

    

    style.position = 'absolute'
    style.width = `${width}px`
    style.height = `${height}px`
    style.backgroundColor = color
    style.borderRadius = `${borderRadius}%`

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

function Sunny(color, width, height, borderRadius) {
    Shape.call(this, color, width, height, borderRadius)
    
    
    const eye1 = new Shape('white', width / 5, height / 5, 40)
    eye1.moveDown(height / 4)
    eye1.moveRight(width / 5)
    
    
    const pupil1 = new Shape('green', width / 10, height / 10, 40)
    pupil1.moveDown(height / 0)
    pupil1.moveRight(width / 20)
    
    
    const eye2 = new Shape('white', width / 5, height / 5, 40)
    eye2.moveDown(height / 4)
    eye2.moveRight(width / 1.5)
    

    const pupil2 = new Shape('green', width / 10, height / 10, 40)
    pupil2.moveDown(height / 0)
    pupil2.moveRight(width / 20) 
    


    const mouth = new Shape('black', width / 3, height / 5, 40)
    mouth.container.style.borderBottomLeftRadius = '100px 100px'
    mouth.container.style.borderBottomRightRadius = '100px 100px'
    mouth.moveDown(height / 1.5)
    mouth.moveRight(width / 3)


    this.add(eye1)
    eye1.add(pupil1)
    this.add(eye2)
    eye2.add(pupil2)
    this.add(mouth)
    //this.mouth = mouth

    const { style } = this.container

    style.cursor = 'pointer'
}

function Cloudy(color, width, height, borderRadius) {
    Shape.call(this, color, width, height, borderRadius)
    
    const anexo1 = new Shape(color, width, height, 30)
    anexo1.moveLeft(width / 1.2)
    anexo1.moveDown(height / 6)
    
    const anexo2 = new Shape(color, width, height, 30)
    anexo2.moveRight(width / 1.2)
    anexo2.moveDown(height / 5)
    
    const anexo3 = new Shape(color, width, height, 30)
    anexo3.moveRight(width / 0.6)
    anexo3.moveUp(height / 0)
  
    /*
    const nose = new Shape('black', width / 20, height / 20)
    nose.container.style.borderRadius = '50%'
    nose.moveDown(eye1.x + height / 10)
    nose.moveRight(width / 3)
    */
    
    this.add(anexo1)
    this.add(anexo2)
    this.add(anexo3)
    
    const { style } = this.container
    
    style.cursor = 'pointer'
}

Sunny.prototype = Object.create(Shape.prototype)
Sunny.prototype.constructor = Sunny

Cloudy.prototype = Object.create(Shape.prototype)
Cloudy.prototype.constructor = Cloudy

/*
Cloudy.prototype.toggleTooth = function () {
    const { style } = this.tooth.container

    if (style.backgroundColor === 'white')
        style.backgroundColor = 'black'
    else
        style.backgroundColor = 'white'
}*/
