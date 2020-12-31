
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob3,bob4,bob5;
var bobDiameter
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


  Roof = new Roof(400,100,400,40);
  
  bobDiameter=70;

	bob1 = new Bob(400,450,70);
    bob2 = new Bob(330,450,70);
	bob3 = new Bob(260,450,70);
	bob4 = new Bob(470,450,70);
	bob5 = new Bob(540,450,70);
	
  rope1= new Rope(bob1.body,Roof.body,0,0);
  World.add(world,rope1);
  rope2= new Rope(bob2.body,Roof.body,-bobDiameter*1,0);
  World.add(world,rope2);
  rope3= new Rope(bob3.body,Roof.body,-bobDiameter*2,0);
  World.add(world,rope3);
  rope4= new Rope(bob4.body,Roof.body,bobDiameter*1,0);
  World.add(world,rope4);
  rope5= new Rope(bob5.body,Roof.body,bobDiameter*2,0);
  World.add(world,rope5)
  	
  var render = Render.create({
		element: document.body,
	  engine: engine,
	  options: { 
	    width: 800,
	    height:400,
	    wireframes: false
	  }
	});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-200,y:-100}); } 
}

