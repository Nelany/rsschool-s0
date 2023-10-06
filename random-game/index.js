const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
let cell = 47;
let score = document.querySelector(".score");
let newScore = 0;


const snake = new Image();
snake.src = "./assets/circle.png";

let snakePlace = [];
let go;

function snakePlaceStart() {
  go = null;
  snakePlace = [];
  snakePlace[0] = {
    x: 4 * cell,
    y: 5 * cell,
  };
}

snakePlaceStart();


const food = new Image();
food.src = "./assets/apple.png";

let foodPlace;

function setFoodPlace() {
  foodPlace = {
    x: Math.floor(Math.random() * 12) * cell,
    y: Math.floor(Math.random() * 10) * cell,
  };

  for (let i = 0; i < snakePlace.length; i++) {
    if (foodPlace.x === snakePlace[i].x && foodPlace.y === snakePlace[i].y) {
      setFoodPlace();
    }
  }
};

setFoodPlace();

const eyes = new Image();
eyes.src = "./assets/eyes5.png";

document.addEventListener("keydown", route);

function route(event) {
  if (event.keyCode === 37 && go !== "right") go = "left";
  if (event.keyCode === 38 && go !== "down") go = "up";
  if (event.keyCode === 39 && go !== "left") go = "right";
  if (event.keyCode === 40 && go !== "up") go = "down";
}

function draw() {
  context.drawImage(food, foodPlace.x, foodPlace.y, cell, cell);

  let goX = snakePlace[0].x;
  let goY = snakePlace[0].y;

  if (go === "up") goY -= cell;
  if (go === "down") goY += cell;
  if (go === "left") goX -= cell;
  if (go === "right") goX += cell;

  let goHead = {
    x: goX,
    y: goY,
  };

  if (goX < 0 || goX > cell * 11 || goY < 0 || goY > cell * 9) {
    clearInterval(game);
    saveScore(newScore);
  }

  if (goX === foodPlace.x && goY === foodPlace.y) {
    newScore++;
    context.clearRect(foodPlace.x, foodPlace.y, cell, cell);
    setFoodPlace();
  } else {
    let tail = snakePlace.pop();
    context.clearRect(tail.x, tail.y, cell, cell);
  }

  for (let i = 0; i < snakePlace.length; i++) {
    if (goHead.x === snakePlace[i].x && goHead.y === snakePlace[i].y) {
      clearInterval(game);
      saveScore(newScore);
    }
  }

  snakePlace.unshift(goHead);

  for (let i = 0; i < snakePlace.length; i++) {
    context.clearRect(snakePlace[i].x, snakePlace[i].y, cell, cell);
    context.drawImage(snake, snakePlace[i].x, snakePlace[i].y, cell, cell);
    if (i === 0) {
      context.drawImage(eyes, snakePlace[i].x + 8, snakePlace[i].y + 7, 30, 30);
    }
  }

  score.textContent = newScore;
}

let game = setInterval(draw, 300);

const body = document.querySelector(".body");
const modal = document.querySelector(".modal");

body.addEventListener("click", openCloseModalWindow);

function openCloseModalWindow(event) {
  if (event.target.classList.contains("modal-closer")) {
    modal.classList.add("disabled");
  } else if (event.target.classList.contains("modal-opener")) {
    displayScores();
    modal.classList.remove("disabled");
  } else if (event.target.classList.contains("start")) {
    newScore = 0;
    clearInterval(game);
    clearCanvas();
    setFoodPlace();
    snakePlaceStart();
    game = setInterval(draw, 300);
  }
}

function saveScore(score) {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push(score);
  if (scores.length > 10) {
    scores.shift();
  }
  localStorage.setItem("scores", JSON.stringify(scores));
}

function displayScores() {
  const results = document.querySelector(".results");
  results.innerHTML = "";

  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.forEach((score, index) => {
    const scoreElement = document.createElement("li");
    scoreElement.textContent = `score ${score}`;
    results.appendChild(scoreElement);
  });
}

function clearCanvas() {
  context.clearRect(0, 0, cell * 12, cell * 10);
}
