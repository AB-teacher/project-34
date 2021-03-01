const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint;
var engine, world;
var ground, box1, box2;

function preload() {
    bgImg = loadImage("images/GamingBackground.png")
}
function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(600,590,1200,20,ground_options);
    World.add(world,ground);
    ball = new Ball(200,200,80,80);

   box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    box6 = new Box(900,100,70,70);
    box7 = new Box(800,100,70,70);
    box8 = new Box(800,100,70,70);
    box9 = new Box(800,100,70,70);
    box10 = new Box(800,100,70,70);
    box11= new Box(800,100,70,70);
    box12 = new Box(800,100,70,70);
    box13 = new Box(700,100,70,70);
    box14 = new Box(700,100,70,70);
    monster = new Monster(1100,550,300);
    chain = new Rope(ball.body,{x:250,y:150})
}

function draw(){
    background(bgImg);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1600,20);
    
   box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    ball.display();
    chain.display();
    monster.display();
   
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
}
