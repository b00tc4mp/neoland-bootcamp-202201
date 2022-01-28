// Leer la documentación
// Crear esquema Inicial
// Crear Datos
// Crear parametros y escribir que esperamos que devuelva la función
// Crear los expected outputs
// Escribimos en lenguaje humano como resolveriasmos nosotros este problema
// Traducir a codigo
// En caso de fallito debugger (in love)


const animals = ['pigs', 'goats', 'sheep', 'horse']


function push(array, value) {   
    array[array.length] = value
    return array.length
}

console.log(push(animals, 'dog' , 'vaca', ' pajarito'))


// ['pigs', 'goats', 'sheep', 'horse', 'dog'] no añade el resto de elemetos.




// Añade todos los elementos con la función aguments que ya viene dada.

const animals = ['pigs', 'goats', 'sheep', 'horse']


function push(array) {   

    for(let i = 1; i < arguments.length; i++){

   array[array.length] = arguments[i]
}
return array.length
}

console.log(push(animals, 'dog' , 'vaca', ' dorada '))
