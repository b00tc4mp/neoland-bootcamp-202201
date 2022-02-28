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

    const pupil = new Shape('black', width / 12, height / 10)

    let xDir
    let yDir

    const xLimit = width / 20
    const yLimit = height / 14

    setInterval(() => {
        if (pupil.x <= 0)
            xDir = 'right'
        else if (pupil.x >= xLimit)
            xDir = 'left'

        if (xDir === 'right')
            pupil.moveRight(Math.random())
        else if (xDir === 'left')
            pupil.moveLeft(Math.random())

        if (pupil.y <= 0)
            yDir = 'down'
        else if (pupil.y >= yLimit)
            yDir = 'up'

        if (yDir === 'down')
            pupil.moveDown(Math.random())
        else if (yDir === 'up')
            pupil.moveUp(Math.random())
    }, 100)

    const eye = new Shape('yellow', width / 7, height / 5)
    eye.moveDown(height / 5)
    eye.moveRight(width / 1.4)

    eye.add(pupil)

    const mouth = new Shape('black', width / 3, height / 8)
    mouth.moveDown(height / 2)
    mouth.moveRight(width / 1.5)

    const tooth = new Shape('white', width / 18, height / 6)
    tooth.moveRight(width / 5)

    mouth.add(tooth)

    this.tooth = tooth

    const tooth2 = new Shape('white', width / 18, height / 6)
    tooth2.moveRight(width / 7)

    mouth.add(tooth2)

    this.tooth2 = tooth2

    const ear = new Shape(color, width / 2, height / 2)
    ear.moveRight(width / 4)
    ear.moveDown(height / 10)
    ear.moveUp(height /1.7)
    

    const nose = new Shape('black', width = 30, height = 30)
    nose.container.style.borderRadius = '50%'

    nose.moveDown( height / 0.9)
    nose.moveRight(width / 1.5)

    const nose2 = new Shape('black', width = 30, height = 30)
    nose2.container.style.borderRadius = '50%'

    nose2.moveDown( height / 0.9)
    nose2.moveRight(width / 0.3)

    this.add(eye)
    this.add(mouth)
    this.add(ear)
    this.add(nose)
    this.add(nose2)

    const { style } = this.container

    style.cursor = 'pointer'
}

Roboloko.prototype = Object.create(Shape.prototype)
Roboloko.prototype.constructor = Roboloko

Roboloko.prototype.toggleTooth = function () {
    const { style } = this.tooth.container

    if (style.backgroundColor === 'white')
        style.backgroundColor = 'black'
    else
        style.backgroundColor = 'white'
}


