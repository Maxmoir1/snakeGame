import { getInputDirection } from "./input.js";

export const SnakeSpeed = 7;
const snakeBody = [{ x: 10, y: 11 }];
let newSegmants = 0;

export function update() {
    addSegmants()
  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
}

export function draw(gameBoard) {
  snakeBody.forEach((segmant) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segmant.y;
    snakeElement.style.gridColumnStart = segmant.x;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  })
}

export function expandSnake(amount) {
  newSegmants += amount;
}

export function onSnake(position, { ignoreHead = false} = {}) {
  return snakeBody.some((segmant, index ) => {
      if(ignoreHead && index === 0)return false
    return equalPositions(segmant, position)
  })
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection() {
return onSnake(snakeBody[0], { ignoreHead: true})

}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function addSegmants() {
 for ( let i = 0; i < newSegmants; i++){
     snakeBody.push({ ...snakeBody[snakeBody.length -1] })
 }
 newSegmants = 0
}