var sun,mercury;
var angle = 0,angleSpeed = 0.7,sunRadius;

function preload(){
  earthImg = loadImage("earth.png");
  marsImg = loadImage("mars.png");
  mercImg = loadImage("mercury.png");
  venusImg = loadImage("venus.png");
  sunImg = loadImage("sun.png");
}

function setup() {
  createCanvas(1500,700);

  sun = createSprite(0, 0,10,10);
  sun.addAnimation("image",sunImg);
  sun.scale = 0.01;

  mercury = createSprite(90, 100,50,50);
  mercury.addImage("image",mercImg);
  mercury.scale = 0.1;

  venus = createSprite(120, -150,50,50);
  venus.addImage("image",venusImg);
  venus.scale = 0.5;

  earth = createSprite(-250, 100,100,100);
  earth.addImage("image",earthImg);
  earth.scale = 0.7;

  mars = createSprite(-300, -200,80,80);
  mars.addImage("image",marsImg);
  mars.scale = 0.55;
}

function draw() {
  background(0);  

  angleMode(DEGREES);
  translate(width/2,height/2);

  rotate(angle);
  angle = angle + angleSpeed;

  mercury.setCollider("circle");
  venus.setCollider("circle",0,0,70);
  earth.setCollider("circle",5,-5,125);
  mars.setCollider("circle",0,0,85);

  /*sun.debug = true;
  mercury.debug = true;
  venus.debug = true;
  earth.debug = true;
  mars.debug = true;*/

  if(World.frameCount % 4 === 0){
    sun.scale = sun.scale + 0.015;
    sun.setCollider("circle",0,0,sun.width/2.5);
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