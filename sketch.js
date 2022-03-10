const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, engine, world;
var ground,leftSide,rightSide;
var groundObj;

function preload() {}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  // ground= new Ground(400,650,00,20);
  leftSide= new Ground(1100,600,20,120);
  rightSide= new Ground(1300,600,20,120);


  //Create the Bodies Here.
  var balls_options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0,
    density: 1.2
  };
  ball = Bodies.circle(200, -10, 20, balls_options);
  groundObj=new Ground(width/2,670,width,20)
  World.add(world, ball);
  Engine.run(engine);

  ellipseMode(RADIUS);
  rectMode(CENTER);
  keyPressed();

}

function draw() {
  background(0);

	Engine.update(engine);
  fill (  'white');
  ellipse(ball.position.x, ball.position.y, 20);
  // ground.display();
  leftSide.display();
  rightSide.display();
  groundObj.display();

  drawSprites();

}
function keyPressed() {
  if (keyCode===UP_ARROW) {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:5,y:-10})
    
  }
}