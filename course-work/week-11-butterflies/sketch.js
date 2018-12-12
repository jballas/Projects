// Butterflies
// This is an experiment in flapping wings

let swarm = [];
let how_many_bugs = 15;

function setup() {

    createCanvas(windowWidth, 600);
    
    for ( let i = 0; i < how_many_bugs; i ++) {
        swarm.push( new Butterfly() );
    }
}


function draw() {
    background(0);
    frameRate(8);

    for ( let i = 0; i < swarm.length; i ++){
        swarm[i].frame();
    }
    
}

// Butterfly 

class Butterfly {

    constructor(){
        this.top_x = 5;
        this.top_y = 50;
        this.wingTip_x = 50;
        this.wingTip_y = 25;
        this.bottom_x = 5;
        this.bottom_y = 100;
        this.delta_x = random(-10, 10);
        this.delta_y = random(-10, 10);
        this.move_x = random(width);
        this.move_y = random(height);

        this.flip = 1;
        this.flap = 10;

        this.diameter = 50;
    }

    frame(){
        this.display();
        this.move();
        this.edgeCheck();
    }

    //Display butterfly
    display() {
        push()
        
        translate(this.move_x, this.move_y);
        
        // Right wing
    
        triangle(this.top_x, this.top_y, this.wingTip_x, this.wingTip_y, this.bottom_x, this.bottom_y);

        // Left wing
        push();

            scale( -this.flip , this.flip );
            stroke(255);
            noFill();
            triangle(this.top_x, this.top_y, this.wingTip_x, this.wingTip_y, this.bottom_x, this.bottom_y);
        
        pop();
        
        // Body
        
        ellipse( this.top_x - 5 , this.top_y + 20, 10, this.diameter);

        pop();
    }

    
    //Move wings, flapping
    move() {
   
        //Movement across the screen
        this.move_x += this.delta_x;
        this.move_y += this.delta_y;


        // Wing's flapping       
        this.wingTip_x -= this.flap;
        if (this.wingTip_x == 0){
            this.wingTip_x = 50;
        }

        console.log( this.move_x);

    }
    

    edgeCheck(){

        if (this.move_x >= width || this.move_x <= 0 ){
            this.delta_x *= -1;
        }
        if(this.move_y >= height || this.move_y <= -100 ) {
            this.delta_y *= -1;
        }
        
    }


    
}

