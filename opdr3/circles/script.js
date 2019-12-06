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
circleObject.sAngle = 0;
circleObject.eAngle = Math.PI*2;

circleObject.draw = function(){
  context.beginPath();
  context.lineWidth = 5;
  context.arc(circleObject.x, circleObject.y, circleObject.radius, 0, 2*Math.PI);
  context.closePath();
  context.stroke();
}

circleObject.draw();

function animate(){
  context.clearRect(0, 0, width, height);
  circleObject.draw();
  circleObject.x += 1
  circleObject.y += 1
}
setInterval(animate, 10)
