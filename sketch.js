var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  obj1 = createSprite(100,300,70,90);
  obj1.shapeColor = "yellow";

  obj2 = createSprite(300,200,10,100);
  obj2.shapeColor = "purple";

  obj3 = createSprite(100,100,50,50);
  obj3.shapeColor = "blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if (isTouching(movingRect,obj3)){
    movingRect.shapeColor = "red";
    obj3.shapeColor = "red";
  }

  else{
    movingRect.shapeColor = "green";
    obj3.shapeColor = "green";
  }

  
  drawSprites()
}

  function isTouching(object1,object2){
    if (object1.x - object2.x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y < object2.height/2 + object1.height/2
      && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
  }
  else {
    return false;
  }
  }