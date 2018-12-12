let bugs = [];
let how_many_bugs = 10;


// Setup a for() Loop and Array.
function setup(){
    createCanvas( windowWidth, 600);

    for (let i = 0; i < how_many_bugs; i ++ ){
        bugs.push( new Caterpillar() );
    }

}

// Draw a for()loop that takes the data from the array and draws it according to the frame methods I wrote in my caterpillar class.
function draw(){
    frameRate(20);

    background(0);

    for(let i = 0; i < bugs.length; i ++){
        bugs[i].frame(bugs, i);
    }

}
