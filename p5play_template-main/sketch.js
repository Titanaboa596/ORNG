var orng;
function setup() {
  createCanvas(600,600);
orng = createSprite(250,250,100,150);
}

function draw() 
{
  background("green");
  if (keyDown("RIGHT")){
    orng.x = orng.x +2 ;
  }
  if (keyDown("Left")){
    orng.x = orng.x -2 ;

  }

  if (keyDown("UP")){
    orng.y = orng.y -2 ;
  }
  if (keyDown("DOWN")){
    orng.y = orng.y +2 ;

  }
    drawSprites();

}




