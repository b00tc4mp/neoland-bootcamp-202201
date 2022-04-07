// Receta:
// 1 - Leer la documentación
// 2 - Crear el esquema inicial del fichero
// 3 - Crear datos
// 4 - Crear parametros y escribir que esperamos que devuelva la función
// 5 - Crear los expected output que necesitemos para crear la funcion
// 6 - Escribir en lenguaje humano como resolveríamos nosotros este problema
// 7 - Traducir el lenguaje humano a lenguaje javascript
// 8 - En caso de que una línea de código no se comporte como yo espero, debuggear.

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

function concat(array1, array2) {
  const array3 = [];
  for (let i = 0; i < array1.length; i++) {
    array3[array3.length] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    array3[array3.length] = array2[i];
  }
  return array3;
}
// Expected output: ["a", "b", "c", "d", "e", "f"]
// Expected output: ["d", "e", "f", "a", "b", "c"]

// implementacion
// 0 - Comprar la sala 3
// 1- ir a la sala 1 y cogemos el contenido (coger primero el cd1... luego el cd2... cd3)
// 2 cuando terminemos con el contenido de la sala 1, ir a la sala 2
// 3 coger el contenido de la sala 2 y coger uno a uno los cds a la nueva sala.
// 4 ordenar uno a uno después de los primeros.
// 5 Cuando termine el trabajo, ir al jefe a decirle que he terminado.

function combineArray(array1, array2) {
  return [...array1, ...array2];
}


function concat2(array1, array2) {
  const array3 = [];
  let index = 0;

  for (let i = 0; i < array1.length; i++) {
    array3[index] = array1[i];
    index++;
  }
  for (let i = 0; i < array2.length; i++) {
    array3[index] = array2[i];
    index++;
  }
  return array3;
}

console.log(combineArray(array1, array2));
