var canvas;
var snake;
var apple;
var x = 0;



window.onload=function(){
    canvas = document.querySelector('canvas');
    snake= canvas.getContext("2d");
    apple= canvas.getContext("2d");
    var frames= 3;
    setInterval(function callBoth(){
        moveEverything();
        drawEverything(); 
    },1000/frames);
}


function moveEverything(){
    snake.clearRect(0,0,innerWidth,innerHeight);
    x=x+5;
}


function drawEverything(){
    //draws the snake
    colorRect(x,40,5,5,"black");
    colorRect(x+5,40,5,5,"blue")
    colorRect(x+10,40,5,5,"black")
    colorRect(x+15,40,5,5,"blue")
    //darws the apple
    apple.fillStyle ='red';
    apple.beginPath();
    apple.arc(100,100,3,0,Math.PI*2,true);
    apple.fill();
}

function colorRect(leftX,topY, width, height, drawColor){
    snake.fillStyle = drawColor;
    snake.fillRect(leftX,topY, width, height);
}

// function getKeyAndMove(e) {
//     var key_code = e.which || e.keyCode;
//     switch (key_code) {
//         case 37: //left arrow key
//             moveLeft();
//             break;
//         case 38: //Up arrow key
//             moveUp();
//             break;
//         case 39: //right arrow key
//             moveRight();
//             break;
//         case 40: //down arrow key
//             moveDown();
//             break;
//     }
// }
// function moveLeft() {
//     snake.clearRect(0,0,innerWidth,innerHeight);
//     snake.fillStyle='rgba(19, 20, 20, 0.97)'
//     snake.fillRect(xOne,80,20,20);
//     xOne+=1;
//     snake.fillStyle='rgba(32, 83, 27, 0.97)'
//     snake.fillRect(xTwo,80,20,20);
//     xTwo+=1;
//     snake.fillStyle='rgba(19, 20, 20, 0.97)'
//     snake.fillRect(xThree,80,20,20);
//     xThree +=1;
//     snake.fillStyle='rgba(32, 83, 27, 0.97)'
//     snake.fillRect(xFour,80,20,20);
//     xFour+=1;
//     snake.fillStyle='rgba(19, 20, 20, 0.97)'
//     snake.fillRect(xFive,80,20,20);
//     xFive+=1;
// }
// function moveUp() {
//     snake.clearRect(0,0,innerWidth,innerHeight);
//     snake.fillStyle='rgba(19, 20, 20, 0.97)'
//     snake.fillRect(xOne,80,20,20);
//     xOne+=1;
//     snake.fillStyle='rgba(32, 83, 27, 0.97)'
//     snake.fillRect(xTwo,100,20,20);
//     xTwo+=1;
//     snake.fillStyle='rgba(19, 20, 20, 0.97)'
//     snake.fillRect(xThree,100,20,20);
//     xThree +=1;
//     snake.fillStyle='rgba(32, 83, 27, 0.97)'
//     snake.fillRect(xFour,100,20,20);
//     xFour+=1;
//     snake.fillStyle='rgba(19, 20, 20, 0.97)'
//     snake.fillRect(xFive,100,20,20);
//     xFive+=1;
// }
// function moveRight() {
//     snake.style.left = parseInt(snake.style.left) + 5 + "px";
// }
// function moveDown() {
//     snake.style.top = parseInt(snake.style.top) + 5 + "px";
// }

      