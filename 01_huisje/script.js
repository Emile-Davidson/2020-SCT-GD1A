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

// context.beginPath();
// context.fillStyle = "gray";
// context.moveTo(200, 300);
// context.lineTo(600,400);
// context.lineTo(600, 600);
// context.lineTo(200, 500);
// context.closePath();
// context.stroke();
// context.fill();

// context.beginPath();
// context.fillStyle = "green";
// context.moveTo(0, 500);
// context.lineTo(1535, 500);
// context.lineTo(1535, 752);
// context.lineTo(0, 752);
// context.closePath();
// context.fill();
// context.stroke();

context.beginPath();
context.fillStyle = "#de5b3a";
context.moveTo(1050, 40);
context.lineTo(900, 160);
context.lineTo(400, 160);
context.lineTo(550, 40);

context.closePath();
context.fill();

context.beginPath();
context.fillStyle = "#302d2d";
context.moveTo(400, 540);
context.lineTo(600, 540);
context.lineTo(600, 600);
context.lineTo(400, 600);

context.moveTo(700, 540);
context.lineTo(900, 540);
context.lineTo(900, 600);
context.lineTo(700, 600);

context.moveTo(1200, 440);
context.lineTo(1200, 500);
context.lineTo(900, 600);
context.lineTo(900, 540);


context.closePath();
context.fill();

context.beginPath();

context.fillStyle = "darkgray";
context.moveTo(400, 160);
context.lineTo(600, 160);
context.lineTo(600, 540);
context.lineTo(400, 540);

context.moveTo(700, 540);
context.lineTo(700, 160);
context.lineTo(900, 160);
context.lineTo(900, 540);

context.moveTo(900, 540);
context.lineTo(1200, 440);
context.lineTo(1200, 200);
context.lineTo(1050, 40);
context.lineTo(900, 160);

context.moveTo(660, 160);
context.lineTo(650, 100);
context.lineTo(740, 160);
context.lineTo(740, 400);
context.lineTo(560, 400);
context.lineTo(560, 160);
context.lineTo(650, 100);
context.closePath();
context.fill();

context.beginPath();
context.lineWidth = 3;
context.fillStyle = "#471b11";
context.moveTo(600, 600)
context.lineTo(600, 400);
context.lineTo(700, 400);
context.lineTo(700, 600);
context.closePath();
context.fill();
context.stroke();

// uitlijnen huis
context.beginPath();
context.lineWidth = 2;
context.fillStyle = "gray";
context.moveTo(400, 600);
context.lineTo(900, 600);
context.moveTo(900, 600);
context.lineTo(1200, 500);
context.moveTo(1200, 500);
context.lineTo(1200, 200);
context.moveTo(900, 600);
context.lineTo(900, 160);
context.moveTo(900, 160);
context.lineTo(1050, 40);
context.moveTo(1050, 40);
context.lineTo(1200, 200);
context.moveTo(1050, 40);
context.lineTo(550, 40);
context.moveTo(550, 40);
context.lineTo(400, 160);
context.moveTo(400, 160);
context.lineTo(400, 600);
context.moveTo(400, 160);
context.lineTo(560, 160);
context.moveTo(900, 160);
context.lineTo(740, 160);
context.moveTo(650, 100);
context.lineTo(740, 160);
context.moveTo(650, 100);
context.lineTo(560, 160);
context.moveTo(760, 100);
context.lineTo(650, 100);
context.moveTo(760, 100);
context.lineTo(740, 160);
context.moveTo(560, 160);
context.lineTo(560, 600);
context.moveTo(740, 160);
context.lineTo(740, 600);
context.closePath();
context.stroke();
context.fill();



// ramen
myFunction();
function myFunction() {
  setTimeout(function(){
    var color = ["#ebe84b", "#120e0c"];
    var random = Math.floor(Math.random() * 2);

    context.beginPath();
    context.fillStyle =  color[random];

    context.moveTo(780, 200);
    context.lineTo(860, 200);
    context.lineTo(860, 300);
    context.lineTo(780, 300);
    context.lineTo(780, 200);

    context.moveTo(780, 420);
    context.lineTo(860, 420);
    context.lineTo(860, 520);
    context.lineTo(780, 520);
    context.lineTo(780, 420);

    context.moveTo(440, 200);
    context.lineTo(520, 200);
    context.lineTo(520, 300);
    context.lineTo(440, 300);
    context.lineTo(440, 200);

    context.moveTo(440, 420);
    context.lineTo(520, 420);
    context.lineTo(520, 520);
    context.lineTo(440, 520);
    context.lineTo(440, 420);



    context.closePath();
    context.stroke();
    context.fill();

    myFunction();
  }, 1000);
  }
