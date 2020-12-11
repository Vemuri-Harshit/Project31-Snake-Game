var grp = 20;
var col;
var row;

function foodLocation(){

   col = floor(width/grp);
  row = floor(height/grp);
  
  var x = random(floor(col));
  var y = random(floor(row));
  
  food = createVector(x,y);
  
  }

function setup(){

var canvas = createCanvas(600,600);

frameRate(5);

  s = new Snake();


  foodLocation();
}

function keyPressed(){

  if(keyCode === UP_ARROW){

    s.setDir(0,-1);

  }else if(keyCode === DOWN_ARROW){

    s.setDir(0,1);

  }else if(keyCode === RIGHT_ARROW){

    s.setDir(1,0);
    
  }else if(keyCode === LEFT_ARROW){

    s.setDir(-1,0);
    
  }

}

function draw(){

  scale(grp);
  background(250);



s.update();
s.show();

if(s.endGame()){

console.log("Game over");
background(255,0,0);
noLoop();

}


noStroke();

fill(255,0,0);;
rect(food.x,food.y,1,1);


if(s.eat(food)){

foodLocation();

}
}






