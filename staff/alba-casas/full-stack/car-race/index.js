let car1 = "🚘";
let car2 = "🚖";
let car3 = "🚔️";

const randomInteger = (min, max) =>
  min + Math.round((max - min) * Math.random());

const intervalId = setInterval(() => {
  console.clear();

  let steps;

  steps = randomInteger(0, 5);
  car1 = " ".repeat(steps) + car1;
  console.log(car1);

  steps = randomInteger(0, 5);
  car2 = " ".repeat(steps) + car2;
  console.log(car2);

  steps = randomInteger(0, 5);
  car3 = " ".repeat(steps) + car3;
  console.log(car3);

  if (car1.length >= 100) {
    clearInterval(intervalId);
    console.log("car 1 wins");
  } else if (car2.length >= 100) {
    clearInterval(intervalId);
    console.log("car 2 wins");
  } else if (car3.length >= 100) {
    clearInterval(intervalId);
    console.log("car 3 wins");
  }
}, 100);
