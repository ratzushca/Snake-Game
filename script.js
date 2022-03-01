

const box = 5;
let canvas = document.getElementById('gameCanvas');
const gameScore = document.getElementById('score');
const prevoiusScore = document.getElementById('previousscore');

let snake =[];
snake[0]={
    x:9*box, //max 59
    y:9*box,  //max 29
   
};



let apple = {
    x : Math.floor(Math.random()*(59+1))* box,
    y : Math.floor(Math.random()*(29+1))* box
}

let d;
let score=0;
let bestScore = score;

window.onload=function startGame(){
    canvas = document.querySelector('canvas');
    context= canvas.getContext("2d");
    var frames= 3;
    setInterval(function callAll(){
    snakeDraw();
    snakeEatsApple();
    appleDraw(); 
    gameOver();
    moveSnake();
    gameOverly();
    },500/frames);
}

document.addEventListener("keydown",direction);
function direction(event){
    let key = event.keyCode;
    if( key === 37 && d != "RIGHT"){
       
        d = "LEFT";
    }else if(key === 38 && d != "DOWN"){
        d = "UP";
      
    }else if(key === 39 && d != "LEFT"){
        d = "RIGHT";
       
    }else if(key === 40 && d != "UP"){
        d = "DOWN";
       
    }else if (key === 32){
        d="START"
    }

}

function snakeDraw(){
    
    context.clearRect(0, 0, canvas.width, canvas.height)
    for( let i = 0; i < snake.length ; i++){
        
        context.fillStyle = ( i === 0 )? "green" : "black";
        context.fillRect(snake[i].x,snake[i].y,box,box);
    }
};    
 

function snakeEatsApple(){
    if(snake[0].x === apple.x && snake[0].y === apple.y){
           //increment score 
        score++;
            gameScore.textContent = `Score: ${score}`
        //re-generate apple
            apple = {
                x : Math.floor(Math.random()*59+1) * box,
                y : Math.floor(Math.random()*29+1) * box
            }
// grow snake
const snakeHead = {
    x: snake[0].x,
    y: snake[0].y
   }
   
   snake.unshift(snakeHead);
   
}
};          

function appleDraw(){
    
    context.fillStyle='red';
    context.fillRect(apple.x, apple.y,box,box);
    context.fill(); 
}

function moveSnake(){
//make the snake move like a link in a chain
    for(let i = snake.length - 1; i>0 ;i--){
        snake[i] = Object.assign({}, snake[ i - 1]);
    }
//don't scrunche up the snake
    if(!d)return;

//move the snake based on direction

    if( d === "LEFT"){
         snake[0].x-= box;      
    } else if( d === "UP") {
        snake[0].y -= box;  
    } else if( d === "RIGHT"){
        snake[0].x += box;  
    }else if( d === "DOWN"){ 
        snake[0].y += box;  
    }else if( d === "START") 
        snake[0].x += box;      
}




function gameOver(){
    
    if(snake[0].x>=canvas.width||
       snake[0].x<-0||
       snake[0].y>=canvas.height||
       snake[0].y<-0){
        alert('Game Over');
        snake[0]={
            x:9*box, //max 59
            y:9*box,  //max 29
            
        }
      
        apple = {
            x : Math.floor(Math.random()*(59+1)) * box,
            y : Math.floor(Math.random()*(29+1)) * box
        }
        snake.splice(1);
        
        return;
    }
}

function gameOverly() {
    for (let i = 3; i < snake.length; i++) {
      let hitBody = snake[i].x === snake[0].x && snake[i].y === snake[0].y;
      if (hitBody === true) {
        alert("You ran into yourself!!!");
        snake[0]={
            x:9*box, //max 59
            y:9*box,  //max 29  
        }

        apple = {
            x : Math.floor(Math.random()*(59+1)) * box,
            y : Math.floor(Math.random()*(29+1)) * box
        }
        snake.splice(1);
        
        return;
      }
    }
  }