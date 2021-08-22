let numColumns = 10;
let numRows = 10;

let myAngle = 0;

let mySpeed = 1;

let refColorPalette = ["#8ecae6", "#219ebc", "#023047", "#ffb703", "#fb8500"];

let myColorPalette = [];

function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);

  rectMode(CENTER);
  noFill();

  strokeWeight(0.01);
  //frameRate(1);

  let numElements = myColorPalette.length;
  print("Number of elements: " + numElements);

  for (let column = 0; column < numColumns; column++) {
    for (let row = 0; row < numRows; row++) {
      let randValue = int(random(0, refColorPalette.length));
      let randomColor = refColorPalette[randValue];

      myColorPalette.push(randomColor);
    }
  }

  numElements = myColorPalette.length;
  print("Number of elements: " + numElements);
}

function draw() {
  //background(220);

  let posX = 0;
  let posY = 0;
  let spaceX = 50;
  let spaceY = 50;
  let mySize = 150;

  for (let column = 0; column < numColumns; column++) {
    for (let row = 0; row < numRows; row++) {
      push();
      translate(posX + spaceX * column, posY + spaceY * row);
      rotate(myAngle);

      let thisColor = myColorPalette[column * numColumns + row];

      stroke(thisColor);
      rect(0, 0, mySize);
      pop();
    }
  }
  myAngle = myAngle + mySpeed;
}
