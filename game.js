import {
  update as updateSnake,
  draw as drawSnake,
  SnakeSpeed,
  getSnakeHead,
  snakeIntersection,
  onSnake,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
let clicked = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm("You Lost! Press okay to restart.")) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SnakeSpeed) return;

  lastRenderTime = currentTime;

  update();

  draw();
}
window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

//let score = 0;
//function updateScore(num){
//var elem = snake.getElementById('p2')
//if(updateFood)
//score ++
//}
