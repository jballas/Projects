
let red = 10
let green = 25
let blue = 200

// Nice, I changed the initial location of X and Y from 0 to 10 and it make a scattered, dropping.
// removing the Move function and making location of X to 1000 gets me a long scattered lines
let loc_x = 25;
//At 0 they are just lines that blink. let loc_y = 0;
// At 20 they are a polygon with extra lines sticking out. let loc_y = 20;
// When I changed y to 10, they became actual star shapes!!!
let loc_y = 10;
let delta_x = 5;


let s = 0;
let button;
let click = true;

/********** SETUP **********/
function setup() {
    createCanvas(400,400)
    button = createButton("Start");

    button.mousePressed(startStop);
}

function draw(){
    frameRate(3);
    background( red,green,blue );
    starDisplay();

    setTimeout( moveStar, 1000);
}


function starDisplay(){
    star(width * .25, height * .25);
    star(width * .75, height * .75);
    stroke(255, 204, 0);

}


function star(x, y){
  let r = random(5);

    for ( a = 0; a < 50; a += 5){
        push();
            translate(x, y /r);
            rotate(a + mouseY - height / 2, mouseX - width / 2);
            line(loc_x * -6, loc_y, loc_x, loc_y);
        pop();
    }

}

function moveStar(){

    //I change from + to minus and now it bounces. It's very much like twinking stars. Althought they blink at the same time. Too bad I can't add an element of randomness to their blinking.

    loc_x -= delta_x;

    if(loc_x + delta_x >= 0 || loc_x + delta_x <= 100) {
        loc_x *= -1;
    }
}

function timer(){

    s = second();

    text('Current second: \n' + s, 5, 50);

    if (s ===3) {
    }
    else{
    }

}

function startStop(){


    if ( click == true){
        click = false;
        button.html("restart")
        noLoop()
    } else{
        click = true;
        loop();
        button.html("pause")
    }

}
