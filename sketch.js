const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score = 0;

function preload() {
    getTime();
    bg = "white"
}

function setup() {
    createCanvas(800,700);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground1 = new Ground(390,260,300,10);

    block1 = new Box(330,235,40,40);
    block2 = new Box(360,235,40,40);
    block3 = new Box(390,235,40,40);
    block4 = new Box(420,235,40,40);
    block5 = new Box(450,235,40,40);

    block6 = new Box(350,195,40,40);
    block7 = new Box(390,195,40,40);
    block8 = new Box(430,195,40,40);

    block9 = new Box(390,155,40,40);

    ground2 = new Ground(500,600,380,10);
    
    block10 = new Box(380,575,40,40);
    block11 = new Box(420,575,40,40);
    block12 = new Box(460,575,40,40);
    block13 = new Box(500,575,40,40);
    block14 = new Box(540,575,40,40);
    block15 = new Box(580,575,40,40);
    block16 = new Box(620,575,40,40);

    block17 = new Box(420,535,40,40);
    block18 = new Box(460,535,40,40);
    block19 = new Box(500,535,40,40);
    block20 = new Box(540,535,40,40);
    block21 = new Box(580,535,40,40);

    block22 = new Box(460,495,40,40);
    block23 = new Box(500,495,40,40);
    block24 = new Box(540,495,40,40);
    
    block25 = new Box(500,455,40,40);

    polygon = new Polygon(100,350,40,40);

    slingshot = new Slingshot(polygon.body,{x:100,y:350});
}

function draw() {
    background(bg);
    ground1.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    ground2.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    polygon.display();
    slingshot.display();

    text("SCORE: "+score,650,40);
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot.attach(this.polygon);
    }
}

async function getTime() {
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    var responseJson = await response.json();
    var Dt = responseJson.datetime;
    var hour = Dt.slice(11,13);
    console.log(hour);
    if(hour>=06&&hour<20){
        bg = "white";
    } else{
        bg = "black";
    }
}