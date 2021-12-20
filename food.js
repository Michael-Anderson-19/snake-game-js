import { expandSnake, onSnake } from "./snake.js";
import { randomGridPositon } from "./grid.js";

//initial food item
let food = { x: 10, y: 1 };

//Exapansion rate is how many segments the snake grows when eating food
const EXPANSION_RATE = 1;

export function update() {
    if (onSnake(food)) {
        expandSnake(EXPANSION_RATE);
        food = getRandomFoodPosition();
    }
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);

}

function getRandomFoodPosition() {
    let newFoodPosition;
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        //if new food is null or newfood is on snake generate new coordinates for the food
        newFoodPosition = randomGridPositon();
    }
    return newFoodPosition;
}
