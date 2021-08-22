let posX;
let posY;

let numElements = 16;
let angleSpace;

function setup() {
  createCanvas(400, 400);

  posX = width / 2;
  posY = height / 2;

  angleMode(DEGREES);

  angleSpace = 360 / numElements;

  rectMode(CENTER);
}

function draw() {
  background(220);

  for (let index = 0; index < numElements; index++) {
    push();
    translate(posX, posY);
    rotate(angleSpace * index);
    rect(100, 0, 25);

    ellipse(100, 0, 50, 10);
    ellipse(50, 0, 10, 50);
    pop();
  }
}
