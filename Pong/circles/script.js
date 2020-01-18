// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

let playerscore = 0;
let enemyscore = 0;

//
// circle (ball) begin
//
let ball = {};
ball.x = width / 2;
ball.y = height / 2;
ball.radius = 10;
ball.color = "white";
ball.speedX = 4;
ball.speedY = 8;

function drawBall() {
  context.beginPath();
  context.fillStyle = ball.color;
  context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
  context.closePath();
  context.stroke();
  context.fill();
}

function updateBall() {
  ball.x = ball.x + ball.speedX;
  ball.y = ball.y + ball.speedY;

  if (ball.y > height - ball.radius || ball.y < ball.radius) {
    ball.speedY = -ball.speedY;
  }
  if (ball.x > width - ball.radius || ball.x < ball.radius) {
    ball.speedX = -ball.speedX;

    if (ball.x > width - ball.radius) {
      playerscore++;
      score();
      standaard();
    } else {
      enemyscore++;
      score();
      standaard();
    }
  }

  // controlle collision with tabbles
  if(ball.x + ball.radius > tabbleR.x && ball.x + ball.radius < tabbleR.x + tabbleR.w)
{
  if(ball.y + ball.radius > tabbleR.y && ball.y + ball.radius < tabbleR.y + tabbleR.h)
  {
    ball.speedX = - ball.speedX;
    ball.speedY = + ball.speedY;
  }
}

if(ball.x - ball.radius > tabbleL.x && ball.x - ball.radius < tabbleL.x + tabbleL.w)
{
  if(ball.y + ball.radius > tabbleL.y && ball.y + ball.radius < tabbleL.y + tabbleL.h)
  {
    ball.speedX = - ball.speedX;
    ball.speedY = + ball.speedY;
  }
}
}

function standaard() {
  ball.x = width / 2;
  ball.y = height / 2;
}
//
// tabbleR (enemy)
//
let tabbleR = {};
tabbleR.h = 150; // the height of the rectangle in pixels
tabbleR.w = 5; // the width of the rectangle in pixels
tabbleR.x = width - 50; // upper left corner
tabbleR.y = height / 2 - (tabbleR.h / 2); // upper left corner

function drawTabbleR() {
  context.beginPath();
  context.fillRect(tabbleR.x, tabbleR.y, tabbleR.w, tabbleR.h);
  context.closePath();
  context.fill();
}

function updateTabbleR() {
  if (tabbleR.y + tabbleR.h / 2 > ball.y) {
    tabbleR.speed = -6;
  } else {
    tabbleR.speed = 6;
  }
  if (tabbleR.y <= 0 && tabbleR.speed == -6) {
    return;
  } else if (tabbleR.y + tabbleR.h >= height && tabbleR.speed == 6) {
    return;
  } else {
    tabbleR.y = tabbleR.y + tabbleR.speed;
  }
}
//
// TabbleL (Player)
//
let tabbleL = {};
tabbleL.h = 150; // the height of the rectangle in pixels
tabbleL.w = 5; // the width of the rectangle in pixels
tabbleL.x = 0 + 50; // upper left corner
tabbleL.y = height / 2 - (tabbleR.h / 2); // upper left corner

document.addEventListener('mousemove', e => {
  let y = e.pageY - tabbleL.h / 2;
  if(y < 0){ tabbleL.y = 0; return;}
  else if(tabbleL.y + tabbleL.h > height && y + tabbleL.h * 2 > height){return;}
  tabbleL.y = y;
});

function drawTabbleL()
{
    context.beginPath();
    context.fillRect(tabbleL.x, tabbleL.y, tabbleL.w, tabbleL.h);
    context.closePath();
    context.fill();
}
//
//game regeling
//
function score() {
  context.font = "50px Arial";
  context.fillText(playerscore + "   |   " + enemyscore,width/2 - 100, 50);
}
loop();

function loop() {
  context.clearRect(0, 0, width, height);
  //
  updateBall();
  drawBall();

  updateTabbleR();
  drawTabbleR();

  drawTabbleL();

  score();
}

setInterval(loop, 10);
