const names = ["Peter", "Laura", "Mike", "Jessica", "Wendy"];

// Una función A que recorra uno a uno un array
// La función A ejecuta otra función B con cada uno de los elementos
// La función A devuelve el elemnto cuando la función B lo decida

function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (callback(element)) return element;
  }
}

const peter = find(
  names,
  (element) => element === "Peter" || element === "Jessica"
);

// Una función A que recorra un array
// La función A recibe qué elemento tiene que devolver
// Cuando encuentra el elemento lo devuelve

function find(array, elToReturn) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === elToReturn) return element;
  }
}

const peter = find(names, "Peter");

// const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

// const find = (array, callback) => {

//     let res

//     for(let i = 0; i < array.length; i++) {

//         const element = array[i]

//         res = callback(element) ? element : undefined

//     }

//     return res

// }

// const mike = find(names, (element) => element === 'Mike')

// console.log(mike)
