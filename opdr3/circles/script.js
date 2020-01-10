// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let circleObject = {};

circleObject.x = 700;
circleObject.y = 400;
circleObject.size = 500;

draw();
function draw()
{
  context.clearRect(0,0,width,height);
  context.beginPath();
  context.lineWidth = 5;
  context.fillStyle = "Green";
  context.moveTo(circleObject.x, circleObject.y);
  context.arc(circleObject.x, circleObject.y, circleObject.size, 0, 2 * Math.PI);
  context.closePath();
  context.stroke();
  context.fill();
}

loop();
function loop(){
if(circleObject.size == 0)
{
  circleObject.size = 500;
}else
{
  circleObject.size -= 10;
}
draw();
  }
setInterval(loop, 20)
