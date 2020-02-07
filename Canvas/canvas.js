class BlackBall {
  constructor() {
    var black_ball = new Image();
    black_ball.src = "lib/img/ball.png";
    var black_x = window.innerWidth - 28;
    var black_y =
      window.innerHeight -
      28 -
      Math.floor(Math.random() * window.innerHeight + 50);
  }
  draw() {
    c.drawImage(black_ball, black_x, black_y, 20, 20);
  }
  update() {
    if (black_x <= 0) {
      black_x = window.innerWidth - 28;
      black_y =
        window.innerHeight -
        28 -
        Math.floor(Math.random() * window.innerHeight + 50);
    }
    black_x -= 5;
  }
}
class BlueBall {
  constructor() {
    var blue_ball = new Image();
    blue_ball.src = "lib/img/blueball.png";
    var blue_x = window.innerWidth - 28;
    var blue_y =
      window.innerHeight -
      28 -
      Math.floor(Math.random() * window.innerHeight + 50);
  }
  draw() {
    c.drawImage(blue_ball, blue_x, blue_y, 20, 20);
  }
  update() {
    if (blue_x <= 0) {
      blue_x = window.innerWidth - 28;
      blue_y =
        window.innerHeight -
        28 -
        Math.floor(Math.random() * window.innerHeight + 50);
    }
    blue_x -= 4;
  }
}
class GreenBall {
  constructor() {
    var green_ball = new Image();
    green_ball.src = "lib/img/greenball.png";
    var green_x = window.innerWidth - 28;
    var green_y =
      window.innerHeight -
      28 -
      Math.floor(Math.random() * window.innerHeight + 50);
  }
  draw() {
    c.drawImage(green_ball, green_x, green_y, 20, 20);
  }
  update() {
    if (green_x <= 0) {
      green_x = window.innerWidth - 28;
      green_y =
        window.innerHeight -
        28 -
        Math.floor(Math.random() * window.innerHeight + 50);
    }
    green_x -= 3;
  }
}
class RedBall {
  constructor() {
    var red_ball = new Image();
    red_ball.src = "lib/img/redball.png";
    var red_x = window.innerWidth - 28;
    var red_y =
      window.innerHeight -
      28 -
      Math.floor(Math.random() * window.innerHeight + 50);
  }
  draw() {
    c.drawImage(red_ball, red_x, red_y, 20, 20);
  }
  update() {
    if (red_x <= 0) {
      red_x = window.innerWidth - 28;
      red_y =
        window.innerHeight -
        28 -
        Math.floor(Math.random() * window.innerHeight + 50);
    }
    red_x -= 6;
  }
}
class Stick {
  constructor() {
    var stick_y = window.innerHeight / 2;
    var stick_x = 1;
  }
  draw() {
    c.fillStyle = "rgb(200, 200, 10)";
    c.fillRect(stick_x, stick_y, 5, 30);
  }
  update() {}
}

var canvas = document.querySelector("#canvas");
var c = canvas.getContext("2d");
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth;

//Display lives and score
c.font = "comic sans ms";
var life = 3;
var score = 0;

document.getElementById("canvas").onkeydown = function(event) {
  event.preventDefault();
};
document.addEventListener("keydown", function(e) {
  switch (e.keyCode) {
    case 38: {
      stick_y -= 20;
      break;
    }
    case 40: {
      stick_y += 20;
      break;
    }
  }
});
//INIT METHOD
function init() {
  var black_ball = new BlackBall();
  var blue_ball = new BlueBall();
  var green_ball = new GreenkBall();
  var red_ball = new RedBall();
  var stick = new Stick();
  animate();
}

function getDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.exp(x2 - x1, 2) + Math.exp(y2 - y1, 2));
}

function scoreup() {
  score += 1;
}
function lifedown() {
  life -= 1;
}

//MAIN LOOP
function animate() {
  requestAnimationFrame(animate);
  if (life <= 0) {
    c.fillStyle = "gray";
    c.fillRect(0, 0, window.innerWidth, window.innerHeight);
    c.fillStyle = "white";
    c.fillText("Game over", window.innerWidth / 2, window.innerHeight / 2);
  } else {
    draw();
    c.fillText("Lives left: " + life + " \t\t\t\t\t\t Score: " + score, 50, 10);
  }
}

function draw() {
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);
  c.imageSmoothingEnabled = false;

  update();
}

function update() {
  if (
    getDistance(
      stick.stick_x,
      stick.stick_y,
      black_ball.black_x,
      black_ball.black_y
    ) < 2 ||
    getDistance(
      stick.stick_x,
      stick.stick_y,
      blue_ball.blue_x,
      blue_ball.blue_y
    ) < 2 ||
    getDistance(
      stick.stick_x,
      stick.stick_y,
      green_ball.green_x,
      green_ball.green_y
    ) < 2
  ) {
    scoreup();
  }
  if (getDistance(stick_x, stick_y, red_x, red_y) < 2) {
    lifedown();
  }
}

// animate();
