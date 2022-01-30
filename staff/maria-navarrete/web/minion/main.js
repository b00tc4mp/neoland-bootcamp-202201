setInterval(() => {
    let banana = new Banana('#ffe328',60, 80, Math.random() * document.querySelector('body').getBoundingClientRect().width-60, 0, 50)
    document.body.append(banana.container)
    setInterval(() => {
        banana.moveDown(Math.random())
    })
}, 2000);

const floorpos = document.body.querySelector('.floor').getBoundingClientRect().y

const minion = new Minion('#FCE029', 150, 200, 70, floorpos - 100, 35, 1)
document.body.append(minion.container)

document.addEventListener('keydown', event => {
    const { key } = event

    if (key === 'ArrowRight')
        minion.moveRight(10)
    if (key === 'ArrowLeft')
        minion.moveLeft(10)
})