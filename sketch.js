//namespacing
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground, ball;

function setup() {
  createCanvas(800,400);
 myEngine = Engine.create();
 myWorld = myEngine.world;

 var ground_option = {
  'isStatic' : true

 }
 ground = Bodies.rectangle(200,390,200,20,ground_option);
 World.add(myWorld, ground);

 var ball_option = {
  'restitution' : 1.0

 }

 ball = Bodies.circle(200,100,20,ball_option);
 World.add(myWorld, ball);

 
}

function draw() {
  background(0);
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20)
  
}


/*
3 objects created in Matter.js library

Matter.World
Matter.Engine
Matter.Bodies






*/