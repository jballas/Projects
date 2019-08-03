
function setup() {
  createCanvas( 500, 500);
}

function draw() {
  background(200);
  posX = width/2;
  posY = width/2;

  //print(mouseX, mouseY);

  // path //
  strokeWeight(5);
  stroke(0);
  line(width/2-20, 0, width/2-20, height);
  line(width/2+20, 0, width/2+20, height);

  // player //
  push();
  noStroke();
    playerDisplay(posX,posY);
  pop();
}

function playerDisplay(x,y){

  fill('rgb(0,0,255)');
  rectMode(CENTER);
  rect(x, y, 15, 15);

}

function keyPressed(){

    if (keyCode === UP_ARROW){
      xPos += 1
    }
    return false;

}
