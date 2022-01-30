const toggleLight = () => { // brightness

    const background = document.body
    const contrastElement = document.querySelector('h1')
    //  modulo = v(x2 + y2)
    if (400 > Math.sqrt((sun.y - cloud.y)**2 + (sun.x - cloud.x)**2 )) {
        background.style.backgroundColor = 'black'
        contrastElement.style.color = 'white'
    }
    else /*if (sun.y - cloud.y > 200 || sun.y - cloud.y < -200)*/ {
        background.style.backgroundColor = 'white'
        contrastElement.style.color = 'black'
    }
}




// Si están  el sol y la luna a 200px blanco y si no negro



// const toggleLight = () => { // brightness

//     const background = document.body
//     const contrastElement = document.querySelector('h1')
//     if (sun.y === 520) {
//         background.style.backgroundColor = 'black'
//         contrastElement.style.color = 'white'
//     }
//     else if (sun.y === 100) {
//         background.style.backgroundColor = 'white'
//         contrastElement.style.color = 'black'
//     }
// }