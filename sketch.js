let posX,posY;
let speedX,speedY;
let Ball = 50;
let BC = 100;
let Size = 50;

function setup() {
  createCanvas(480, 360);
  background(BC);
 
  posX = width/2;
  posY = height/2;
  speedX = 1.2;
  speedY = 1.2;
}

function draw() {
  rect(0,0,width,height);
  fill(BC);
  

  circle(posX,posY,Size);
  noStroke();
  fill(Ball);
  posX += speedX;
  posY += speedY;

  if(posX > width - 25 || posX < 25) {
    speedX *= -1.09;
    Ball = color(random(50,100),200,100);
    BC = color(random(100,255),random(60,255),random(30,255));
    circle(posX,posY,100);
    fill(BC);
  
  }
  if(posY > height-25 || posY < 25){
    speedY *= -1.09;
    Ball = color(random(80,200),20,100);
    BC = color(255);
    circle(posX,posY,100);
    fill(BC);
  }
  

  
}