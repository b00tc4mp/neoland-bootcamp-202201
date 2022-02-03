const animals = ['pigs', 'goats', 'sheep'];


function push (animal, newarr) {

 animal[animal.length] = newarr
 
 return animal.length


}


console.log(push(animals, "tiger"));
console.log(animals);
    

