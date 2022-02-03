// Leer la documentación
// Crear esquema Inicial
// Crear Datos
// Crear parametros y escribir que esperamos que devuelva la función
// Crear los expected outputs
// Escribimos en lenguaje humano como resolveriasmos nosotros este problema
// Traducir a codigo
// En caso de fallito debugger (in love)
const array1 = ['alice', 'beto', 'carlos'];
const array2 = ['diana', 'eduardo', 'fredd'];

function concat(array1, array2) {
    
    const newArray = []
    let index = 0;
    
    for( let i = 0; i < array1.length; i++){
        newArray[index] = array1[i]
        index++ 
    }
        
    for( let i = 0; i < array2.length; i++){
    newArray[index] = array2[i] 
    index++
    }

    return newArray
    
    
}



console.log(concat(array1, array2)) //Expected output: ("alice", "beto", "carlos", "diana", "eduardo" "fredd")
console.log(concat(array2, array1)) //Expected output: ("diana", "eduardo" "fredd", "alice", "beto", "carlos")

// implementacion
// 0- Crear sala 3
// 1- ir a la sala 1 y cogemos el contenido (coger primero el cd1... luego el cd2... cd3)
// 2 cuando terminemos con el contenido de la sala 1, ir a la sala 2
// 3 coger el contenido de la sala 2 y coger uno a uno los cds a la nueva sala.
// 4 ordenar uno a uno después de los primeros.
// 5 Cuando termine el trabajo, ir al jefe a decirle que he terminado.





