// TODO list
// Escribo el esquema básico
// Invoco a la función (la llamo y le paso valores)
// Me escribo los test (expected output)
// Escribimos en comportamiento humano cómo lo solucionaríamos nosotros (paso paso)
// Tratamos de traducirlo a código
// En caso de falllo debugger


const animals = ['pigs', 'goats', 'sheep', 'horse']


function push(array, value) {
    array[array.length] = value
    return array
}

console.log(push(animals, 'dog'))


// expected output: ['pigs', 'goats', 'sheep', 'horse', 'dog']

// Pillo el valor que me dan, voy al sitio donde tengo que dejarlo,
// lo dejo en la última posición y ahora cuento cuantos valores hay en total en el array
// voy al jefe y le cuento cuantos libros hay 