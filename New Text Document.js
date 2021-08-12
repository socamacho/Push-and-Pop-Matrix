let MyAngle = 0;
let MySize = 0;
let RandomColor;

function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
  
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  for(let index = 0; index < 10; index++){
      let Valor = sin(MyAngle*(index+1));
    let Diametro = map(Valor,-1,1,0,100);
    RandomColor= color(random(255),random(235),random(245));
  frameRate(5);
  fill(RandomColor);
  ellipse(200,200,Diametro)
   
      
      }
  
  /*let MySen = sin(MyAngle);//Cambiar por cos
  print(MySen);*/
  
  MyAngle = MyAngle + 6;
  //MySize = map(MySen,-1,1,0,100);
  
  
  
}