const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var gameState="onSling";
var score = 0

function setup() {
  createCanvas(3600,1200);
  

  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(2000,1200,100000,50);
//bodies here
  base1 = new Ground(1600,900,900,50) 
  base2 = new Ground(2900,625,900,50) 
  box1 = new box(1364,832,70,70)
  box2 = new box(1435,832,70,70)
  box3 = new box(1506,832,70,70)
  box4 = new box(1577,832,70,70)
  box5 = new box(1648,832,70,70)
  box6= new box(1435,770,70,70)
  box7 = new box(1506,770,70,70)
  box8 = new box(1577,770,70,70)
 box9 = new box(1506,700,70,70)
  
 box10 = new box(2700,565,70,70)
 box11= new box(2735,565,70,70)
 box12= new box(2775,565,70,70)
 box13= new box(2805,565,70,70)
 box14= new box(2840,565,70,70)
 box15= new box(2735,565,70,70)
 box16= new box(2775,565,70,70)
 box17= new box(2805,565,70,70)
 box18= new box(2775,565,70,70)
poly = new polygon(600,600,100)

rope5 = new rope (poly.body,{x:500,y:500})








}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  base1.display()
  base2.display()
  
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()

box10 .display()
box11.display()
box12.display()
box13.display()
box14 .display()
box15 .display()
box16.display()
box17 .display()
box18 .display()
 rope5.display()
 poly.display()
 
text(mouseX+","+mouseY,mouseX,mouseY)
text("SCORE :"+score,750,40 )

drawSprites();
 }
function mouseDragged(){
  if(gameState==="onSling"){
  
      Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
  }
  }
function mouseReleased(){
  rope5.fly();
  gameState="launched"
}

function keyPressed(){
  if(keyCode === 32){
  rope5.attach(poly.body);
  }
}

