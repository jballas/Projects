// variables //
width = 600;
height = 600;

posX = width/2;
posY = width/2;

pathWidth = 20;
pathPosX = width/2

function setup() {
  createCanvas( 600, 600);
}

function draw() {
  background(200);

  print(posY);

  // path //
  strokeWeight(5);
  stroke(0);
  line(pathPosX - pathWidth, 0, width/2 - pathWidth, height);
  line(pathPosX + pathWidth, 0, width/2 + pathWidth, height);

  // player //
  push();
  noStroke();
    playerDisplay(posX,posY);
  pop();


// player movement //

  if ( mouseIsPressed) {
    posY += 5;
  }

  if (posY > height){
      posY = 0;
  }

}

function playerDisplay(x,y){

  fill('rgb(0,0,255)');
  rectMode(CENTER);
  rect(x, y, 15, 15);

}
