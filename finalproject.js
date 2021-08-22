//My wagon wheel

let positionX;
let positionY;
let AngleRotation = 0;
let SinInitAngle = 0;
let SizePattern = 0;
let CosInitAngle = 0;
let SizeOrangePattern = 0;
let AmountDetails = 16;
let AngleSpace;

////RandomColors from the center

let AngleMovement = 0;
let SizeNewFigure = 0;
let RandomColor;

function setup() {
  createCanvas(600, 600);

  positionX = width / 2;
  positionY = height / 2;
  angleMode(DEGREES);
  AngleSpace = 360 / AmountDetails;
  rectMode(CENTER);
}

function draw() {
  background(199, 239, 0);

  //Big red wheel
  push();
  fill(227, 23, 10);
  translate(positionX, positionY);
  rotate(AngleRotation);
  ellipse(0, 0, 500, 520); //To create the movement effect: Use posx(0), posY(0) and a different value for width or height.
  pop();

  //Mid orange wheel
  stroke("white");
  strokeWeight(5);
  fill(236, 164, 0);
  ellipse(positionX, positionY, 350, 350);

  //Orange circle movement

  push();
  let CosFigure = cos(CosInitAngle);
  CosInitAngle = CosInitAngle + 5;
  SizeOrangePattern = map(CosFigure, -1, 1, 0, 350);
  ellipse(width / 2, height / 2, SizeOrangePattern);
  pop();

  //Little white wheel

  //frameRate(2);
  blendMode(DIFFERENCE);
  fill(255, 255, 255);
  ellipse(positionX, positionY, 200, 200);

  //White circle movement

  /*push();
  let SenFigure = sin(SinInitAngle);
  //print(SenAngleFig);
  SinInitAngle = SinInitAngle + 5;
  SizePattern = map(SenFigure,-1,1,0,200);
  //ColorSenPattern = color(random(255),random(235),random(245),random(100));
  //frameRate(1);
  //fill(ColorSenPattern);
  ellipse(width/2,height/2,SizePattern);
  pop();
  */

  //RandomColorMovement

  push();
  for (let index = 0; index < 10; index++) {
    let ValueAngle = sin(AngleMovement * (index + 1));
    let Diameter = map(ValueAngle, -1, 1, 0, 400);
    RandomColor = color(random(255), random(235), random(245));
    frameRate(5);
    strokeWeight(5);
    stroke("white");
    fill(RandomColor);
    ellipse(width / 2, height / 2, Diameter);
  }

  pop();

  //Creating some cute details

  for (let index = 0; index < AmountDetails; index++) {
    push();
    translate(positionX, positionY);
    rotate(AngleSpace * index);
    rect(200, 0, 25);
    ellipse(100, 0, 50, 10);
    ellipse(50, 0, 10, 50);
    pop();
  }

  AngleRotation = AngleRotation + 5;
}
