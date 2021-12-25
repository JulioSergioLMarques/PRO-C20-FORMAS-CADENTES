
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var world;

var ball;
var bloco1;
var bloco2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var propriedadeschao = {
    isStatic:true
  }
   
  chao = Bodies.rectangle(600,400,1200,200,propriedadeschao);
  World.add(world,chao);
 
  var ball_propriedades = {
    restitution: 0.95,
    friction:0.01,
    frictionAir:0.01
  }
   var propriedadesbloco1 = {
     restitution:0.5,
     friction:0.02,
     frictionAir:0
   }
  
   var propriedadesbloco2 = {
     restitution:1,
     friction:0.05,
     frictionAir:0.4
   }

  ball = Bodies.circle(100,10,20,ball_propriedades);
  World.add(world,ball);
  
  bloco1 = Bodies.rectangle(110,50,15,15,propriedadesbloco1);
  World.add(world,bloco1);
  
  bloco2 = Bodies.rectangle(200,50,20,20,propriedadesbloco2);
  World.add(world,bloco2);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  rect(chao.position.x,chao.position.y,1200,200);

  ellipse(ball.position.x,ball.position.y,20);
  rect(bloco1.position.x,bloco1.position.y,15,15);
  rect(bloco2.position.x,bloco2.position.y,20,20);
  

  
  
}