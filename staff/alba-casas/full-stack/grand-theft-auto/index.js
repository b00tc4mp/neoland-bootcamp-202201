const thief = {
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

  let steps = randomInteger(0, 5);
  thief.x += steps;

  let road = "";

  if (thief.x < 10) road = " ".repeat(thief.x) + thief.icon;
  else {
    let steps = randomInteger(0, 5);
    police.x += steps;

    if (police.x >= thief.x) {
      console.log("police wins");
      clearInterval(intervalId);
    } else if (thief.x >= 100) {
      console.log("thief wins");
      clearInterval(intervalId);
    } else if (police.x < thief.x) {
      road =
        " ".repeat(police.x) +
        police.icon +
        " ".repeat(thief.x - police.x) +
        thief.icon;
    }
  }
  console.log(road);
}, 100);
