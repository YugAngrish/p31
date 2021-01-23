const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;

engine = Engine.create();
world = engine.World;

var ground
var p1;

function setup() {

  createCanvas(800,800);

  ground = new Ground(750)
  p1 = new Plinko(20,40)
  Engine.run(engine)
}

function draw() {
  Engine.update(engine)
  background(255,255,255);  
  drawSprites();
  p1.display();
  ground.display();
}
