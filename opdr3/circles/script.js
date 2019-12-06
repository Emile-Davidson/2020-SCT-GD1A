// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;


// context.beginPath();
// context.fillStyle = "orange";
// context.strokeStyle = "black";
// context.lineWidth = 5;
// context.arc(300, 200, 60, 0, 2*Math.PI);
// context.closePath();
// context.stroke();
// context.fill();
let circleObject = {};

circleObject.x = 300;
circleObject.y = 200;
circleObject.radius = 60;
circleObject.color = "yellow";
circleObject.velocity_x = 3;
circleObject.velocity_y = 2;



circleObject.draw = function(){
  context.beginPath();
  context.lineWidth = 5;
  context.fillStyle = circleObject.color;
  context.arc(circleObject.x, circleObject.y, circleObject.radius, 0, 2*Math.PI);
  context.closePath();
  context.stroke();
  context.fill();
}

circleObject.draw();

function animate(){
  context.clearRect(0, 0, width, height);
  if(circleObject.x >= width)
  {
    circleObject.velocity_x = -3;
    if(circleObject.radius >= 100){ circleObject.radius -= 5;}
  }
  if(circleObject.y >= height){
    circleObject.velocity_y = -2;
  }
  if(circleObject.x == 0)
  {
circleObject.velocity_x = 3;
  }
  if(circleObject.y == 0)
  {
circleObject.velocity_y = 2;
  }
  circleObject.x += circleObject.velocity_x;
  circleObject.y += circleObject.velocity_y;

  circleObject.draw();




}
setInterval(animate, 10)
