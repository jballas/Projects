let player_init_x = 50;
let player_init_y = 50;
let player;
let boxes = [];
let howManyBoxes = 4;

function setup (){
    createCanvas (400, 400)

    for (i = 0; i < howManyBoxes; i ++ ){    
        boxes[i] = new Obstacles(100,100);
    }

    player = new Player(player_init_x, player_init_y);
}

function draw() {
    background(0);

    textSize(25);
    fill(255);
    text('About Page', 200, 100);

    for(let i = 0; i < boxes.length; i++){
        boxes[i].displayTable();
        boxes[i].collidesWith();
    }

    player.display();
    player.move();
    player.inBounds();

}

class Player {

    constructor(x,y){

        this.pos = {
            x,
            y
        }
        this.size = 50; // Size of player sprite
        this.speed = 5;   //this controls how fast the player moves
        this.radius = this.size/ 2.5; // This controls how close you have to be to reach the goal.

    }

    // Lucy sprite will go here

    display(){

        ellipse(this.pos.x, this.pos.y, this.size);
    }

    // Lucy's movement across the screen will be controlled by the user.
    move(){
        if (keyIsDown (LEFT_ARROW) ) {
            this.pos.x -= this.speed;
        } 
        if (keyIsDown(RIGHT_ARROW) ) {
            this.pos.x += this.speed;
        } 
        if (keyIsDown (UP_ARROW) ) {
            this.pos.y -= this.speed;
        } 
        if (keyIsDown (DOWN_ARROW) ) {
            this.pos.y += this.speed;
        }
    }

    // Prevents Lucy from moving off the screen. She will be inside a house, and can't move through walls, unlike the ghosts. 
    inBounds(){
        if (this.pos.x <= 0) {
            this.pos.x = 0;
        }
        if (this.pos.y <= 0) {
            this.pos.y = 0;
        }
        if (this.pos.x >= width ) {
            this.pos.x = width;
        }
        if (this.pos.y >= height) {
            this.pos.y = height;
        }
    }
}


class Obstacles {

    // What kind of obstacles? bookshelf, anvil, table, chair
    // Four sounds like a good amount. Squares, rectangles appear randomly.
    // They basically have to be like the walls that player has to avoid.

    constructor(x,y) {
        this.x = x ;
        this.y = y;
        this.size = [
            10, 15, 20, 40
        ]
    }

    displayBookshelf(){
        push();
        rectMode(CENTER);
        rect(this.x, this.y, this.size[0], this.size[2]);
        pop();
    }

    displayTable(){
        push();
            rectMode(CENTER);
            fill( 'green');
            rect(this.x, this.y, this.size[3], this.size[3]);
        pop();
    }
    
    displayChair(){
        rect(this.x, this.y, this.size[1]);
    }

    displayAnvil(){
        rect(this.x, this.y, this.size[0])
    }

    collidesWith(){
        let d = dist( player.pos.x, player.pos.y, this.x, this.y);
             
        if (d <= player.radius + this.size[0] ){
    
            player.pos.x = this.x;
        }
        
    }

}