const nombre1 = ['Judith', 'Paca', 'Isi'];
const nombre2 = ['Eustaquia', 'Esther', 'Colero'];

function concat (array, array2){
   const newArray =[]
   let index = 0
   
    for(let i = 0; i < array.length; i++)
     newArray[index] = array + ', ' + array2; {  
         index++
    }  return newArray
}

console.log(concat(nombre1, nombre2))

//[ 'Judith,Paca,Isi, Eustaquia,Esther,Colero' ]




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



/* const nombre1 = ['Judith', 'Paca', 'Isi'];
const nombre2 = ['Eustaquia', 'Esther', 'Colero'];

function concat (array, array2){
   const newArray=[]
   
    for(let i = 0; i < array.length; i++)
     newArray[i] = array + ', ' + array2; {  
    } 

    return newArray
}

console.log(concat(nombre1, nombre2))
 */
