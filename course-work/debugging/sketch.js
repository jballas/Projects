function setup(){
    createCanvas(500, 500);
    background(100);


}

function draw(){

}    

function touchMoved() {

    display();
    // prevent default
    return false;
}


  function display(){
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
  }