function Shape(color, width, height) {
  const container = document.createElement("div");

  const { style } = container;

  style.position = "absolute";
  style.width = `${width}px`;
  style.height = `${height}px`;
  style.backgroundColor = color;
  style.transition = "all 0.6s";

  this.x = 0;
  this.y = 0;

  style.top = `${this.y}px`;
  style.left = `${this.x}px`;

  this.container = container;
}

Shape.prototype.moveLeft = function (step) {
  this.x = this.x - step;

  this.container.style.left = `${this.x}px`;
};

Shape.prototype.moveRight = function (step) {
  this.x = this.x + step;

  this.container.style.left = `${this.x}px`;
};

Shape.prototype.moveUp = function (step) {
  this.y = this.y - step;

  this.container.style.top = `${this.y}px`;
};

Shape.prototype.moveDown = function (step) {
  this.y = this.y + step;

  this.container.style.top = `${this.y}px`;
};

Shape.prototype.add = function (shape) {
  this.container.append(shape.container);
};

Shape.prototype.reset = function (x, y) {
  this.x = x;
  this.y = y;
  this.container.style.left = `${x}px`;
  this.container.style.top = `${y}px`;
};

function Roboloko(color, width, height) {
  Shape.call(this, color, width, height);
  const iris = new Shape("black", 20, 20);
  iris.container.style.borderRadius = "50%";
  iris.moveDown(15);
  iris.moveRight(15);

  const pupil = new Shape("#469C8B", 50, 50);
  pupil.container.style.borderRadius = "50%";
  pupil.moveDown(50);
  pupil.moveRight(50);
  pupil.add(iris);

  const eyelid = new Shape("#94a02b", 150, 150);
  eyelid.container.style.zIndex = "3";
  eyelid.container.style.transition = "0.1s ease-out";
  eyelid.moveUp(130);

  const eye = new Shape("white", 150, 150);
  eye.container.style.borderRadius = "50%";
  eye.container.style.overflow = "hidden";

  eye.moveDown(30);
  eye.moveRight(80);

  eye.add(eyelid);
  eye.add(pupil);

  const mouth = new Shape("black", 150, 20);
  mouth.moveDown(height / 1.4);
  mouth.moveRight(width / 4);

  this.add(eye);
  this.add(mouth);

  this.mouth = mouth;
  this.pupil = pupil;
  this.eyelid = eyelid;

  this.container.style.borderRadius = "100%";
  this.container.style.position = "relative";
}

Roboloko.prototype = Object.create(Shape.prototype);
Roboloko.prototype.constructor = Roboloko;
