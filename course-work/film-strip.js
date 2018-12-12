let net = [];
let wiggler = [];
let angle = 0;
let offset = 190;
let scalar = 15;
let speed = 0.05;

function setup(){
    createCanvas( 600, 600);

}

function draw(){
    background(0);

//  for( a = 0; a < 1.2; a += .4){
    let y = sin(angle ) * scalar;
    let x = offset;

for (i = 0; i < width; i ++ ){
    ellipse(x, y + 50 * i, 59, 50);
    angle += speed;
    offset ++;
    offset %= width;
}
//    displayBody(x, y, 10);


}

function displayBody(x,y, size){
  push();
      translate(x, y);
      //scale(s)
    fill('rgba(0, 255, 20, .40)');

      for(w =50; w <500; w +=50 ){
        ellipse(w, 100, size, size);
    }
      //ellipse(100, 55, 50, 50)
      //ellipse(150, 45, 50, 50)
      //ellipse(150, 45, 50, 50)
  pop();

}



/*
class Wiggler {

    constructor(){

        this.xPos = 1;
        this.yPos = 1;
        this.bodyColor ='rgba(0, 255, 20, .40)';


    }

    frame(x,y,s){
        this.displayBody(x,y,s);
        this.move();

    }

    //wiggler body
    displayBody(x,y,s){
        push();
            translate(x, y);
            scale(s)
            fill(this.bodyColor );
            ellipse(this.xPos, this.yPos, 0, 50);
        pop();
    }

    //sideways and vertical movement
    move(){
        this.xPos +=10;
        this.yPos = random(-2, 2) ;
    }


    // Next wiggler appears
    nextAppears(){
        if (this.xPos >= width){
            this.xPos = -500;
           //this.random_y = ceil( random(height));
        }

        console.log(this.random_y);
    }

}
*/
