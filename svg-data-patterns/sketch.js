function setup() {
    createCanvas(800,600)
}

function draw() {
  // put drawing code here

  frameRate(3);
  background('rgb(72, 199, 172)');


  // experiment with bezier curves
  noFill();
  stroke(255);
  bezier(250, 250, 0, 100, 100, 0, 100, 0, 0, 0, 100, 0);
  bezier(0,250.991,256.05,40.872, 394.413,43.609, 474.515,97.8);
  bezier(474.515,97.8,13.827,77.007,118.359,263.566, 243.932,318.638)
  bezier(243.932,318.638,96.51,42.326,202.907,20.034,281.553,84.255)




}
