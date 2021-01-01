
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;



var roof,Ball1,Ball2,Ball3,Ball4,Ball5;
var ballx,ballr, bally;
var Chain1,Chain2,Chain3,Chain4,Chain5;

var canvas;
var mConstraint;
function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/1.5);

	engine = Engine.create();
	world = engine.world;


	let canvasMouse = Mouse.create(canvas.elt)
	canvasMouse.pixelRatio = pixelDensity()
	let options = 
	{
		mouse : canvasMouse
	}
	mConstraint = MouseConstraint.create(engine,options);

	World.add(world,mConstraint)
	//Create the Bodies Here.

	centerballx = width/2;
	bally = height/4+300;
	ballr = 40;

	roof = new Roof(width/2,height/4,width/4,20);
	Ball1 = new Ball(centerballx-2*ballr,bally,ballr);
	Ball2 = new Ball(centerballx-ballr,bally,ballr);
	Ball3 = new Ball(centerballx,bally,ballr);
	Ball4 = new Ball(centerballx+ballr,bally,ballr);
	Ball5 = new Ball(centerballx+2*ballr,bally,ballr);

	Chain1 = new Chain(Ball1.body,roof.body,-2*ballr);
	Chain2 = new Chain(Ball2.body,roof.body,-1*ballr);
	Chain3 = new Chain(Ball3.body,roof.body,0);
	Chain4 = new Chain(Ball4.body,roof.body,1*ballr);
	Chain5 = new Chain(Ball5.body,roof.body,2*ballr);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  roof.display();

  Chain1.display();
  Chain2.display();
  Chain3.display();
  Chain4.display();
  Chain5.display();

  Ball1.display();
  Ball2.display();
  Ball3.display();
  Ball4.display();
  Ball5.display();

  
 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x:-50,y:-45})
	}
}


