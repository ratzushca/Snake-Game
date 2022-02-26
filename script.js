

const box = 5;
const gameScore = document.getElementById('score');
const prevoiusScore = document.getElementById('previousscore');

let snake =[];
snake[0]={
    x:1*box, //max 59
    y:9*box,  //max 29
   
};
// snake[1]={
//     x:2*box,
//     y:9*box
// };


let apple = {
    x : Math.floor(Math.random()*59+1) * box,
    y : Math.floor(Math.random()*29+1) * box
}

let d;
let score=0;
let bestScore = score;

window.onload=function startGame(){
    canvas = document.querySelector('canvas');
    context= canvas.getContext("2d");
    var frames= 3;
    setInterval(function callBoth(){
    snakedraw();
    appledraw(); 
    gameOver();
    },1000/frames);
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

function snakedraw(){
    
    context.clearRect(0, 0, canvas.width, canvas.height)
    for( let i = 0; i < snake.length ; i++){
        
        context.fillStyle = ( i === 0 )? "green" : "black";
        context.fillRect(snake[i].x,snake[i].y,box,box);
     
 
    if(snake[0].x === apple.x && snake[0].y === apple.y){
            score++;
            gameScore.textContent = `Score: ${score}`
        
            apple = {
                x : Math.floor(Math.random()*59+1) * box,
                y : Math.floor(Math.random()*29+1) * box

            } 

           
            snake.pop();
               
           
        }

        // which direction
    if( d === "LEFT"){
         snake[0].x-= box;
         break;
    } else if( d === "UP") {
        snake[0].y -= box;
    break;
    } else if( d === "RIGHT"){
        snake[0].x += box;
    break;
    }else if( d === "DOWN"){ 
        snake[0].y += box;
    break;
    }else if( d === "START") 
        snake[0].x += box;
    break; 
    

}
var nHead = {
    x: snake[0].x,
    y: snake[0].y
   }
   
   snake.unshift(nHead);
}


function appledraw(){
    
    context.fillStyle='red';
    context.fillRect(apple.x, apple.y,box,box);
    context.fill(); 
}


function gameOver(){
    

    if(snake[0].x>=canvas.width+box||snake[0].x<-box|| snake[0].y>=canvas.height+box|| snake[0].y<-box){
        alert('Game Over');
        snake[0]={
            x:9*box, //max 59
            y:9*box,  //max 29
        
        };

        apple = {
            x : Math.floor(Math.random()*59+1) * box,
            y : Math.floor(Math.random()*29+1) * box
        }
        return;
      
    }
}


      