//name spacing
//writing a long name as a short name
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
  createCanvas(600, 600);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic:true
  }

  ground = Bodies.rectangle(300,590,600,20,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution:1.0
  }

  ball = Bodies.circle(300,100,40,ball_options);
  World.add(world,ball);

}

function draw(){
  background(0);

  Engine.update(engine);

  fill ('yellow');
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,600,20);

  fill ('red');
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,80,80);
}