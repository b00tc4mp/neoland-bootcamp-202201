const names = ['Peter', 'Laura', 'Mike', 'Jessica', 'Wendy']

const result = names.filter(word => word.length < 5)

console.log(result)






/*MDN:

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]*/

const colors = ['red', 'green', 'blue', 'purple', 'yellow', 'magenta', 'white', 'gray', 'tomato', 'navy', 'dodger', 'black', 'brown']

const filteredColors = colors.filter(color => color.startsWith('b'))

console.log(filteredColors)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const filteredNums = nums.filter(num => num < 6)

console.log(filteredNums)
