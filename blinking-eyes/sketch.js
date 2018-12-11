let x = 50;
let y = 50;
let width = 100;
let height = 50;
let eye_x;
let eye_y;
let lid;
let blink = 1;


function setup() {
  createCanvas(300, 300)
}

function draw() {
  background(0);
  fill(255);

  displayEye(x, y, width, height);
  displayEye(150, 150, width, height);

}

function displayEye(x,y, w,h){
  eye_x = x;
  eye_y = y;
  lid = eye_y - h;
  // Eye
  ellipse(eye_x, eye_y, w, h);

  // // Eyelid
  // push();
  //   rectMode(CENTER);
  //   fill(255);
  //   rect(x, lid, w, h);
  // pop();

  // Pupil
  push();
    strokeWeight(5);
    line(x,y, x, y+w);
  pop();
}
