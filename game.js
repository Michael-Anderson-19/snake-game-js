import { getSnakeHead, snakeIntersection, SNAKE_SPEED, update as updateSnake, draw as drawSnake } from './snake.js';
import { update as updateFood, draw as drawFood } from './food.js';
import { outsideGrid } from './grid.js';

const gameBoard = document.getElementById("game-board");

let lastRenderTime = 0;
let gameOver = false;

//game loop function 
function main(currentTime) {
    if (gameOver) {
        if (confirm("game over, press OK to restart.")) {
            window.location = '/';
        }
        return;
    }
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    lastRenderTime = currentTime;
    update();
    draw();
}

function update() {
    updateSnake();
    updateFood();
    checkDeath();
}

function draw() {
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

window.requestAnimationFrame(main);