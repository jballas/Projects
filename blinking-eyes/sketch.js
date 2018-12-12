let x = 150;
let y = 50;
let width = 100;
let height = 50;
let lid_x = 150;
let lid_y = 50;
blink = 1;

function setup() {
  createCanvas(300, 300)
}

function draw() {
  background(0);
  fill(255);


  displayEye(x, y, width, height);
  displayEye(150, 150, width, height);

// Eyelid
  push();
    fill(0);
    rectMode(CENTER);
    rect(lid_x, lid_y-50, width, height)
  pop();

lid_y += blink;

  if (lid_y >= 100){
       blink *= -1;
    }
  if (lid_y <= 50){
    blink*= -1;
  }

//console.log(lid_y);

}

function displayEye(x, y, w, h){

  // Eye
  ellipse(x, y, w, h);

  // Pupil
  push();
    strokeWeight(5);
    line(x,y, x, y+w);
  pop();


}
