const nombre1 = ['Judith', 'Paca', 'Isi'];
const nombre2 = ['Eustaquia', 'Esther', 'Colero'];

function concat (array, array2){
   const newArray =[]
   let index = 0
   
    for(let i = 0; i < array.length; i++) {
     newArray[index]= array[i]; 
         index++
    }  
    
    for(let i = 0; i < array.length; i++) {
     newArray[index] = array2[i]; 
         index++
            
    }   return newArray 
   
} 

console.log(concat(nombre1, nombre2))
console.log(concat(nombre2, nombre1))


// segunda forma de hacerlo


const nombre1 = ['Judith', 'Paca', 'Isi'];
const nombre2 = ['Eustaquia', 'Esther', 'Colero'];


function concat (array, array2) {
    const newArray = []

    for(let i = 0; i < array.length; i++) {
        newArray[newArray.length] = array[i]
        // ponme en la posicion 0 = el primer item del array 3
    }

    for(let i = 0; i < array2.length; i++) {
        newArray[newArray.length] = array2[i]
          // ponme en la posicion 0 = el primer item del array 3
    }
    return newArray
 
}

console.log(concat(nombre1, nombre2))
console.log(concat(nombre2, nombre1)) 


// tercera Forma de hacerlo









// Como hacer Trampas

const nombre1 = ['Judith', 'Paca', 'Isi'];
const nombre2 = ['Eustaquia', 'Esther', 'Colero'];


function newConcat(array, array2){
    return [...array, ...array2]
}

console.log(newConcat(nombre1,nombre2))







// Errores y procesoo 

    
// new array = array1 + array2


//[ 'Judith,Paca,Isi,Eustaquia,Esther,Colero' ]

// [ 'Judith', 'Paca', 'Isi', 'Eustaquia', 'Esther', 'Colero' ]


/* const nombre1 = ['Judith', 'Paca', 'Isi'];
const nombre2 = ['Eustaquia', 'Esther', 'Colero'];

function concat (array, array2){
    newArray=[]
    for(let i = 0; i < array.length; i++)
     newArray[i] = array[i] + ' ' + array2[i]; {
         return newArray
     }
}

console.log(concat(nombre1, nombre2))
 */



/* ['JudithEustaquia', 'PacaEsther', 'IsiColero'];



function concat (array, array2){
   const newArray=[]
   
    for(let i = 0; i < array.length; i++)
     newArray[i] = array + ', ' + array2; {  
    } 

    return newArray
}

console.log(concat(nombre1, nombre2))
 */



