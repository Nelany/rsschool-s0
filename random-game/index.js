const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
let cell = 47;
let score = document.querySelector(".score");
let newScore = 0;

const food = new Image();
food.src = "./assets/apple.png";

let foodPlace = {
  x: Math.floor(Math.random() * 12) * cell,
  y: Math.floor(Math.random() * 10) * cell,
};

const snake = new Image();
snake.src = "./assets/circle.png";

let snakePlace = [];
snakePlace[0] = {
  x: 4 * cell,
  y: 5 * cell,
};

document.addEventListener("keydown", route);
let go;

function route(event) {
  if(event.keyCode === 37 && go !== "right")
    go = "left";
  if(event.keyCode === 38 && go !== "down")
    go = "up";
  if(event.keyCode === 39 && go !== "left")
    go = "right";
  if(event.keyCode === 40 && go !== "up")
    go = "down";
};

function draw() {

  context.drawImage(food, foodPlace.x, foodPlace.y, cell, cell);

  let goX = snakePlace[0].x;
  let goY = snakePlace[0].y;

  if(go === "up") goY -= cell;
  if(go === "down") goY += cell;
  if(go === "left") goX -= cell;
  if(go === "right") goX += cell;

  let goHead = {
    x: goX,
    y: goY,
  };


  if(goX < 0 || goX > cell * 11
    || goY < 0 || goY > cell * 9)
    clearInterval(game);


  if(goX === foodPlace.x && goY === foodPlace.y){
    newScore++;
    context.clearRect(foodPlace.x, foodPlace.y, cell, cell);
    foodPlace = {
      x: Math.floor(Math.random() * 12) * cell,
      y: Math.floor(Math.random() * 10) * cell,
    };
  } else {
  let tail = snakePlace.pop();
  context.clearRect(tail.x, tail.y, cell, cell);
  };

  for(let i = 0; i <snakePlace.length; i++) {
    if(goHead.x === snakePlace[i].x && goHead.y === snakePlace[i].y)
    clearInterval(game);
  };

  snakePlace.unshift(goHead);

  for(let i = 0; i < snakePlace.length; i++) {
    context.drawImage(snake, snakePlace[i].x, snakePlace[i].y, cell, cell);
  };

  score.textContent = newScore;
};

let game = setInterval(draw, 300);




food.onload = function() {

  const width = 47;
  const height = 47;

  context.drawImage(food, 0, 0, width, height);
};