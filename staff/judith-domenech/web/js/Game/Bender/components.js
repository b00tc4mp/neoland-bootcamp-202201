
function Shape(color, width, height) {
    const container = document.createElement('div')
    

    const { style } = container

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

function Roboloko(color, width, height) {
    Shape.call(this, color, width, height)

   
    const pupil = new Shape('black',  10, 10)
    const pupil2 = new Shape('black',  10, 10)

    let xDir
    let yDir

    const xLimit = 30
    const yLimit = 30


    setInterval(() => {
      if (pupil.x<= 30)
            xDir = 'right'
        else if (pupil.x  >= xLimit)
            xDir = 'left'
        if (xDir === 'right')
            pupil.moveRight(Math.random())
        else if (xDir === 'left')
            pupil.moveLeft(Math.random()) 
           
       if (pupil.y >= 0)
            yDir = 'down'
        else if (pupil.y >= yLimit)
        if (yDir === 'down')
            pupil.moveDown(10)
        else if (yDir === 'up')
            pupil.moveUp(10) 

        if (pupil2.x<= 0)
            xDir = 'right'
        else if (pupil2.x  >= xLimit)
            xDir = 'left'
        if (xDir === 'right')
            pupil2.moveRight(Math.random())
        else if (xDir === 'left')
            pupil2.moveLeft(Math.random())
            

       if (pupil2.y <= 0)
            yDir = 'down'
        else if (pupil2.y >= yLimit)
        if (yDir === 'down')
            pupil2.moveDown(Math.random())
        else if (yDir === 'up')
            pupil2.moveUp(Math.random())
            
    }, 100)

    const eye = new Shape('black', 125, 55)
    eye.moveDown(15)
    eye.moveRight()
    eye.container.style.borderRadius = '40%'

    const rightEye = new Shape('lightyellow', 45, 45)
    rightEye.container.style.borderRadius = '50%'

    rightEye.moveDown(20)
    rightEye.moveRight(16)

    const leftEye = new Shape('lightyellow', 45, 45)
    leftEye.container.style.borderRadius = '50%'

    leftEye.moveDown(20)
    leftEye.moveRight(65)

    leftEye.add(pupil)
    rightEye.add(pupil2)

    const mouth = new Shape('lightyellow', 95, 37)
    mouth.moveDown(height / 1.55)
    mouth.moveRight(width / 9)

    const antenna = new Shape(color, 12, 70)
    antenna.moveRight(width/ 2.2)
    antenna.moveDown(- height/ 2.2)

    this.add(eye)
    this.add(mouth)
    this.add(antenna)
    this.add(rightEye)
    this.add(leftEye)

    const { style } = this.container

    style.cursor = 'pointer'
}

Roboloko.prototype = Object.create(Shape.prototype)
Roboloko.prototype.constructor = Roboloko


function Beer (color, width, height) {
    Shape.call(this, color, width, height)

    const mouth = new Shape('lightyellow', 73, 40)
    mouth.moveDown(height / 3)
    mouth.moveRight(width / 90)
    

    const antenna = new Shape(color, 30, 55)
    antenna.moveRight(width/ 3.4)
    antenna.moveDown(- height/ 2.4)
    
    
    this.add(antenna)
    this.add(mouth)
   

    const { style } = this.container

    style.cursor = 'pointer'
}

Beer.prototype = Object.create(Shape.prototype)
Beer.prototype.constructor = Beer


