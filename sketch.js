var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{
			width:1300,
			height:600,
			wireframes:false
		}
	});
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("brown")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2,  height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	
	var options = {
		isStatic : true
	}
	box1 = new Box(400,650,180,20);
	World.add(world, box1);
	box2 = new Box(300,620,25,100);
	World.add(world, box2);
   box3 = new Box(490,620,25,100);
   World.add(world, box3);

}


function draw() {
 // rectMode(CENTER);
  background(0);
  Engine.update(engine);
  Render.run(render);
  console.log(box1);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.setStatic(packageBody,false);




  }
}



