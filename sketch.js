var sun,mercury;
var angle = 0,angleSpeed = 0.7,sunRadius;

function setup() {
  createCanvas(1500,700);

  sun = createSprite(0, 0,10,10);
  sun.shapeColor = "yellow";

  mercury = createSprite(70, 20,20,20);
  mercury.shapeColor = "red";

  venus = createSprite(200, -150,50,50);
  venus.shapeColor = "blue";

  earth = createSprite(-250, 100,100,100);
  earth.shapeColor = "green";

  mars = createSprite(-300, -200,80,80);
  mars.shapeColor = "brown";
}

function draw() {
  background(0);  

  angleMode(DEGREES);
  translate(width/2,height/2);

  rotate(angle);
  angle = angle + angleSpeed;

  if(World.frameCount % 4 === 0){
    sun.width = sun.width + 4;
    sun.height = sun.height + 4;
  }

  if(sun.collide(mercury)){
    mercury.destroy();
  }

  if(sun.collide(venus)){
    venus.destroy();
  }

  if(sun.collide(earth)){
    earth.destroy();
  }

  if(sun.collide(mars)){
    mars.destroy();
  }

  drawSprites();
}