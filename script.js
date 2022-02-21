let canvas;
let snake;
let apple;
let x = 0;
let y = 40;
let d;

document.addEventListener("keydown",direction);
function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
      
        d = "LEFT";
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
      
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
        
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
   
    }
}

window.onload=function(){
    
    canvas = document.querySelector('canvas');
    snake= canvas.getContext("2d");
    apple= canvas.getContext("2d");
    drawapple();
    var frames= 3;
    setInterval(function callBoth(){
        moveSnake();
        drawEverything(); 
    },1000/frames);
    
}





function moveSnake(){
    snake.clearRect(0,0,innerWidth,innerHeight);
    x=x+5;

     // old head position
     let snakeX = x;
     let snakeY = y;
     
     // which direction
     if( d === "LEFT") snakeX -= 5;
     if( d === "UP") snakeY -= 5;
     if( d === "RIGHT") snakeX += 5;
     if( d === "DOWN") snakeY += 5;
}


function drawEverything(){
    //draws the snake
    colorRect(x,y,5,5,"black");
    colorRect(x+5,y,5,5,"blue")
    colorRect(x+10,y,5,5,"black")
    colorRect(x+15,y,5,5,"blue")
    //darws the apple
      
}

function drawapple(){
    apple.fillStyle ='red';
    apple.beginPath();
    apple.arc((Math.floor(Math.random()*60) * 5),(Math.floor(Math.random()*25) * 5),3,0,Math.PI*2,true);
    apple.fill();  
}
function colorRect(leftX,topY, width, height, drawColor){
    snake.fillStyle = drawColor;
    snake.fillRect(leftX,topY, width, height);
}




      