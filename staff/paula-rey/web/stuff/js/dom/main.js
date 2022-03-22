const box1 = document.querySelector('.box-1')
const box2 = document.querySelector('.box-2')
const box3 = document.querySelector('.box-3')

box1.addEventListener('click', function(event) {
    // event.stopPropagation()
    console.log('only if click here, do something')
    console.log(1, event.target)
}, false) // default is false -> bubbling, true -> use capturing

box2.addEventListener('click', function(event) {
    if(event.target === this)
        event.stopPropagation()
    console.log('always, do something')

    console.log(2, event.target)
}, true) // default is false -> bubbling, true -> use capturing

box3.addEventListener('click', function(event) {
    event.stopPropagation()
    console.log('then, if user click in this, do something')
    console.log(3, event.target)
}, false) // default is false -> bubbling, true -> use capturing