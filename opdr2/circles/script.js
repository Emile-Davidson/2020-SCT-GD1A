// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;


myFunction();
function myFunction() {
  setTimeout(function(){

    var color = ["red", "orange", "green", "blue", "yellow"];
    var randomColorNumber = Math.floor(Math.random() * 5);

    var x = Math.floor(Math.random() * width);
    var y = Math.floor(Math.random() * height);

    context.beginPath();
    context.lineWidth = 5;
    context.fillStyle = color[randomColorNumber];
    context.moveTo(x, y);
    context.arc(x, y, 40, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
    context.fill();

myFunction();
}, 1);
}
