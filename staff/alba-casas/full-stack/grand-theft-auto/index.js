const thieve = {
  icon: "🚘",
  x: 0,
};

const police = {
  icon: "🚔️",
  x: 0,
};

const randomInteger = (min, max) =>
  min + Math.round((max - min) * Math.random());

let intervals = 0;

const intervalId = setInterval(() => {
  console.clear();

  let steps = randomInteger(0, 1);
  thieve.x += steps;

  steps = randomInteger(0, 5);
  police.x += steps;

  let road = "";

  if (thieve.x >= 0 && thieve.x <= 10)
    road = " ".repeat(thieve.x) + thieve.icon;
  else if (thieve.x >= 10)
    road =
      " ".repeat(police.x + 10) +
      police.icon +
      " ".repeat(thieve.x - 10) +
      thieve.icon;
  console.log(road);
}, 100);
