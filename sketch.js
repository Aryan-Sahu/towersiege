const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function preload(){
poligon1=loadImage("polygon.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    var option=
poligon=Bodies.rectangle(100,250,10,10)

World.add(world,poligon)
    
    ground2= new Ground(390,300,180,20)
sling1=new SlingShot(poligon,{x:100,y:200})
box1=new Box(330,250,60,40)
box2=new Box(390,250,60,40)
box3=new Box(450,250,60,40)
box4=new Box(360,210,60,40)
box5=new Box(420,210,60,40)
box6=new Box(390,170,60,40)
}

function draw(){
    background(100)
    Engine.update(engine)
imageMode (CENTER)
    image(poligon1,poligon.position.x,poligon.position.y,50,50)

    ground2.display()
    sling1.display()
    fill ("pink")
    box1.display()
    fill ("yellow")
    box2.display()
    fill ("red")
    box3.display()
    fill ("green")
    box4.display()
    fill ("blue")
    box5.display()
    fill ("purple")
    box6.display()

}
function mouseDragged(){
    Matter.Body.setPosition(poligon, {x: mouseX , y: mouseY});
}