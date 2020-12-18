
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var bin1,bin1,bin3;
var invisible, invisibleImg;


function preload() {
invisibleImg = loadImage("images/dustbingreen.png");
}

function setup() {
  createCanvas(1200, 800);
  
  invisible = createSprite(900,615); 
  invisible.addImage(invisibleImg);
  invisible.scale = 0.78

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,800,width,120);

  ball = new Paper(100,750,50);

  bin1 = new Bin(900,730,200,20);
  bin2 = new Bin(810,645,20,150);
  bin3 = new Bin(990,645,20,150)


	Engine.run(engine);
  
}


function draw() { 
  Engine.update(engine);	
  rectMode(CENTER)	
  ellipseMode(RADIUS)
  background("white");

  keyPressed();

  ground.display();
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();

  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }  
}





