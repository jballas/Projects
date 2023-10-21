let ball;
let dot;

function setup(){
    createCanvas(windowWidth, 600);

ball = new Juggler(50,150,50);
dotted = new Dotted_line();

}

function draw() {
  background(0)
  frameRate(30);

        fill(255);
ball.frame();
dotted.display();

}

class Dotted_line {
  constructor(){

  }

  frame(){
    this.display();
  }

  display(){
    //line(0,50,50,150)

      curve(0,74.316,80.5,88.109,102.339,0,54.023,87.356,97.701,0,49.425,91.954,102.299,9.195,0,36.756,88.2,79.284,1.455,66.693,195.708,112.606,413.488,52.937,159.77,102.362,45.977,86.207,96.552,419.54)
      stroke(255)

  }

}

class Juggler {

  constructor(x,y,size){
    this.x_loc = x;
    this.y_loc = y;
    this.size = size;
    this.delta_x = 10;
    this.delta_y = 10;
    this.follow = 3;
    }

  frame(){
        this.display();
        this.move();
        this.bounce();
      }

    display(){
      ellipse(this.x_loc, this.y_loc, this.size);
    }

    move(){
      this.x_loc += this.delta_x;
      this.y_loc += this.delta_y;
    }

    bounce(){
        // left to right movement
        if (this.x_loc >= width || this.x_loc <= 0){
            this.delta_x *= -1;
        }

        // up and down movement
        if (this.y_loc >= height -100 || this.y_loc <= 0){
            this.delta_y *= -1;
        }
      }
  }
