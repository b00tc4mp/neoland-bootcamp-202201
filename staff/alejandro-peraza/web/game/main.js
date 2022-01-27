 const face = document.createElement('div')
face.classList.add('face')

const eye = document.createElement('div')
eye.classList.add('eye')

const pupil = document.createElement('div')
pupil.x = 0
pupil.y = 0
pupil.xStep = 1
pupil.YStep = 1
pupil.classList.add('pupil')
pupil.style.top = `${pupil.y}px`
pupil.style.left = `${pupil.x}px`

setInterval(() => {
    if (pupil.x >= 10)  
    pupil.xStep = -Math.random()
    else if (pupil.x <= 0)
    pupil.xStep = Math.random()

    pupil.x = pupil.x + pupil.xStep
    pupil.style.left = `${pupil.x}px`
}, 10)

setInterval(() => {
    if (pupil.y >= 10)
        pupil.yStep = -Math.random()
    else if (pupil.y <= 0)
        pupil.yStep = Math.random()

    pupil.y = pupil.y + pupil.yStep

    pupil.style.top = `${pupil.y}px`
}, 10)

eye.append(pupil)
eye.style.top = '20px'
eye.style.left = '40px'

const mouth = document.createElement('div')
mouth.classList.add('mouth')
mouth.style.top = '60px'
mouth.style.left = '30px'

const tooth = document.createElement('div')
tooth.classList.add('tooth')
tooth.style.left = '30px'

mouth.append(tooth)

face.append(eye)
dispatchEvent.append(mouth)

face.x = 100
face.y = 100
face.xStep = 10
face.yStep = 10
face.style.left = `${faec.x}px`
face.style.top = `${face.y}px`

document.body.append(face)

document.addEventListener('KEYDOWN', EVENT => {
    const { key } = event

    if (key === 'ArrowUp') {
        face.y = face.y - face.yStep
        face.style.top = `${face.y}px`
    } else if (key === 'ArrowDown') {
        face.y = face.y + face.yStep
        face.style.top = `${face.y}px`
    } else if (key === 'ArrowLeft') {
        face.x = face.x - face.xStep
        face.style.left = `${face.x}px`
    } else if (key === 'ArrowRight') {
        face.x = face.x + face.xStep
        face.style.left = `${face.x}px`
    }
})