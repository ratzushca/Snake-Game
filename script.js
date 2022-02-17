var canvas = document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var snake= canvas.getContext("2d");
// snake.fillStyle='rgba(19, 20, 20, 0.97)'
// snake.fillRect(0,100,20,20);
// snake.fillStyle='rgba(32, 83, 27, 0.97)'
// snake.fillRect(20,100,20,20);
// snake.fillStyle='rgba(19, 20, 20, 0.97)'
// snake.fillRect(40,100,20,20);
// snake.fillStyle='rgba(32, 83, 27, 0.97)'
// snake.fillRect(60,100,20,20);
// snake.fillStyle='rgba(19, 20, 20, 0.97)'
// snake.fillRect(80,100,20,20);


var xOne = 0;
var xTwo = 20;
var xThree =40;
var xFour = 60;
var xFive = 80;
function animate(){
    requestAnimationFrame(animate);
    snake.clearRect(0,0,innerWidth,innerHeight);
    snake.fillStyle='rgba(19, 20, 20, 0.97)'
    snake.fillRect(xOne,100,20,20);
    xOne+=1;
    snake.fillStyle='rgba(32, 83, 27, 0.97)'
    snake.fillRect(xTwo,100,20,20);
    xTwo+=1;
    snake.fillStyle='rgba(19, 20, 20, 0.97)'
    snake.fillRect(xThree,100,20,20);
    xThree +=1;
    snake.fillStyle='rgba(32, 83, 27, 0.97)'
    snake.fillRect(xFour,100,20,20);
    xFour+=1;
    snake.fillStyle='rgba(19, 20, 20, 0.97)'
    snake.fillRect(xFive,100,20,20);
    xFive+=1;
}
animate();