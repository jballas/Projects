$(document).ready(function(){

var wind_field = new Array();
var canvas = document.getElementById("mainCanvas");
canvas.setAttribute("width", window.innerWidth * .5);
canvas.setAttribute("height" , window.innerHeight * .75);
var ctx = canvas.getContext("2d");
var box_width = 50;
var box_height = 50;
var wind_angle;
var colors;


//Normally, when making a wind field you collect wind speed from an API
// I decided to just find some wind data as a json file.
// Inspired by this tutorial: https://codepen.io/Mamboleoo/pen/xxGEVXM

function wind(){
  $.getJSON("./data/wind-speed-lolo.json", function(data){

          for(let i = 0; i < data.speed.length; i ++){
                let j = data.speed[i];
                wind_field.push(j);

              }

              for (let i = 0; i < wind_field.length; i ++){
                draw_wind(wind_field[Math.floor(Math.random()*wind_field.length)]["Wind Speed (m/s)"]);
              //draw_wind(wind_field[i]["Wind Speed (m/s)"]);
              }

})
/*
        .done(function() { // Testing for errors during process.
           console.log( "second success" );
         })
         .fail(function() {
           console.log( "error" );
         })
         .always(function() {
           console.log( "complete" );
         });*/
}
wind();

/*
setInterval(update,50000/10);

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    wind();
  }
*/

function draw_wind(turn){
  let r = 155;
  let g = 219;
  let b = 228;
  let alpha= 0.2;
 colors = "rgba("+r+","+g+","+b+","+alpha+")";
           // Creates box grid
           for (i = 0; i< canvas.width; i += box_width){
             for (j = 0; j < canvas.height; j += box_height){

  /*             ctx.fillStyle = "rgba(0,0,0,"+alpha+")";
               ctx.fillRect(i,j,box_width,box_height);
               ctx.strokeStyle = ("rgb(60, 103, 96)");
               ctx.lineWidth = 2;
               ctx.strokeRect(i,j,box_width,box_height);
*/
           // Create a line in each of the grid boxes
               ctx.beginPath();
               ctx.moveTo(i,j);
               ctx.lineTo(i+box_width,j+box_height)
               ctx.strokeStyle = colors;
               //ctx.strokeStyle = ("rgba(155,219,228,0.2)");
               ctx.stroke();

               // rotate lines per wind data
               ctx.rotate(turn);
              // rotates the lines in a pattern
              //ctx.rotate((Math.PI / 180) * 25);

             }
           }
}

/*make a gradient of the wind colors, so that any line past a certain point is a different color
function color_change(){
  let r = 17;
  let g = 126;
  let b =136;
  let alpha= 0.3;

 colors = "rgba("+r+","+g+","+b+","+alpha+")";
  for(b= 136; b<=255; b++){

    if (b == 255 ){
      b=136
      console.log(b);
    }
  }
}
*/


/* Creates a graph paper grid
  for (i = 0; i < canvas.width; i +=100){
    ctx.moveTo(0,0 + i);
    ctx.lineTo(canvas.width,i);
    ctx.stroke();
  }
  for (i = 0; i <canvas.height; i += 100){
    ctx.moveTo(0 + i,0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }
*/
});
