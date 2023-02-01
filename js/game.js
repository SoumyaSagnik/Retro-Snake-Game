import {
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
  getScore,
} from "./snake.js";
import { outsideGrid } from "./grid.js";
import { update as updateFood, draw as drawFood } from "./food.js";

let lastRenderTime = 0;
let gameOver = false;
let snakeSpeed = 5;
const gameBoard = document.querySelector("#game-board");
const scoreValue = document.querySelector(".s");
const body = document.querySelector("body");

function main(currentTime) {
  if (gameOver) {
    gameResult(getScore());
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / snakeSpeed) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
  updateScore();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

function updateScore() {
  let score = getScore();
  scoreValue.innerHTML = score;
  updateDifficulty(score);
}

function updateDifficulty(score) {
  if (score > 59) snakeSpeed = 30;
  else if (score > 39) snakeSpeed = 25;
  else if (score > 24) snakeSpeed = 20;
  else if (score > 14) snakeSpeed = 15;
  else if (score > 4) snakeSpeed = 10;
}

function gameResult(score) {
  document.querySelector(".container").remove();
  const endElement = document.createElement("div");
  endElement.innerHTML =
    "<div class='game-over'><div class='top'><h1>Game Over</h1></div><div class='bottom'><h2>Score: <span id='se'></span></h2><button>Retry</button></div></div>";
  body.appendChild(endElement);
  const scoreInput = document.querySelector("#se");
  scoreInput.innerHTML = score;

  const retry = document.querySelector(".bottom button");
  retry.addEventListener("click", () => {
    window.location = "/";
  });
}
