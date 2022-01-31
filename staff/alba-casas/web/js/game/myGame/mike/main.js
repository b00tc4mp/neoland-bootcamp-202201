const mike = new Roboloko("#D0E518", 300, 300);

document.querySelector(".robot__wrapper").append(mike.container);

const input = document.querySelector(".robot__input");

input.addEventListener("focus", (event) => {
  mike.pupil.moveDown(30);
  mike.pupil.moveLeft(20);

  mike.pupil.moveRight(event.target.value.length * 2);

  mike.mouth.container.style.height = "60px";
  mike.mouth.container.style.borderBottomLeftRadius = "100%";
  mike.mouth.container.style.borderBottomRightRadius = "100%";
  mike.mouth.container.style.borderTopLeftRadius = "30%";
  mike.mouth.container.style.borderTopRightRadius = "30%";
});

input.addEventListener("blur", () => {
  mike.pupil.reset(50, 50);
  mike.mouth.container.style.height = "20px";
  mike.mouth.container.style.borderRadius = "0%";
  mike.mouth.container.style.width = "150px";
});

input.addEventListener("keydown", (event) => {
  const key = event.keyCode;
  const isKeyDelete = key === 8;
  const isKeyNumber = key >= 48 && key <= 57;
  const isKeyLetter = (key >= 65 && key <= 90) || (key >= 97 && key <= 122);
  const isKeySpace = key === 32;
  const isKeyEnter = key === 13;

  if (
    isKeyDelete &&
    event.target.value.length > 0 &&
    event.target.value.length < 20
  ) {
    mike.pupil.moveLeft(2);
  } else if (
    (isKeyNumber || isKeyLetter || isKeySpace) &&
    event.target.value.length < 20
  ) {
    mike.pupil.moveRight(2);
  } else if (isKeyEnter) {
    mike.mouth.container.style.borderRadius = "100%";
  }
});

setInterval(() => {
  mike.eyelid.moveDown(130);
  // espera 200ms y después sube el parpado de mike
  setTimeout(() => {
    mike.eyelid.moveUp(130);
  }, 200);
}, 3000);
