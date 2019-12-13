// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

//start circleObject
let circles = [];

for(let i = 0; i < 10; i++)
{
let circleObject = {};
circleObject.x = GetRandomint(width);
circleObject.y = GetRandomint(height);
circleObject.radius = 40;
circleObject.color = "purple";
circleObject.speedX = 3;
circleObject.speedY = 4;

circleObject.draw = function(){
  context.beginPath();
  context.fillStyle = "Purple"
  context.arc(circleObject.x,circleObject.y,circleObject.radius,0,2*Math.PI);
  context.stroke();
  context.fill();
}

circleObject.update = function(){
  circleObject.x = circleObject.x + circleObject.speedX;
  circleObject.y = circleObject.y + circleObject.speedY;
  if(circleObject.y > height - circleObject.radius || circleObject.y < circleObject.radius){
    circleObject.speedY = - circleObject.speedY ;
  }
  if(circleObject.x > width - circleObject.radius || circleObject.x < circleObject.radius){
    circleObject.speedX = - circleObject.speedX ;
  }
}

// einde circleObject
circles.push(circleObject);
function loop(){
  context.clearRect(0,0,width,height);
  // circleObject.update();
  for(let i = 0; i < circles.lenght; i++){
    circles[i].update();
    circles[i].draw();
  }
}

setInterval(loop,10)

function GetRandomint(max){
  return Math.floor(Math.random()*max);
}
}
