let x_one = 5;
let x_two = 50;
let y_one = x_one *2;
let y_two = y_one + 5;

function setup(){
    createCanvas(400, 400);
}


function draw(){

    translate(width *.25, height*.25);



    for( i = 0; i < 33; i ++)
    {
        rotate(i);
        line (x_one, y_one, x_two, y_two);

       //x_one ++;
       //y_one -- ;
       if (y_one >= width || x_one >= width){
         y_one = width;
         x_one = height;
       }
    }


}
