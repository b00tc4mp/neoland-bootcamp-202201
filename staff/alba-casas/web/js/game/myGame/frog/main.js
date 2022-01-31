const filler = document.getElementById("filler");

let eyes = document.querySelectorAll(".eye");

document.body.addEventListener("mousemove", (event) => {
  eyes.forEach((eye) => {
    let eyeX = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let eyeY = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    var x = event.clientX;
    var y = event.clientY;

    let radian = Math.atan2(x - eyeX, y - eyeY);
    let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;

    eye.style.transform = "rotate(" + rotationDegrees + "deg)";
  });
});
