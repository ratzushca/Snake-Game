

const box = 5;


let snake =[];
snake[0]={
    x:0*box, //max 59
    y:9*box,  //max 29

};



let food = {
    x : Math.floor(Math.random()*59+1) * box,
    y : Math.floor(Math.random()*29+1) * box
}



window.onload=function(){
    canvas = document.querySelector('canvas');
    context= canvas.getContext("2d");
    var frames= 3;
    setInterval(function callBoth(){
    snakedraw();
    appledraw(); 
    },1000/frames);
   

}


function snakedraw(){
    for( let i = 0; i < snake.length ; i++){
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.fillStyle = ( i == 0 )? "green" : "black";
        context.fillRect(snake[i].x,snake[i].y,box,box);
        snake[i].x +=box
}
}
function appledraw(){
    context.beginPath();
    context.fillStyle='red';
    context.arc(food.x, food.y, 3,3,10 * Math.PI);
    context.fill(); 
}


// let canvas;
// let snake;
// let apple;
// let x = 0;
// let y = 40;
// let d;

// document.addEventListener("keydown",direction);
// function direction(event){
//     let key = event.keyCode;
//     if( key == 37 && d != "RIGHT"){
      
//         d = "LEFT";
//     }else if(key == 38 && d != "DOWN"){
//         d = "UP";
      
//     }else if(key == 39 && d != "LEFT"){
//         d = "RIGHT";
        
//     }else if(key == 40 && d != "UP"){
//         d = "DOWN";
   
//     }
// }

// window.onload=function(){
    
//     canvas = document.querySelector('canvas');
//     snake= canvas.getContext("2d");
//     apple= canvas.getContext("2d");
//     drawapple();
//     var frames= 3;
//     setInterval(function callBoth(){
//         moveSnake();
//         drawEverything(); 
//     },1000/frames);
    
// }





// function moveSnake(){
//     snake.clearRect(0,0,innerWidth,innerHeight);
//     x=x+5;

//      // old head position
//      let snakeX = x;
//      let snakeY = y;
     
//      // which direction
//      if( d === "LEFT") snakeX -= 5;
//      if( d === "UP") snakeY -= 5;
//      if( d === "RIGHT") snakeX += 5;
//      if( d === "DOWN") snakeY += 5;
// }


// function drawEverything(){
//     //draws the snake
//     colorRect(x,y,5,5,"black");
//     colorRect(x+5,y,5,5,"blue")
//     colorRect(x+10,y,5,5,"black")
//     colorRect(x+15,y,5,5,"blue")
//     //darws the apple
      
// }

// function drawapple(){
//     apple.fillStyle ='red';
//     apple.beginPath();
//     apple.arc((Math.floor(Math.random()*60) * 5),(Math.floor(Math.random()*25) * 5),3,0,Math.PI*2,true);
//     apple.fill();  
// }
// function colorRect(leftX,topY, width, height, drawColor){
//     snake.fillStyle = drawColor;
//     snake.fillRect(leftX,topY, width, height);
// }




      