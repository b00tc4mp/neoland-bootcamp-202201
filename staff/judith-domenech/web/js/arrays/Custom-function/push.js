const animals = ['pigs', 'goats', 'sheep'];

const push = (array, callback) =>{  
    const newArray = []
   
    for (let i = 0; i < array.length; i++){
    const element = array[i] 
        if(callback(element) === true) {
            newArray.push(element)
        }
}
return newArray
}

const results = push(animals, animal =>{ 
    if(animals.length < 2) {
        return true
    }

})



