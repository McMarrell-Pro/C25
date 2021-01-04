
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bar3;
var ground;
var paper;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bar3 = new Dustbin(575,480,200,20);

	ground = new Ground(400,690,800,20);

	paper = new Paper(100,650,70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  bar3.display();

  ground.display();

  paper.display();
   
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}
}

