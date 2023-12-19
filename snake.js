//board

var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

//snake head
var snakeX = blockSize * 5;  // snake will start from 5th block
var snakeY = blockSize * 5;  // snake will start from 5th block     

var velocityX = 0;  // snake will not move in x direction
var velocityY = 0;  // snake will not move in y direction 

var snakeBody = [];  // snake body 


//food
var foodX; // = blockSize = 10;
var foodY;  // = blockSize = 10;

var gameOver = false;

window.onload=function() {
    board = document.getElementById("board");
    board.height= rows*blockSize;
    board.width=cols*blockSize;
    context= board.getContext("2d");   //used for drawing on the board
    
    placeFood();  // place the food at random position
    document.addEventListener("keyup",changeDirection); // change the direction of the snake when key is pressed
    update();  // update the snake position

    setInterval(update, 1000/10); // 1000ms/10 = 100ms = 0.1s

}

function update() {

    if(gameOver) {
        return;
    }

    context.fillStyle="black";  // color of the board it will make the board black
    context.fillRect(0, 0, board.width, board.height);   // fill the board with black color

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);  // food

    if (snakeX == foodX && snakeY == foodY){
        snakeBody.push([foodX, foodY])
        placeFood();
    }
     for (let i = snakeBody.length-1; i>=0; i--)  {
        snakeBody[i] = snakeBody[i-1];
        
        if (snakeBody.length ){
            snakeBody[0] = [snakeX, snakeY];
                }
     }


    for (let i = snakeBody.length-1; i>0; i--) {    
        snakeBody[i] = snakeBody[i-1]; // snake body will move in the direction of the head
    } 

    context.fillStyle="lime";
    snakeX +=velocityX * blockSize; // snake will move in x direction
    snakeY +=velocityY * blockSize; 
    context.fillRect(snakeX, snakeY, blockSize, blockSize);  // snake head
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1],blockSize, blockSize);
    }
// game over condition
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver=true;
        alert("game Over");
    }

    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver=true;
            alert("game Over");
        }
    }
}


function changeDirection(e) {
    if(e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
    }
    else if(e.code == "ArrowDown" && velocityY  != -1){
        velocityX = 0;
        velocityY = 1; 
    }
    else if(e.code == "ArrowLeft" && velocityX  != 1 ){
        velocityX = -1;
        velocityY = 0;
    } 
    else if(e.code == "ArrowRight" && velocityX  != -1){
        velocityX = 1;
        velocityY = 0;
    }

}

function placeFood(){
// random position of the food
// Math.floor(Math.random() * 10)  // it will give random number between 0 to 9
    foodX = Math.floor(Math.random() * cols)*blockSize;
    foodY = Math.floor(Math.random() * rows)*blockSize;

}