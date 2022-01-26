const frutas = ["guindas", "manzanas", "bananas"];

function bubbleSort(array) {
  let result = false;
  while (!result) {
    result = true;
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        result = false;
        const tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

console.log(bubbleSort(frutas));
