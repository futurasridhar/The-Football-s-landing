var ballImg, bgImg;
var ball, ballBody;
var rock, rockImg, rockBody; 


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ballImg = loadImage("Ball-removebg-preview.png");
	bgImg = loadImage ("bg.jpg");
	rockImg = loadImage ("rock1.png");
}

function setup() {
	
	createCanvas(800, 750);

    rock = createSprite (400, 650 );
    rock.addImage(rockImg);


	ball = createSprite(400,100);
	ball.addImage(ballImg);
	
	engine = Engine.create();
	world = engine.world;

	ballBody = Bodies.circle(400 , 100 , 5 , {restitution: 0.5, isStatic:true});
	World.add(world, ballBody);
	
	rockBody = Bodies.rectangle(400 , 650 , 800 , 120 ,{isStatic:true});
	World.add(world, rockBody);
	


    Engine.run(engine);

}


function draw() {
  background(bgImg);

  ball.x= ballBody.position.x 
  ball.y= ballBody.position.y 

 /* if (ball.y > 555 && ballBody.position.y > 555){
	  Matter.Body.setStatic (ballBody,true);
  }*/
   
  drawSprites();

}

function keyPressed() {

    	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(ballBody,false); 
	    }
 
}