var sun,planet1,planet2,planet3,planet4;

function setup() {
  createCanvas(1200,600);
  sun = createSprite(600, 300, 10, 10);
  sun.shapeColor = "yellow";

  planet1 = createSprite(700,200,40,40);
  planet1.shapeColor = "green";

  planet2 = createSprite(400,480,25,25);
  planet2.shapeColor = "red";

  planet3 = createSprite(100,100,50,50);
  planet3.shapeColor = "blue";

  planet4 = createSprite(1100,400,57,57);
  planet4.shapeColor = "brown";
}

function draw() {
  background("black");  

 /* sun.debug = true;
  planet1.debug = true;
  planet2.debug = true;
  planet3.debug = true;
  planet4.debug = true;*/

 if(World.frameCount % 4 === 0){
    sun.width = sun.width + 4;
    sun.height = sun.height + 4;
  }

  sun.setCollider("circle",0,0,sun.width/1.5);
  planet1.setCollider("circle",0,0,planet1.width/1.5);
  planet2.setCollider("circle",0,0,planet2.width/1.5);
  planet3.setCollider("circle",0,0,planet3.width/1.5);
  planet4.setCollider("circle",0,0,planet4.width/1.5);

  if(isTouching(sun,planet1)){
    planet1.destroy();
  }

  if(isTouching(sun,planet2)){
    planet2.destroy();
  }

  if(isTouching(sun,planet3)){
    planet3.destroy();
  }

  if(isTouching(sun,planet4)){
    planet4.destroy();
  }

  drawSprites();
}