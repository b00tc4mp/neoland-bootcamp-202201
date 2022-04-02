let car;
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

  /* if (car1.length >= 100 && car2.length > car3.length) {
    clearInterval(intervalId);
    console.log("car 1 wins");
    console.log("car 2 second place");
    console.log("car 3 third place");
  } else if (car1.length >= 100 && car3.length > car2.length) {
    clearInterval(intervalId);
    console.log("car 2 wins");
    console.log("car 2 second place");
    console.log("car 3 third place");
  } else if (car2.length >= 100 && car1.length > car3.length) {
    clearInterval(intervalId);
    console.log("car 2 wins");
    console.log("car 1 second place");
    console.log("car 3 third place");
  } else if (car2.length >= 100 && car3.length > car1.length) {
    clearInterval(intervalId);
    console.log("car 2 wins");
    console.log("car 3 second place");
    console.log("car 1 third place");
  } else if (car3.length >= 100 && car3.length > car2.length) {
    clearInterval(intervalId);
    console.log("car 3 wins");
    console.log("car 1 second place");
    console.log("car 2 third place");
  } else if (car3.length >= 100 && car2.length > car3.length) {
    clearInterval(intervalId);
    console.log("car 3 wins");
    console.log("car 2 second place");
    console.log("car  third place");
  } else {
    console.log("there is a tie");
  } */
  if (car1.length >= 100 || car2.length >= 100 || car3.length >= 100) {
    console.clear();

    console.log(car1 + car1.length);
    console.log(car2 + car2.length);
    console.log(car3 + car3.length);

    const results = [car1, car2, car3].sort();
    console.log(
      `First Place: ${results[0].trim()}(${results[0].length})`,
      `Second Place: ${results[1].trim()}(${results[1].length})`,
      `Third Place: ${results[2].trim()} (${results[2].length})`
    );
    clearInterval(intervalId);
  }
}, 100);
