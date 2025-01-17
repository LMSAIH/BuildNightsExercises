let canvas, ctx;
let ball = { x: 300, y: 300, radius: 15, color: "red", speed: 5 };

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  drawBall();

  document.addEventListener("keydown", moveBall);
  
}

function drawBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();
}

function moveBall(e) {
  switch (e.key) {
    case "w":
      ball.y -= ball.speed;
      break;
    case "s":
      ball.y += ball.speed;
      break;
    case "a":
      ball.x -= ball.speed;
      break;
    case "d":
      ball.x += ball.speed;
      break;
  }

  if (ball.x - ball.radius < 0) {
    ball.x = ball.radius;
  } 

  if((ball.x + ball.radius) > 600){
    ball.x = 600-ball.radius;
  }

  if((ball.y - ball.radius) < 0){
    ball.y = ball.radius;
  }

  if((ball.y+ball.radius)>600){
    ball.y = 600-ball.radius;
  }

  drawBall();
}
