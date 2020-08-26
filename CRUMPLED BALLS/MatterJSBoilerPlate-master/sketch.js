
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 300);
	ground = new Ground(800,300,1600,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){

	if (keyCode===UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
}



