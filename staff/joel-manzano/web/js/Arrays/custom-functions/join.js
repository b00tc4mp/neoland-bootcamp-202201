// join() te devuelve el array como una cadena y agrega una coma por cada elemento(predeterminado, se le puede añadir un "and" por ejem)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join();

// devuelve: Banana,Orange,Apple,Mango

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");

// devuelve: Banana and Orange and Apple and

