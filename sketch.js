
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect,iron;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
hammer = createSprite("500,300,100,30");
hammer.shapeColor="yellow";

iron=createSprite("600,600,110,10");	
iron.shapeColor ="blue";

engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.x =mouseX;
  hammer.y=mouseY;
  drawSprites();
 
}



