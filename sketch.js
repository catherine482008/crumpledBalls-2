
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
  crumpledPaperimg=loadImage("paper(1).png")
dustbinimg=loadImage("dustbinimg.png")
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;
	Paper=new paper(70,70,70)
   ground1=new ground(700,390,1400,20)
   db1=new dustbin(1200,350,200,20);
   db2=new dustbin(1300,350,20,100);
   db3=new dustbin(1100,350,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  db1.display()
  db2.display()
  db3.display()
  Paper.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85})
	}
}

var pocketMoney=500
if(pocketMoney>1000){
  console.log("catherine is happy")

}else{
  console.log("catherine is sad")
}

for(var i=0; i<=5; i++){
	console.log(i)
}
//Write a simple while loop:

var i =0
while (i<=5){
	console.log(i)
	i=i+1
}
var fruit=["apple","banana","watermelon"]
function circumference(radius){
	var circumference = 2 * 3.14 * radius
	return circumference
}
function area(radius){
  var area=3.14*radius*radius;
  return area
}
console.log(area(10))
console.log(circumference(10))
