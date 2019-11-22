// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// hier kun je op de canvas tekenen

context.beginPath();
context.lineWidth = 10;
context.fillStyle = "gray";
context.moveTo(200, 300);
context.lineTo(600,400);
context.lineTo(600, 600);
context.lineTo(200, 500);
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "red";
context.moveTo(300, 100);
context.lineTo(200,300)
context.lineTo(600,400)
context.lineTo(700,200)
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "gray";
context.moveTo(600, 400);
context.lineTo(600,600)
context.lineTo(800,500)
context.lineTo(800,300)
context.closePath();
context.stroke();
context.fill();

context.beginPath();
context.fillStyle = "gray";
context.moveTo(605, 395);
context.lineTo(800, 300);
context.lineTo(700, 200);
context.closePath();
context.stroke();
context.fill();
