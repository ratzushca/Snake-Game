

const box = 5;

let snake =[];
snake[0]={
    x:0*box, //max 59
    y:9*box,  //max 29

};

let apple = {
    x : Math.floor(Math.random()*59+1) * box,
    y : Math.floor(Math.random()*29+1) * box
}

let d;

window.onload=function(){
    canvas = document.querySelector('canvas');
    context= canvas.getContext("2d");
    var frames= 3;
    setInterval(function callBoth(){
    snakedraw();
    appledraw(); 
    },1000/frames);
}

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
       
    }else if (key == 32){
        d="START"
    }

}

function snakedraw(){
    for( let i = 0; i < snake.length ; i++){
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.fillStyle = ( i == 0 )? "green" : "black";
        context.fillRect(snake[i].x,snake[i].y,box,box);
     
        // which direction
        if( d == "LEFT"){
         snake[0].x-= box;
         break;
        } else if( d == "UP") {
        snake[0].y -= box;
        break;
        } else if( d == "RIGHT"){
        snake[0].x += box;
        break;
        }else if( d == "DOWN"){ 
        snake[0].y += box;
        break;
        }else if( d == "START") 
        snake[0].x += box;
        break;

}
}

function appledraw(){
    context.beginPath();
    context.fillStyle='red';
    context.fillRect(apple.x, apple.y,box,box);
    context.fill(); 
}



      